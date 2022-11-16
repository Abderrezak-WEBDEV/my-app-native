import {  HStack, Text } from 'native-base';
import React from 'react';
// import { EvilIcons } from '@expo/vector-icons';
import Colors from '../Color';
import { AntDesign } from '@expo/vector-icons';


function  Rating  ({value, text}) {
    const size = 8  
    const color = Colors.blue
    return (
    
       <HStack space={0.4} mt={1} alignItems="center">
       <AntDesign 
        name={value >= 1 ? "" : value >= 0.5 ? "" : ""} 
        size={size}
        color={color} />
         <AntDesign 
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-0" : "star-0"} 
        size={size}
        color={color} />
         <AntDesign 
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-0" : "star-0"} 
        size={size}
        color={color} />
         <AntDesign 
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-0" : "star-0"} 
        size={size}
        color={color} />
         <AntDesign
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-0" : "star-0"} 
        size={size}
        color={color} /> 
    0
        </HStack>

    );
};

export default Rating;
