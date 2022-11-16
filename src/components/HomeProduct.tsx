import { ScrollView, Flex, Pressable ,Image } from "native-base";
import React from "react";
import Colors from "../Color";
import products from "../Products";

const HomeProduct = () => {
  return (
    <ScrollView flex={1}>
      <Flex flexWrap="wrap" direction ="row" justifyContent= "space-between"  px={6}
      >
        {products.map((product)=>(
          <Pressable key={product._id}
           w="45%"
           bg={Colors.white}
            rounded="md"
            shadow={2} 
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden">
            <Image 
            source={{uri:product.image}}
            alt={product.name} 
            w="full" 
            h={20} 
            resizeMode="contain"
            />
          </Pressable>

        ))}
      </Flex>
    </ScrollView>
   
    
  );
};

export default HomeProduct;
