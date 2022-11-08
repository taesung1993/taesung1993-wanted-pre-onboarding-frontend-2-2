import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Atoms from '../atoms';
import Store from '../../utils/store/serviceTypes';

export default function DropDown() {
  const list = useRecoilValue(Store.serviceTypesState);
  const setSelectedId = useSetRecoilState(Store.selectedServiceTypeIdState);
  const selectedType = useRecoilValue(Store.selectedServiceTypeState);

  const [hover, setHover] = useState(false);
  const onSelect = (item) => {
    setSelectedId(item.key);
    setHover(false);
  };

  useEffect(() => {
    const onMouseOver = (e) => {
      if (e.target.closest('.dropdown-title')) {
        setHover(true);
      }

      if (!e.target.closest('.dropdown-area')) {
        if (hover) {
          setHover(false);
        }
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [hover]);

  return (
    <section
      className='dropdown-area'
      style={{
        position: 'relative'
      }}
    >
      <Atoms.Select className='dropdown-title' fontStyle='head_16'>
        {selectedType.value}
      </Atoms.Select>
      {hover && (
        <Atoms.OptionGroup>
          <ul>
            {list.map((item) => (
              <li key={item.key}>
                <button type='button' onClick={() => onSelect(item)}>
                  {item.value}
                </button>
              </li>
            ))}
          </ul>
        </Atoms.OptionGroup>
      )}
    </section>
  );
}
