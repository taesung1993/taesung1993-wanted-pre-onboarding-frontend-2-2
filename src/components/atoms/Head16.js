import styled from 'styled-components';
import { setTextColor } from '../../utils/constants/theme';

const Head16 = styled.h6`
  ${({ theme }) => theme.fontStyles.head_16};
  color: ${({ color }) => setTextColor(color)};
`;

Head16.defaultProps = {
  color: 'grey300'
};

export default Head16;
