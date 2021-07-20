import React from 'react';

import { Box, Divider, Heading, Image, Text } from '@chakra-ui/react';

type ProfileSidebarBoxProps = {
  githubUser: string;
};

export const ProfileSidebarBox: React.FC<ProfileSidebarBoxProps> = ({
  githubUser
}) => {
  const location = 'Uberaba - MG';

  return (
    <Box w="full" bg="gray.50" borderRadius="lg" px={5} py={6}>
      <Image
        src={`https://github.com/${githubUser}.png`}
        boxSize="121px"
        borderRadius="lg"
        alt={`Foto de perfil do usuário ${githubUser}`}
      />
      <Divider bg="gray.300" h="1px" my={2.5} />
      <Heading as="h3" fontSize="sm" color="blue.600">
        @{githubUser}
      </Heading>
      <Text color="gray.500" fontSize="xs" my="0.5">
        {location}
      </Text>
      <Divider bg="gray.300" h="1px" my={2.5} />
    </Box>
  );
};
