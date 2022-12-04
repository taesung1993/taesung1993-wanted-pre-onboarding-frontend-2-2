import React, { useEffect, useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';
import Atoms from '../atoms';
import { useSelectContext } from '../organisms/Select';

export default function OptionItem({ children, value }) {
  const theme = useTheme();
  const { onActive, optionsMap, activeId } = useSelectContext();
  const ref = useRef();
  const isActive = value.id === activeId;

  const handleMouseOver = (e) => {
    const target = e.currentTarget;

    if (!value.unavailable) {
      target.setAttribute('tabindex', 1);
      target.focus();
    }
  };

  const handleFocus = () => {
    onActive(value.id);
  };

  const handleMouseLeave = (e) => {
    const target = e.currentTarget;
    target.blur();
    onActive(-1);
  };

  useEffect(() => {
    optionsMap.set(value.id, {
      ...value,
      ref
    });
  }, []);

  return (
    <li
      role='menuitem'
      tabIndex={-1}
      style={{
        backgroundColor:
          isActive || value.unvailable
            ? theme.colors.grey50
            : theme.colors.white,
        opacity: value.unavailable && 0.2,
        cursor: value.unavailable ? 'not-allowed' : 'pointer'
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      ref={ref}
    >
      <Atoms.Wrapper
        width='100%'
        height='40px'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Atoms.Body14 color='grey800'>{children}</Atoms.Body14>
      </Atoms.Wrapper>
    </li>
  );
}
