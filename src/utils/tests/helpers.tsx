import { ReactNode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderResult } from '@testing-library/react';

import theme from '../../assets/styles/theme';

export const renderWithTheme = (children: ReactNode): RenderResult => {
  return render(<ChakraProvider theme={theme}>{children}</ChakraProvider>);
};
