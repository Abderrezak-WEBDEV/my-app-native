import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const RegisterScreen = () => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/wall.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
        bg={Colors.deepstGray}
      >
        {/* Login */}
        <Heading>Login</Heading>
        <VStack space={8} pt="6">
          <Input
            variant="underlined"
            placeholder="user@mail.com"
            isRequired
            w="70%"
            color="white"
            borderBottomColor={Colors.underLine}
          />
          {/* PASSWORD */}
          <Input
            variant="underlined"
            placeholder="**********"
            type="password"
            isRequired
            maxLength={15}
            w="70%"
            color="white"
            borderBottomColor={Colors.underLine}
          />
          <Button
            _pressed={{ bg: Colors.white }}
            my={30}
            w="40%"
            rounded={30}
            bg="#48B600"
          >
            {" "}
            S'inscrire{" "}
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.deepstGray}>Sing UP</Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
