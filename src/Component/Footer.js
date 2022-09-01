import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import Logo from './logos.svg'

export const Footer = () => {
  return(
    <Container maxW={"100%"}>
    <Stack
      spacing="8"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      py={{ base: '12', md: '16' }}
      px={[2,3]}
    >
      <Stack spacing={{ base: '6', md: '8' }} align="start">
        <Image src={Logo} />
        <Text color="muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Text>
      </Stack>
      <Stack spacing={{ base: 'column', md: 'row' }} align="start"></Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
        spacing={{ base: '12', md: '8' }}
      >
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            GKJW Probolinggo <br/>
            JL. A.Yani no 14 Probolinggo dan Sekretariat di JL. Cipto <br/>
            Mangun Kusumo No.1 Probolinggo Kode Pos 67219
          </Text>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
    >
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Gkjw Probolinggo
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="Youtube"
          icon={<FaYoutube fontSize="1.25rem" />}
        />
        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Email" icon={<FaWhatsapp fontSize="1.25rem" />} />
      </ButtonGroup>
    </Stack>
  </Container>
  )
}