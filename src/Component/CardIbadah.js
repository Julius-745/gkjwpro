import React from "react";
import { Text, Button, Container, Box, Flex} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export const CardIbadah = ({title, date, person, person1, person2, persons}) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <Flex flexDirection={'column'} h={'500px'}>
            <Text fontSize={'3xl'} fontWeight="bold">
                {title}
            </Text>
            <Text fontSize={'xl'} fontWeight="bold">
                {new Date(date).toLocaleDateString("id-ID", options)}
            </Text>
            <Flex fontSize={'xl'} paddingTop={25} flexDirection={'column'}>
                <Box display={'flex'} flexDirection={'row'}>
                    <FaUserAlt/>
                    <Text paddingLeft={15}>
                        {person}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaUserAlt/>
                    <Text paddingLeft={15}>
                        {person1}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaUserAlt/>
                    <Text paddingLeft={15}>
                        {person2}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaUserAlt/>
                    <Text paddingLeft={15}>
                        {persons}
                    </Text>
                </Box>
            </Flex>
            <Box marginTop={'auto'}>
                <Button w={'115'} variant={'solid'} color={'white'} bgColor={'#3C64B1'} float={"right"}>Detail</Button>
            </Box>
        </Flex>
    )
}

CardIbadah.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    person1: PropTypes.string,
    person2: PropTypes.string,
    persons: PropTypes.string
}