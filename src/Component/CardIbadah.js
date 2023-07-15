import React from 'react';
import {Text, Button, Box, Temp, Link, Heading, Grid, Center, Flex, HStack, grid} from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const CardIbadah = ({
  title,
  date,
  person,
  person1,
  person2,
  persons,
}) => {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <Card>
      <Box>
        <Center>
          <Heading fontSize={25} padding={1}>{title}</Heading>
        </Center>
        <Center>
          <Heading fontSize={15} padding={1}>
            {new Date(date).toLocaleDateString('id-ID', options)}
          </Heading>
        </Center>
      </Box>
      <CardBody fontSize={22}>
        <FaUserAlt />
        <Text>{person}</Text>
        
        <FaUserAlt  />
        <Text>{person1}</Text>
        
        <FaUserAlt  />
        <Text>{person2}</Text>
        
        <FaUserAlt  />
        <Text>{persons}</Text>
      </CardBody>
      <Flex justifyContent='flex-end'>
        <CardFooter>
          <Link href={'Warta/'}>
            <Button
              variant={'solid'}
              color={'white'}
              bgColor={'#3C64B1'}
              float={'right'}
            >
              Detail
            </Button>
          </Link>
        </CardFooter>
        </Flex>
    </Card>
  );
};

CardIbadah.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  person1: PropTypes.string,
  person2: PropTypes.string,
  persons: PropTypes.string,
};
