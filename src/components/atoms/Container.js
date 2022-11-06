import styled from 'styled-components';

const Container = styled.article`
  min-width: 1440px;
  height: 100vh;
  display: grid;
  grid-template-columns: 320px 1fr;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export default Container;
