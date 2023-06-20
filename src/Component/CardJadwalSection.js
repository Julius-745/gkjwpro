import React, {useState, useEffect} from "react";
import {Box, Grid, GridItem} from "@chakra-ui/react";
import axios from "axios";
import { Container} from "@chakra-ui/react";
import { CardIbadah } from "./CardIbadah";
import { CardSkeleton } from "./CardSkeleton";

export const CardJadwalSection = () => {
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

        <Grid
        h={[180,330,500]}
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={2}
        >
        {ibadah.data?.map(ibadah => {
                 return ibadah.isLoading ? (
                     <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
                         <CardSkeleton />
                     </Container>
                 ) : (
                    <GridItem border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4}>
                     <CardIbadah
                         key={ibadah.id} 
                         title={ibadah.attributes?.Title}
                         date={ibadah.attributes?.date}
                         person={ibadah.attributes?.Pelayan}
                         person1={ibadah.attributes?.Pelayan1}
                         person2={ibadah.attributes?.Pelayan2}
                         persons={ibadah.attributes?.SongLeader}/>
                    </GridItem>
                    
                 )
             })}
        </Grid>
    )
}