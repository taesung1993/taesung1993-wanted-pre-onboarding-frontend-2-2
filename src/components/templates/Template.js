import React from 'react';
import Atoms from '../atoms';
import Organisms from '../organisms';

export default function Template({ children }) {
  return (
    <Atoms.Container>
      <section>
        <aside style={{ height: '100%', backgroundColor: '#fff' }}>
          <Organisms.Gnb />
        </aside>
      </section>
      <section>
        <header>
          <Organisms.Header />
        </header>
        <main>{children}</main>
      </section>
    </Atoms.Container>
  );
}
