import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, Grid, GridItem} from "@chakra-ui/react";
import { CardLalu } from "./CardLalu";
import { CardSkeleton } from "./CardSkeleton";

export const CardIbadahLalu = () => {
    const[error, setError] = useState(null);
    const[article, setArticle] = useState([]);

    useEffect(() => {
        axios
            .get("https://gkjwprob.domcloud.io/api/articles?filters[$and][0][category][$eq]=Informasi%20Tahunan&sort[1]=createdAt%3Adesc&pagination[start]=0&pagination[limit]=3")
            .then(res => setArticle(res.data))
            .catch(err => setError(err.message));
    } , []);

    if(error) {
        return <div>An error occured: {error.message}</div>
    }

    console.log(article);

    return(
        <Grid
        h='500px'
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
        >
            {article.data?.map(article => {
                return article.isLoading ? (
                    <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
                        <CardSkeleton />
                    </Container>
                ) : (
                <GridItem>
                <CardLalu
                    key={article.id} 
                    title={article.attributes?.title}
                    date={article.attributes?.createdAt}
                    content={article.attributes?.content}
                    />
                </GridItem>
                )
            })}
        </Grid>
    )
}