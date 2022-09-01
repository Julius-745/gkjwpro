import {
    Box,
    Container,
    Stack,
    Image,
    Text,
    Button
  } from '@chakra-ui/react'
  import * as React from 'react'
  import Photo  from './Majelis.svg';

  export const Banner = () => {
    return(
        
        <Box
        paddingTop={16}
        width={'100%'}
        height={'500px'}
        position={'relative'}
        direction={{ base: 'column', md: 'row' }} 
        justify="center"
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center'}
        backgroundImage={Photo}
        backgroundColor={'black'}
        textAlign={'center'}>
            <Box color={'white'} textShadow={15}>
                <Text fontSize={'5xl'} fontWeight={'bold'}>Gereja Kristen Jawi Wetan</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'} >Jemaat Probolinggo</Text>
                <Text paddingTop={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</Text> 
                <Text>sed do eiusmod tempor incididunt ut labore et dolore </Text> 
                <Text> magna aliqua. Ut enim ad minim veniam, quis nostrud </Text> 
                <Text paddingBottom={5}>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                <Button colorScheme='facebook' size={'lg'}> Jadwal Ibadah </Button>
            </Box>
        </Box>
    )
  }