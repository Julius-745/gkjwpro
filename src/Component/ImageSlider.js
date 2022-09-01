import { Image,Box, Text, Flex, Link } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Detail from "../Screens/Detail";

const ImageSlider = ({slides}) => {
  const MAX_LENGTH = 250;
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop>
      {slides.data?.map((slide) => {
        return (
          <Link href={`Detail/${slide.id}`}>
          <Flex justifyContent={'center'} alignItems={'center'} onClick={''}>
            <Box
            height={388} 
            width={396}
            display="flex"
            marginRight={16}
            >
              <Image w={396} h={388} src={slide.attributes.image?.data.attributes.url} alt={''}/>
            </Box>
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

export default ImageSlider;