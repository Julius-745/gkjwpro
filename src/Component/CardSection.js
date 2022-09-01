import React from "react";
import { Container, HStack, Stack} from "@chakra-ui/react";
import { CardIbadah } from "./CardIbadah";
import { CardKrw } from "./CardKrw";

export const CardSection = () => {
    return(
        <HStack padding={16}>
            <CardIbadah 
                title={'Jadwal Ibadah Minggu'} 
                date={'17 April 2022'}
                person1={'Pdt. Patria Yusak'}
                person2={'Sdr. Gradian'}
                persons={'Ibu Naomi, Ibu Marta'}/>
            <CardIbadah 
                title={'Jadwal Ibadah Minggu Sukapura'} 
                date={'17 April 2022'}
                person1={'Pdt. Patria Yusak'}
                person2={'Sdr. Gradian'}
                persons={'Ibu Naomi, Ibu Marta'}/>
            <CardKrw 
                title={'Jadwal Ibadah KRW'}
                krw={'Betlehem'}
                person1={'Pdt. Patria Yusak'}/>
        </HStack>
    )
}