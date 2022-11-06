import styled from 'styled-components';
import { setTextColor } from '../../utils/constants/theme';

const Body14 = styled.div`
  ${({ theme }) => theme.fontStyles.body_14};
  color: ${({ color }) => setTextColor(color)};
`;

Body14.defaultProps = {
  color: 'grey300'
};

export default Body14;
