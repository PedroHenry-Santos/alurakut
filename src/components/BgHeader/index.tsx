/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import {
  Book,
  Camera,
  Cube,
  Email,
  Heart,
  Smile,
  Star,
  VideoCamera
} from '../Icons';

type BgHeaderProps = {
  user: string;
  props?: {
    message?: number;
    photos?: number;
    videos?: number;
    fans?: number;
    posts?: number;
    reliable?: number;
    cool?: number;
    sexy?: number;
  };
};

export const BgHeader: React.FC<BgHeaderProps> = ({ props, user }) => {
  return (
    <Box bg="gray.50" borderRadius="lg" py="6" px={{ base: '4', md: '6' }}>
      <Heading
        fontSize={{ base: '1.5rem', md: '1.75rem' }}
        fontWeight="normal"
        lineHeight={{ base: '', md: '7' }}
        color="blue.900"
      >
        Bem-vindo(a), {`${user}`}
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
        <GridItem rowSpan={1}>
          <Grid mt="3rem" templateColumns="repeat(5, 1fr)" gap={3}>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Recados
              </Text>
              <Text
                fontSize={{ base: 'sm', sd: 'md', md: 'lg' }}
                color="blue.400"
                d="flex"
              >
                <Box
                  w="full"
                  minWidth={{ base: 4, sd: 6, md: 5 }}
                  maxWidth={{ base: 4, sd: 6, md: 5 }}
                  mr="1"
                >
                  <Book />
                </Box>
                {props?.message ? props.message : 0}
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Fotos
              </Text>
              <Text
                fontSize={{ base: 'sm', sd: 'md', md: 'lg' }}
                color="blue.400"
                d="flex"
              >
                <Box
                  w="full"
                  minWidth={{ base: 4, sd: 6, md: 5 }}
                  maxWidth={{ base: 4, sd: 6, md: 5 }}
                  mr="1"
                >
                  <Camera />
                </Box>
                {props?.photos ? props.photos : 0}
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Vídeos
              </Text>
              <Text
                fontSize={{ base: 'sm', sd: 'md', md: 'lg' }}
                color="blue.400"
                d="flex"
              >
                <Box
                  w="full"
                  minWidth={{ base: 4, sd: 6, md: 5 }}
                  maxWidth={{ base: 4, sd: 6, md: 5 }}
                  mr="1"
                >
                  <VideoCamera />
                </Box>
                {props?.videos ? props.videos : 0}
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Fãs
              </Text>
              <Text
                fontSize={{ base: 'sm', sd: 'md', md: 'lg' }}
                color="blue.400"
                d="flex"
              >
                <Box
                  w="full"
                  minWidth={{ base: 4, sd: 6, md: 5 }}
                  maxWidth={{ base: 4, sd: 6, md: 5 }}
                  mr="1"
                >
                  <Star />
                </Box>
                {props?.fans ? props.fans : 0}
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Mensagens
              </Text>
              <Text
                fontSize={{ base: 'sm', sd: 'md', md: 'lg' }}
                color="blue.400"
                d="flex"
              >
                <Box
                  w="full"
                  minWidth={{ base: 4, sd: 6, md: 5 }}
                  maxWidth={{ base: 4, sd: 6, md: 5 }}
                  mr="1"
                >
                  <Email />
                </Box>
                {props?.posts ? props.posts : 0}
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          rowSpan={1}
          mt={{ base: 0, sd: 0, md: '3rem' }}
          ml={{ base: 0, md: 3 }}
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Confiável
              </Text>
              <Box d="flex">
                {[1, 2, 3].map((_, index) => {
                  const total = props?.reliable ? props?.reliable : 0;
                  const isHeartActive = index <= total - 1;

                  return (
                    <Box
                      w="full"
                      mr="2px"
                      minWidth={{ base: 4, sd: 6, md: 5 }}
                      maxWidth={{ base: 4, sd: 6, md: 5 }}
                      key={`orkut_icon_smile_${index + 1}`}
                    >
                      <Smile
                        style={{
                          opacity: isHeartActive ? 1 : '0.5'
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Legal
              </Text>
              <Box d="flex">
                {[1, 2, 3].map((_, index) => {
                  const total = props?.cool ? props?.cool : 0;
                  const isHeartActive = index <= total - 1;

                  return (
                    <Box
                      w="full"
                      mr="2px"
                      minWidth={{ base: 4, sd: 6, md: 5 }}
                      maxWidth={{ base: 4, sd: 6, md: 5 }}
                      key={`orkut_icon_smile_${index + 1}`}
                    >
                      <Cube
                        style={{
                          opacity: isHeartActive ? 1 : '0.5'
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="xs" color="blue.900">
                Sexy
              </Text>
              <Box d="flex">
                {[1, 2, 3].map((_, index) => {
                  const total = props?.sexy ? props?.sexy : 0;
                  const isHeartActive = index <= total - 1;

                  return (
                    <Box
                      w="full"
                      mr="2px"
                      minWidth={{ base: 4, sd: 6, md: 5 }}
                      maxWidth={{ base: 4, sd: 6, md: 5 }}
                      key={`orkut_icon_smile_${index + 1}`}
                    >
                      <Heart
                        style={{
                          opacity: isHeartActive ? 1 : '0.5'
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};
