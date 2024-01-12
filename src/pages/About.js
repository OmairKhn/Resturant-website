import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    <Layout>
        <Box 
   sx={{
    my:12,
    textAlign:"center",
    p:2,
    "& h4": {fontWeight:"bold",
    my:2,
    fontSize:"2rem",
    },
    "& p":{
      textAlign:"justify",
      fontSize: "1rem"
    },
    "@media (max-width:600px)":{
      mt:0,
      "& h4": {
        fontSize:"1rem",
      },

    }
   }}
   >
    <Typography variant="h4">Welcome to My Resturant</Typography>
      <p>
      Some restaurants are a chain, meaning that there are
       restaurants which have the same name and serve the same food.
        McDonald's, Burger King, and Pizza Hut are examples of chain
         restaurants that are all over the world. These restaurants
          serve fast food, that is, inexpensive food, prepared and 
          served quickly. At some, you do not have to even get out of
           the car to eat. You can pay and get your order from a 
           window. These places are called drive-throughs.
      </p>
      <br/>
      <p>
      Some restaurants are a chain, meaning that there are
       restaurants which have the same name and serve the same food.
        McDonald's, Burger King, and Pizza Hut are examples of chain
         restaurants that are all over the world. These restaurants
          serve fast food, that is, inexpensive food, prepared and 
          served quickly. At some, you do not have to even get out of
           the car to eat. You can pay and get your order from a 
           window. These places are called drive-throughs.
      </p>
   </Box>
    </Layout>
  )
}

export default About