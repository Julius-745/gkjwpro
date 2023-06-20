import React from 'react';
import {Text, Button, Box, Temp, Link, Heading, Grid, Center, Flex, HStack} from '@chakra-ui/react';
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
          <Heading fontSize={[10,15,24]} padding={1}>{title}</Heading>
        </Center>
        <Center>
          <Heading fontSize={[6,9,15]} padding={1}>
            {new Date(date).toLocaleDateString('id-ID', options)}
          </Heading>
        </Center>
      </Box>
      <CardBody fontSize={[7,13,22]}>
        <HStack>
        <FaUserAlt />
        <Text padding={[0,3,5]}>{person}</Text>
        </HStack>
        <HStack>
        <FaUserAlt  />
        <Text padding={[0,3,5]}>{person1}</Text>
        </HStack>
        <HStack>
        <FaUserAlt  />
        <Text padding={[0,3,5]}>{person2}</Text>
        </HStack>
        <HStack>
        <FaUserAlt  />
        <Text padding={[0,3,5]}>{persons}</Text>
        </HStack>
      </CardBody>
      <Flex justifyContent='flex-end'>
        <CardFooter>
          <Link href={'Warta/'}>
            <Button
              size={'xs,sm,md'}
              variant={'solid'}
              color={'white'}
              bgColor={'#3C64B1'}
              fontSize={[5,13,19]}
              padding={[1,1,2]}
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
