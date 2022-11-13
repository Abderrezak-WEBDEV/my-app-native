import { Text, Box, Center, Image, VStack, Button } from "native-base";
import React from "react";
import Colors from "../Color";
import Buttone from "../components/Buttone";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h="250">
        <Image source={require("../../assets/job.png")} alt="logo" size="lg" />
      </Center>
      <VStack space={6} px={5} alignItems="center" bg={Colors.black}>
        <Buttone></Buttone>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
