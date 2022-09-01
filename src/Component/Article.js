import {
    Box,
    Container,
    Stack,
    Image,
    Text,
    Button,
    Flex
  } from '@chakra-ui/react'
  import React, {useState, useEffect} from 'react'
  import axios from 'axios';
  import {useParams} from 'react-router-dom';
  import Photo  from './Majelis.svg';

  export const Article = () => {
    const[error, setError] = useState(null);
    const[article, setArticle] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://gkjwprob.domcloud.io/api/articles/${id}?populate=*`)
            .then(res => setArticle(res.data.data.attributes))
            .catch(err => setError(err.message));
    } , []);
    
    if(error) {
        return <div>An error occured: {error.message}</div>
    }

    const date = (article.createdAt)
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
            <Flex paddingTop={10} paddingLeft={16} paddingBottom={10} flexDirection={'column'}>
            <Box h={'81px'} textAlign={'center'}>
                <Text fontSize={'4xl'} fontWeight={'bold'}>{article.category}</Text>
                <Text fontSize={'xl'}>{new Date(date).toLocaleDateString("id-ID", options)}</Text>
            </Box>
            <Box textAlign={'left'} paddingTop={20}>
                <Text fontSize={'3xl'} fontWeight={'bold'}>{article.title}</Text>
                <Text fontSize={'xl'}>Ayat</Text>
            </Box>
            <Box display={'flex'} alignItems="center" flexDirection={'column'} paddingTop={45}>
                <Image src={article.image?.data.attributes.url}/>
                <Text fontSize={'md'} textAlign={'left'} maxW={'1128px'} paddingTop={25}>{article.content}</Text>
            </Box>
        </Flex>
    )
  }