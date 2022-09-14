const primary = {
  500: '#527da3',
  400: '#65a9e0',
};

type ColorsTheme = {
  primary: {
    500: string;
    400: string;
  };
};

export const colors: ColorsTheme = {
  primary: { 400: primary[400], 500: primary[500] },
};
