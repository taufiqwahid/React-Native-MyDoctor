export const mainColors = {
  primary1: '#EDFCFD',
  primary2: '#0BCAD4',
  primary3: '#0AA8B0',
  secondary1: '#EDEEF0',
  secondary2: '#E9E9E9',
  secondary3: '#B1B7C2',
  secondary4: '#7D8797',
  warning1: '#F8B459',
  danger1: '#E06379',
  dark1: '#112340',
  blue1: '#0066CB',
};

export const colors = {
  button: {
    primary: {
      background: mainColors.primary2,
      text: 'white',
    },
    secondary: {
      background: mainColors.secondary1,
      text: mainColors.secondary3,
      logo: mainColors.secondary2,
    },
    blue: {
      background: mainColors.blue1,
      logo: 'white',
    },
  },
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.secondary4,
  },
  input: {
    secondary: mainColors.secondary2,
    danger: mainColors.danger1,
    text: {
      primary: mainColors.dark1,
      danger: mainColors.danger1,
    },
  },
  border: {
    secondary: mainColors.secondary2,
    danger: mainColors.danger1,
  },
};
