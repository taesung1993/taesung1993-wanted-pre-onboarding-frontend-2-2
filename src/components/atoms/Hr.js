import styled from 'styled-components';

const Hr = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey50};
  margin: 0;
`;

export default Hr;
