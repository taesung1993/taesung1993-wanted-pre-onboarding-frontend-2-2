import styled from 'styled-components';
import { setFontStyle } from '../../utils/constants/theme';

const Select = styled.div`
  width: 100%;
  padding: 18px 20px;
  border-radius: 10px;
  border: 1px solid #d1d8dc;
  ${({ fontStyle }) => setFontStyle(fontStyle)};
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('../images/icons/arrow_down.svg') no-repeat right 20px center;
  position: relative;
  cursor: pointer;
`;

Select.defaultProps = {
  fontStyle: 'body_12_bold'
};

export default Select;
