import { Box, Image, Heading, HStack, Spacer, Text } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Review from '../components/Review';
import Colors from '../Color';
import Buttone from '../components/Buttone';
import Rating from '../components/Rating';

const SingleProductScreen = () => {
  return (
    <Box flex={1} safeArea bg={Colors.white} ml={5} mr={5} >
      <ScrollView  showsVerticalScrollIndicator={false}>
        <Image source={require("../../assets/image.png")} w="full" h={200} alt="image" resizeMode='contain' />
        <Heading  bold fontSize={15} mt={4} mb={2} lineHeight={22}>Nouvelle Collection ADIDAS</Heading>
         <Rating value={2}  />
         <HStack space={2} alignItems ="center" my={5} >
          <NumericInput
           totalHeight={30}
           totalWidth={140}
           iconSize={25}
           maxValue={15}
           minValue={0}
           rounded
           borderColor={Colors.orange}
           textColor={Colors.orange}
           iconStyle={{color:Colors.orange}}
           rightButtonBackgroundColor={Colors.main}
           leftButtonBackgroundColor={Colors.main}
          />
          <Spacer/>
          <Heading bold color={Colors.black} fontSize={19}> €300</Heading>
         </HStack>
          
            <Text lineHeight={24}  fontSize={12}>
            Si vous voulez faire quelque chose avec les modes de couleur dans votre application,
            vous pouvez utiliser colorModeManager Prop de NativeBaseProvider pour y parvenir.
            Dans l'exemple ci-dessous, nous montrons comment stocker le ColorMode actif dans un stockage asynchrone, 
            afin qu'il puisse être cohérent tout autour de votre application.
            </Text>
            <Buttone  mt={5} bg={Colors.main} color={Colors.white} >Ajouter au panier</Buttone>
            {/* RETOUR AU MENU  */}
           <Review/>
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
