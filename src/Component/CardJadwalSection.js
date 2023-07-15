import React, { useState, useEffect } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import { Container } from '@chakra-ui/react';
import { CardIbadah } from './CardIbadah';
import { CardSkeleton } from './CardSkeleton';

export const CardJadwalSection = () => {
  const [error, setError] = useState(null);
  const [ibadahList, setIbadah] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        'https://gkjwprob.domcloud.io/api/ibadahs?sort[0]=date%3Adesc&pagination[start]=0&pagination[limit]=3'
      );

      if (res) {
        setIbadah(res.data.data);
      } else {
        setError(res.message);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (ibadahList) setIsLoading(false);
  }, [ibadahList]);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
      gap={2}
    >
      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        ibadahList.map(ibadah => (
          <CardIbadah
            key={ibadah.id}
            title={ibadah.attributes?.Title}
            date={ibadah.attributes?.date}
            person={ibadah.attributes?.Pelayan}
            person1={ibadah.attributes?.Pelayan1}
            person2={ibadah.attributes?.Pelayan2}
            persons={ibadah.attributes?.SongLeader}
          />
        ))
      )}
    </Grid>
  );
};
