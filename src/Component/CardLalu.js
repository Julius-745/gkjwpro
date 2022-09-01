import React from "react";
import { Text, Button, Container, Box, Flex} from "@chakra-ui/react";
import { FaUserAlt, FaWallet } from "react-icons/fa";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

export const CardLalu = ({title, date, persons1, persons2, persons3, fund, fund1, fund2}) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
            <Flex flexDirection={'column'} h={'500px'}>
            <Text fontSize={'3xl'} fontWeight="bold">
                {title}
            </Text>
            <Text fontSize={'2xl'} fontWeight="bold">
                {new Date(date).toLocaleDateString("id-ID", options)}
            </Text>
            <Flex fontSize={'xl'} paddingTop={25} flexDirection={'column'}>
                <Flex flexDirection={'row'} justifyContent={'flex-start'}>
                    <Flex>
                        <FaUserAlt/>
                        <Text paddingLeft={15}>
                            {persons1}
                        </Text>
                    </Flex>
                    <Flex paddingLeft={25}>
                        <FaUserAlt/>
                        <Text paddingLeft={15}>
                            {persons2}
                        </Text>
                    </Flex>
                </Flex>
                <Flex display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaWallet/>
                    <Text paddingLeft={15}>
                        <NumberFormat value={fund} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </Text>
                </Flex>
                <Flex display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaWallet/>
                    <Text paddingLeft={15}>
                    <NumberFormat value={fund1} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </Text>
                </Flex>
                <Flex display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaWallet/>
                    <Text paddingLeft={15}>
                    <NumberFormat value={fund2} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </Text>
                </Flex>
            </Flex>
                <Box marginTop={'auto'}>
                    <Button w={'115'} variant={'solid'} color={'white'} bgColor={'#3C64B1'} float={"right"}>Detail</Button>
                </Box>
            </Flex>
    )
}

CardLalu.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    persons1: PropTypes.string,
    persons2: PropTypes.string,
    fund: PropTypes.number,
    fund1: PropTypes.number,
    fund2: PropTypes.number,
}