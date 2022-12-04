/* eslint-disable wrap-iife */
/* eslint-disable consistent-return */
import React, { createContext, useContext, useState } from 'react';
import Atoms from '../atoms';
import Molecules from '../molecules';
import SelectTrigger from '../molecules/SelectTrigger';

const SelectContext = createContext(null);
const optionsMap = new Map();
export const useSelectContext = () => useContext(SelectContext);

const showAnimation = (target, container) => {
  const element = container || window;
  const from = element === window ? window.scrollY : element.scrollTop;
  const to = target.offsetTop;
  const DIRECTION = from < to ? 'DOWN' : 'UP';
  const CALCULATE_EXPRESSION = {
    UP: (progress) => {
      const result = from - from * progress;
      return result <= to ? to : result;
    },
    DOWN: (progress) => {
      const result = from + to * progress;
      return result >= to ? to : result;
    }
  };
  const outQuad = (n) => n * (2 - n);

  let start = null;

  return function run(timestamp) {
    if (!start) {
      start = timestamp || Date.now();
    }
    const elapsed = timestamp - start;
    const progress = elapsed / 1000;

    const easeInPercentage = outQuad(progress).toFixed(2);
    const position = CALCULATE_EXPRESSION[DIRECTION](easeInPercentage);
    const isEnd = DIRECTION === 'UP' ? position <= to : position >= to;

    container.scrollTo(0, position);

    if (isEnd) {
      window.cancelAnimationFrame(run);
    } else {
      window.requestAnimationFrame(run);
    }
  };
};

const scrollIntoView = (() => {
  let timer = null;
  return (target, container = null) => {
    if (!target.tagName) {
      throw new Error('HTML 타겟만 가능합니다.');
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(
      () => window.requestAnimationFrame(showAnimation(target, container)),
      100
    );
  };
})();

export default function Select({ data, triggerOptions = {}, label }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const selectBox = open && (
    <Molecules.OptionList>
      {data.map((it) => (
        <Molecules.OptionItem key={it.id} value={it}>
          {it.name}
        </Molecules.OptionItem>
      ))}
    </Molecules.OptionList>
  );

  const onToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const onActive = async (id) => {
    if (optionsMap.has(id)) {
      const { ref } = optionsMap.get(id);

      if (ref.current) {
        const target = ref.current;
        const container = target.parentNode.parentNode;
        scrollIntoView(target, container);
        setActiveId(id);
      }
    }
  };

  const handleKeydown = (e) => {
    if (!open) return;

    const next = () => {
      const maxSize = optionsMap.size;
      let calculated = activeId + 1;
      let optionId = calculated >= maxSize ? 1 : calculated;

      if (!optionsMap.has(optionId)) return null;

      let el = optionsMap.get(optionId);

      while (el && el.unavailable) {
        calculated += 1;
        optionId = calculated < maxSize ? maxSize : calculated;
        el = optionsMap.get(optionId);
      }

      return optionId;
    };

    const prev = () => {
      const maxSize = optionsMap.size;
      let calculated = activeId - 1;
      let optionId = calculated <= 0 ? maxSize : calculated;

      if (!optionsMap.has(optionId)) return null;

      let el = optionsMap.get(optionId);
      while (el && el.unavailable) {
        calculated -= 1;
        optionId = calculated < 0 ? optionsMap.size - 1 : calculated;
        el = optionsMap.get(optionId);
      }
      return optionId;
    };

    const { code } = e;
    let moveId = null;
    let ref = null;

    switch (code) {
      case 'ArrowUp':
        moveId = prev();
        ref = optionsMap.get(moveId).ref;
        if (moveId && ref) {
          ref.current.setAttribute('tabindex', -1);
          ref.current.focus();
        }
        break;
      case 'ArrowDown':
        moveId = next();
        ref = optionsMap.get(moveId).ref;
        if (moveId && ref) {
          ref.current.setAttribute('tabindex', 1);
          ref.current.focus();
        }
        break;
      case 'Escape':
        e.preventDefault();
        onToggleOpen();
        break;
      case 'Enter':
      case 'Space':
        break;
      default:
        break;
    }
  };

  return (
    <SelectContext.Provider
      value={{ optionsMap, onActive, activeId, onToggleOpen }}
    >
      <Atoms.Wrapper position='relative' onKeyDown={handleKeydown} tabIndex={0}>
        <SelectTrigger options={triggerOptions}>{label}</SelectTrigger>
        {selectBox}
      </Atoms.Wrapper>
    </SelectContext.Provider>
  );
}
