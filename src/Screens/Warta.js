import React from 'react';
import {
  ChakraProvider,
  Stack,
} from '@chakra-ui/react';
import { Content } from '../Component/Content';

function Warta() {
  return (
    <ChakraProvider>
      <Stack>
        <Content/>
      </Stack>
    </ChakraProvider>
  );
}

export default Warta;
