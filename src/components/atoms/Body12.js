import styled from 'styled-components';
import { setTextColor } from '../../utils/constants/theme';

const Body12 = styled.div`
  ${({ theme, type }) => {
    switch (type) {
      case 'normal':
        return `
          ${theme.fontStyles.body_12}
        `;
      case 'bold':
        return `
          ${theme.fontStyles.body_12_bold}
        `;
      default:
        throw new Error('type 속성에 normal, bold만 들어갈 수 있습니다.');
    }
  }};
  color: ${({ color }) => setTextColor(color)};
`;

Body12.defaultProps = {
  type: 'normal',
  color: 'grey300'
};

export default Body12;
