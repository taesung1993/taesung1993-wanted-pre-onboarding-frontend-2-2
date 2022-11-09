import React from 'react';
import Atoms from '../atoms';
import Molecules from '../molecules';
import Template from '../templates/Template';

export default function Dashboard() {
  return (
    <Template>
      <Atoms.Wrapper padding='25px 40px'>
        <Atoms.Head26>대시보드</Atoms.Head26>
        <Molecules.LineGraph />
      </Atoms.Wrapper>
    </Template>
  );
}
