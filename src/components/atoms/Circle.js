import styled from 'styled-components';

const Circle = styled.div`
  width: ${({ size }) => size || '10px'};
  height: ${({ size }) => size || '10px'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#000'};
  border-radius: 50%;
`;

export default Circle;
