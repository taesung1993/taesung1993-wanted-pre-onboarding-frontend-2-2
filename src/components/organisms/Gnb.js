import React from 'react';
import Atoms from '../atoms';
import Icons from '../icons';
import Organisms from '.';
import Molecules from '../molecules';

export default function Gnb() {
  return (
    <Atoms.Wrapper
      width='100%'
      height='100%'
      padding='60px 40px 56px 40px'
      display='flex'
      flexDirection='column'
    >
      <header style={{ paddingBottom: '60px' }}>
        <Icons.Logo />
      </header>
      <Atoms.Hr />
      <Organisms.Service />
      <Molecules.Navigators />
      <Molecules.Guide />
    </Atoms.Wrapper>
  );
}
