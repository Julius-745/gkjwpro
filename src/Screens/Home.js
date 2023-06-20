import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Stack,
} from '@chakra-ui/react';
import { Banner }  from '../Component/Banner';
import { Header } from '../Component/Header';
import { Footer } from '../Component/Footer';
import { Carousel } from '../Component/Carousel';
import { CardJadwalSection } from '../Component/CardJadwalSection';
import { CardIbadahLalu } from '../Component/CardIbadahLalu';
import WindowScreen from '../hooks/WindowsDimensions';

function Home() {
const screen = WindowScreen();

useEffect(()=> {
  console.log(screen)
}, [screen.width, screen.height]);

  return (
    <ChakraProvider>
      <Stack>
        <Header />
        <Banner/>
        <CardJadwalSection />
        <Carousel />
        <CardIbadahLalu/>
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default Home;
