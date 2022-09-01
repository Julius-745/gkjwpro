import {
    Box,
    Button,
    Container,
    Flex,
    Image,
    Link,
    Spacer,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import Logo from './logos.svg'

  
  export const Header = () => {
    return (
      <Box pb={{ base: '1', md: '' }} >
        <Box boxShadow={useColorModeValue('md', 'md-dark')}>
          <Container maxW={"100%"} py={{ base: '5', lg: '5' }}>
            <Flex px={[2,3]}>
              <Box>
                <Image src={Logo} alt="Logo"/>
              </Box>
              <Spacer />
              <Box>
                <Link href='https://wa.me/6287750363064?text=Halo%20bolehkah%20saya%20meminta%20jadwal%20ibadah%20atau%20warta'>
                  <Button colorScheme='facebook' size={'lg'}>Contact Person</Button>
                </Link>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    )
  }