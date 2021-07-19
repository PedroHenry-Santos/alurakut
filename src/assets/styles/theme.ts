import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Rubik',
    body: 'Rubik'
  },
  colors: {
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#ECF2FA',
      300: '#C4D5EA',
      400: '#B8C8DC',
      500: '#96A9C5',
      600: '#556172',
      700: '#2D3748',
      900: '#171923'
    },
    pink: {
      50: '#F1ECED',
      200: '#FDC0F5',
      400: '#F26DF9'
    },
    blue: {
      50: '#D9E6F6',
      100: '#90CDF4',
      200: '#82BCFB',
      400: '#026EBE',
      600: '#215A82',
      800: '#194574',
      900: '#071E37'
    }
  }
});

export default theme;
