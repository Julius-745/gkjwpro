import React from 'react';
import {
  ChakraProvider,
  Stack,
} from '@chakra-ui/react';
import { Header } from '../Component/Header';
import { Footer } from '../Component/Footer';
import { Article } from '../Component/Article';

function Detail() {
  return (
    <ChakraProvider>
      <Stack>
        <Header />
          <Article/>
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default Detail;
