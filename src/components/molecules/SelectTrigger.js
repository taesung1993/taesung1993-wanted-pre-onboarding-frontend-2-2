import React from 'react';
import { useTheme } from 'styled-components';
import Atoms from '../atoms';
import Icons from '../icons';
import { useSelectContext } from '../organisms/Select';

export default function SelectTrigger({ children, options }) {
  const theme = useTheme();
  const { onToggleOpen } = useSelectContext();
  const style = options?.style || {};
  const prefix = options?.prefix || '';
  const isBorder = options?.isBorder || true;

  return (
    <Atoms.Wrapper>
      <button
        type='button'
        style={{
          ...style,
          backgroundColor: '#fff',
          borderRadius: '10px',
          border: isBorder && `1px solid ${theme.colors.grey100}`,
          padding: '15px 20px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap'
        }}
        onClick={onToggleOpen}
      >
        <span
          style={{
            marginRight: '10px'
          }}
        >
          {prefix}
        </span>
        <span
          style={{
            marginRight: '16px'
          }}
        >
          {children}
        </span>
        <span>
          <Icons.ArrowDown />
        </span>
      </button>
    </Atoms.Wrapper>
  );
}
