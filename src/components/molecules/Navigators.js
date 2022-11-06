import React from 'react';
import Atoms from '../atoms';
import Icons from '../icons';

export default function Navigators() {
  return (
    <nav
      style={{
        width: '100%',
        marginTop: '40px'
      }}
    >
      <div style={{ padding: '13px 20px' }}>
        <Atoms.Body12 type='bold'>광고센터</Atoms.Body12>
      </div>
      <ul>
        <li>
          <Atoms.NavItem
            to='/dashboard'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <Icons.DashBoard />
            <Atoms.Head16 color='grey300'>대시보드</Atoms.Head16>
          </Atoms.NavItem>
        </li>
        <li>
          <Atoms.NavItem
            to='/manage'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <Icons.ManageAd />
            <Atoms.Head16 color='grey300'>광고관리</Atoms.Head16>
          </Atoms.NavItem>
        </li>
      </ul>
    </nav>
  );
}
