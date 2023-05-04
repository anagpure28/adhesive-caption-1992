// import styled from '@emotion/styled'
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// export const GridCard = ({id, date, image, text}) => {
//   return (
//     <DIV>
//       <div style={{border: "1px solid red"}}>
//         <div style={{width: "100%"}}>
//           <img src={image} alt="" width="100%" />
//         </div>
//         <div>
//           <p>{date}</p>
//           <h3>{text}</h3>
//         </div>
//       </div>
//     </DIV>
//   )
// }

// const DIV = styled.div`
//   width: 90%;
//   h3{
//     font-size: 18px;
//     font-weight: 600;
//   }
// `
export const GridCard = ({id, date, image, text, link}) => {

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' spacing={5} bg={"gray.100"} >
      <Image src={image} width={"100%"} height={"60%"}/>
      <Box p='6'>
        <Box display='flex' alignItems='baseline' textAlign={"left"}>
          <Text>{date}</Text>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          textAlign={"left"}
          textDecoration={"underline"}
        >
          <Link to={link}>{text}</Link>
        </Box>
      </Box>
    </Box>
  )
}