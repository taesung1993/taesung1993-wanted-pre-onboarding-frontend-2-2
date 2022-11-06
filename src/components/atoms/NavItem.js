import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 18px 20px;
  background: #fff;
  border-radius: 10px;

  &.active {
    background: ${({ theme }) => theme.colors.grey50};

    h6 {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default NavItem;
