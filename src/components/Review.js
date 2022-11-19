import { Box, CheckIcon, FormControl, Heading, Select, Text, VStack } from 'native-base';
import React from 'react';
import Colors from '../Color';
import Message from './Message';
import Rating from './Rating';

const Review = () => {
    const [ratings, setRatings] = useState();
    return (
        <Box>
       <Heading bold fontzise={15} mt={2} pb={3}>
        Review
        {/* Review */}
       </Heading>
        {/* s'il n'y a pas de Review */}
        <Message color = {Colors.main} bg={Colors.deepGray} children={"Not Review"} mt={3}/>
        <Box p= {3} bg={Colors.deepGray} mt={3} rounded={5}>
            <Heading bold fontSize={15}>User Doe</Heading>
            <Rating value={2}/>
            <Text>Jan 12 2022</Text>
            <Message color = {Colors.black} bg={Colors.white} children={"Merci pour votre bon d'achat"}/>
        </Box>
        <Box mt={5}>
         <Heading bold fontsize={10}  mb={4}>Review this product</Heading>
         <VStack space={6}>
            <FormControl>
                <FormControl.Label  _text={{ fontsize:"12px", fontWeight:"bold"}}>
                 Review
                </FormControl.Label>
                <Select
                 bg={Colors.subGreen}
                 borderWidth={0} 
                 rounded={5}
                 placeholder="Choose your size" 
                 _selectedItem={{ bg:Colors.subGreen, endIcon:<CheckIcon size= {3} /> }}
                 value={ratings}
                 onValueChange={(e) => setRatings(e)}
                 >
                    <Select.Item label="1-poor" value="1"/>
                    <Select.Item label="2-Fair" value="2"/>
                    <Select.Item label="3-Good" value="3"/>
                    <Select.Item label="4-poor" value="4"/>
                 </Select>
            </FormControl>
         </VStack>
        </Box>
        </Box>  
        
    );
};

export default Review;