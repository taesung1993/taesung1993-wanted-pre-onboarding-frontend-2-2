import React from 'react';
import Molecules from '../molecules';
import Atoms from '../atoms';

export default function Service() {
  return (
    <Atoms.Wrapper width='100%' margin='40px 0 0 0'>
      <div style={{ padding: '13px 20px' }}>
        <Atoms.Body12 type='bold'>서비스</Atoms.Body12>
      </div>
      <Molecules.DropDown />
    </Atoms.Wrapper>
  );
}
