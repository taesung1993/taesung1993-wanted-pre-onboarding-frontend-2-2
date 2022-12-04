import styled from 'styled-components';

const Wrapper = styled.section`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  padding: ${({ padding }) => padding || '0px'};
  margin: ${({ margin }) => margin || '0px'};
  flex: ${({ flex }) => flex || 'none'};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  gap: ${({ gap }) => gap || 'auto'};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
`;

export default Wrapper;
