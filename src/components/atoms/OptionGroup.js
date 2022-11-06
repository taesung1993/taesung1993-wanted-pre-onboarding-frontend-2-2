import styled from 'styled-components';

const OptionGroup = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  padding-top: 10px;

  ul {
    border: 1px solid #d1d8dc;
    border-radius: 10px;
    overflow: hidden;

    li {
      width: 100%;
      &:not(:last-child) {
        button {
          border-bottom: 1px solid #d1d8dc;
        }
      }

      button {
        width: 100%;
        padding: 18px 20px;
        background: #fff;
        border: none;
        &:hover {
          background-color: ${({ theme }) => theme.colors.grey50};
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

export default OptionGroup;
