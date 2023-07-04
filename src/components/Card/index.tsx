'use client';

import React from 'react';
import { useQuery } from 'react-query';

import { GridItem, Text } from '@chakra-ui/react';
import { CardProps } from '@/@types/cardProps';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Card({
  name,
  species,
  birthYear,
  peopleUrl,
}: CardProps) {
  const router = useRouter();

  const handleRedirect = () => router.push('/details');

  console.log(peopleUrl);

  const { data } = useQuery(species[0], async () => {
    return await axios
      .get(species[0], {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data;
      });
  });

  return (
    <GridItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
      color="#FFF"
      border="1px solid white"
      textColor="#FFF"
      maxH="100px"
      maxW="200px"
      _hover={{ cursor: 'pointer' }}
      onClick={() => handleRedirect()}
    >
      <Text>Name: {name}</Text>
      <Text>Species: {data?.name ? data.name : 'N/A'}</Text>
      <Text>Birth Year: {birthYear}</Text>
    </GridItem>
  );
}
