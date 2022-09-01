import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, HStack} from "@chakra-ui/react";
import { CardLalu } from "./CardLalu";
import { CardSkeleton } from "./CardSkeleton";

export const CardIbadahLalu = () => {
    const[error, setError] = useState(null);
    const[ibadah, setIbadah] = useState([]);

    useEffect(() => {
        axios
            .get("https://gkjwprob.domcloud.io/api/ibadahs?sort[0]=date%3Adesc&pagination[start]=0&pagination[limit]=3")
            .then(res => setIbadah(res.data))
            .catch(err => setError(err.message));
    } , []);

    if(error) {
        return <div>An error occured: {error.message}</div>
    }

    return(
        <HStack padding={16}>
            {ibadah.data?.map(ibadah => {
                return ibadah.isLoading ? (
                    <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
                        <CardSkeleton />
                    </Container>
                ) : (
                    <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
                <CardLalu 
                    title={ibadah.attributes?.Title}
                    date={ibadah.attributes?.date}
                    persons1={ibadah.attributes?.pria}
                    persons2={ibadah.attributes?.wanita}
                    fund={ibadah.attributes?.fund}
                    fund1={ibadah.attributes?.fund1}
                    fund2={ibadah.attributes?.fund2}
                    />
                </Container>
                )
            })}
        </HStack>
    )
}