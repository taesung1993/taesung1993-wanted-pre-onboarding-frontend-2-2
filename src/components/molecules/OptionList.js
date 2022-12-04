import React from 'react';
import { useTheme } from 'styled-components';
import Atoms from '../atoms';

export default function OptionList({ children }) {
  const theme = useTheme();

  return (
    <Atoms.Wrapper
      position='absolute'
      width='100%'
      zIndex={10}
      maxHeight='100px'
      padding='5px 0'
      top='calc(100% + 10px)'
      left={0}
      border={`1px solid ${theme.colors.grey100}`}
      backgroundColor='#fff'
      borderRadius='10px'
      overflowX='hidden'
    >
      <ul>{children}</ul>
    </Atoms.Wrapper>
  );
}
