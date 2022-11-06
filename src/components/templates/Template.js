import React from 'react';
import Atoms from '../atoms';
import Organisms from '../organisms';

export default function Template({ children }) {
  return (
    <Atoms.Container>
      <section>
        <aside style={{ height: '100%' }}>
          <Organisms.Gnb />
        </aside>
      </section>
      <section>
        <header>
          <h1>헤더</h1>
        </header>
        <main>{children}</main>
      </section>
    </Atoms.Container>
  );
}
