import { ScrollView, Flex, Pressable ,Image, Box, Heading, Text } from "native-base";
import React from "react";
import Colors from "../Color";
import products from "../Products";
import Rating from "./Rating";


const HomeProduct = () => {
  return (
    <ScrollView flex={1}>
      <Flex flexWrap="wrap" direction ="row" justifyContent= "space-between" h={10} px={6}
      >
        {products.map((product)=>(
          <Pressable key={product._id}
           w="48%"
           bg={Colors.white}
            rounded="md"
            shadow={2} 
            pt={0.5}
            my={3}
            pb={3}
            overflow="hidden">
            <Image 
            source={{uri:product.image}}
            alt={product.name} 
            w="full" 
            h={24} 
            resizeMode="contain"
            />
            <Box px={5} pt={2}>
              <Heading size="sm" bold> €{product.price}</Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">{product.name}</Text>
               <Rating/>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
   
    
  );
};

export default HomeProduct;
