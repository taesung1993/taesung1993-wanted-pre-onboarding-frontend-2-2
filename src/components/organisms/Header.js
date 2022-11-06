import React from 'react';
import Atoms from '../atoms';
import Icons from '../icons';
import Molecules from '../molecules';

export default function Header() {
  return (
    <Atoms.Wrapper
      display='flex'
      flexDirection='column'
      alignItems='flex-end'
      justifyContent='center'
      padding='0 40px'
    >
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          padding: '20px 0'
        }}
      >
        <button
          type='button'
          style={{
            background: 'transparent',
            border: 'none'
          }}
        >
          <Icons.Alarm />
        </button>
        <button
          type='button'
          style={{
            background: 'transparent',
            border: 'none'
          }}
        >
          <Icons.Setting />
        </button>
        <Molecules.My name='원티드' />
      </section>
      <Atoms.Hr />
    </Atoms.Wrapper>
  );
}
