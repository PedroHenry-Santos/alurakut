import React from 'react';

import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const PageComponent: React.FC<NextPage> = () => {
  return (
    <>
      <Heading size="2xl" color="red.200">
        Olá mundo
      </Heading>
    </>
  );
};

export default PageComponent;
