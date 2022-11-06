const theme = {
  colors: {
    grey: '#F6F7F8',
    grey50: '#EDEFF1',
    grey300: '#94A2AD',
    grey800: '#3A474E',
    primary: '#586CF5',
    secondary_01: '#E5F4FD',
    white: '#FFFFFF'
  },
  fontStyles: {
    head_16: `
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    `,
    head_26: `
      font-weight: 900;
      font-size: 26px;
      line-height: 30px;
    `,
    body_12: `
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    `,
    body_12_bold: `
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
    `,
    body_14: `
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    `
  }
};

export const setTextColor = (color) => {
  switch (color) {
    case 'grey':
      return theme.colors.grey;
    case 'grey50':
      return theme.colors.grey50;
    case 'grey300':
      return theme.colors.grey300;
    case 'grey800':
      return theme.colors.grey800;
    case 'primary':
      return theme.colors.primary;
    case 'secondary_01':
      return theme.colors.secondary_01;
    case 'white':
      return theme.colors.white;
    default:
      throw new Error(
        `${JSON.stringify(
          Object.keys(theme.colors)
        )} 의 값만 사용이 가능합니다.`
      );
  }
};

export const setFontStyle = (fontStyle) => {
  switch (fontStyle) {
    case 'head_16':
      return theme.fontStyles.head_16;
    case 'head_26':
      return theme.fontStyles.head_26;
    case 'body_12':
      return theme.fontStyles.body_12;
    case 'body_12_bold':
      return theme.fontStyles.body_12;
    case 'body_14':
      return theme.fontStyles.body_14;
    default:
      throw new Error(
        `${JSON.stringify(
          Object.keys(theme.fontStyles)
        )} 의 값만 사용이 가능합니다.`
      );
  }
};

export default theme;
