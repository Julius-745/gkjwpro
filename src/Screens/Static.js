import React from 'react';
import {
  ChakraProvider,
  Stack,
} from '@chakra-ui/react';
import { Header } from '../Component/Header';
import { Footer } from '../Component/Footer';
import { Yeart } from '../Component/YearlyContent';

function Static() {
  return (
    <ChakraProvider>
      <Stack>
        <Header />
          <Yeart/>
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default Static;
