import React from 'react';

export default function Template({ children }) {
  return (
    <article>
      <header>
        <h1>헤더</h1>
      </header>
      <section>
        <aside>사이드</aside>
        <main>{children}</main>
      </section>
    </article>
  );
}
