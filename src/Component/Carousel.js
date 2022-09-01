import React, {useState, useEffect} from "react";
import { Box, } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import axios from "axios";

export const Carousel = () => {
  const[error, setError] = useState(null);
  const[articles, setArticles] = useState({});

  useEffect(() => {
      axios
          .get("https://gkjwprob.domcloud.io/api/articles?populate=*")
          .then(res => setArticles(res.data))
          .catch(err => setError(err.message));
  } , []);

  if(error) {
    return <div>An error occured: {error.message}</div>
  }

  return (
      <Box
      w="100%"
      p={16}
      color="white">
        <ImageSlider slides={articles}/>
      </Box>
  )
}

