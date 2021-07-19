import React from 'react';

import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

export const Teste = () => (
  <Heading size="2xl" color="red.200">
    Olá mundo
  </Heading>
);

const PageComponent: React.FC<NextPage> = () => {
  return (
    <>
      <Teste />
    </>
  );
};

export default PageComponent;
