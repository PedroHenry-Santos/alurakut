import React from 'react';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import { NextPage } from 'next';

import { BgHeader } from '../components/BgHeader';

const PageComponent: React.FC<NextPage> = () => {
  return (
    <>
      <Box maxWidth="container.lg" h="100vh" m="auto">
        <Grid
          templateColumns={{ base: '1fr', md: '10rem 1fr 20rem' }}
          gap={{ base: '4', md: '2.5' }}
        >
          <GridItem colSpan={1} d={{ base: 'none', md: 'block' }}></GridItem>
          <GridItem colSpan={1} w="full" p="4">
            <BgHeader
              user={'Pedro'}
              props={{
                message: 10,
                photos: 13,
                videos: 7,
                fans: 45,
                posts: 12,
                reliable: 3,
                cool: 3,
                sexy: 2
              }}
            />
          </GridItem>
          <GridItem colSpan={1}></GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default PageComponent;
