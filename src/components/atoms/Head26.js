import styled from 'styled-components';
import { setTextColor } from '../../utils/constants/theme';

const Head26 = styled.h1`
  ${({ theme }) => theme.fontStyles.head_26};
  color: ${({ color }) => setTextColor(color)};
`;

Head26.defaultProps = {
  color: 'grey800'
};

export default Head26;
