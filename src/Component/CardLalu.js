import React from "react";
import { Text, Button, Box, Flex, Link, useColorModeValue} from "@chakra-ui/react";
import { FaUserAlt, FaWallet } from "react-icons/fa";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

export const CardLalu = ({title, date, content}) => {
    const MAX_LENGTH = 500;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <Flex flexDirection={'column'} h={'500px'} bg={useColorModeValue('white', 'gray.800')}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative" padding={5} gap={4} w={'80%'}>
            <Text fontSize={'3xl'} fontWeight="bold">
                {title}
            </Text>
            <Text fontSize={'xl'} fontWeight="bold">
                {new Date(date).toLocaleDateString("id-ID", options)}
            </Text>
            <Text color={'black'} paddingTop={5}>{`${content.substring(0, MAX_LENGTH)}...`}</Text>
            <Box marginTop={'auto'}>
                <Link href={'Warta/'}>
                    <Button w={'115'} variant={'solid'} color={'white'} bgColor={'#3C64B1'} float={"right"}>Detail</Button>
                </Link>
            </Box>
        </Flex>
    )
}

CardLalu.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string
}