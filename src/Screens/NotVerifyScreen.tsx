import { Box, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../Color";
import Buttone from "../components/Buttone";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/job.png")} alt="logo" size="lg" />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.black} color={Colors.white}>
          S'inscrire
        </Buttone>
        <Buttone bg={Colors.white} color={Colors.black}>
          Se connecter
        </Buttone>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
