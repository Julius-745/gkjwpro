import { Image,Box, Text, Flex, Grid, Link, Transition, Spacer, GridItem } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CardRenungan = ({slides}) => {
  const MAX_LENGTH = 250;
  return (
<Carousel showThumbs={false} infiniteLoop>
  {slides.data?.map((slide) => {
    return (
      <Link href={`Detail/${slide.id}`}>
      <Flex justifyContent={'center'} alignItems={'center'} onClick={''}>
        <Spacer>
        <Box
        height='100%' 
        width='40%'
        display="flex"
        >
          
        </Box>
        </Spacer>
        <Spacer>
        <Box
        height='100%' 
        width='40%'
        display="flex"
        >
          
        </Box>
        </Spacer>
        <Flex flexDirection={'column'} w={'568px'} textAlign={'left'}>
          <Text color={'black'} fontWeight={'bold'}>{slide.attributes.title}</Text>
          <Text color={'black'} paddingTop={5}>{`${slide.attributes.content.substring(0, MAX_LENGTH)}...`}</Text>
        </Flex>
      </Flex>
      </Link>
    )
  })}
</Carousel>
  );
};