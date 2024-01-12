
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, TableContainer,Table, TableHead,TableRow,TableCell, Typography, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import { pink } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
 export const Contact = () => {
  return (
   <Layout> 
   <Box sx={{ my:3,ml: 10, 
   "& h4":{ 
    fontWeight: "bold", mb:2 
  
   },
   
   
   }} >
    <Typography variant='h4'>Contact My Resturant </Typography>
    <p className='pharag'>
      Some restaurants are a chain, meaning that there are
       restaurants which have the same name and serve the same food.
        McDonald's, Burger King, and Pizza Hut are examples of chain
         restaurants that are all over the world. These restaurants
          serve fast food, that is, inexpensive food, prepared and 
          served quickly. At some, you do not have to even get out of
           the car to eat. You can pay and get your order from a 
           window. These places are called drive-throughs.
      </p>
   </Box >
   <Box sx={{m:3,width:"600px",ml:10,
  "@media (max-width:600p)":{
    width:"300px",
  }
  }}>
<TableContainer component={Paper}>
<Table aria-label="contact table">
  <TableHead >
    <TableRow>
      <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>Contail Detail</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell sx={{}}>
        <SupportAgentIcon sx={{ color:"red", pt:1}}/>+92 3428748379
      </TableCell>
      </TableRow>
      <TableRow>
      <TableCell >
        <EmailIcon sx={{color:"pink",pt:1}}/>MyResturant1122@Gmail.com
      </TableCell>
      </TableRow>
    
      <TableRow>
      <TableCell >
    <CallIcon sx={{color:"green", pt:1}}/>03 2489393
      </TableCell>
      </TableRow>
  </TableBody>
</Table>
</TableContainer>
</Box>
      </Layout>
  )
}
