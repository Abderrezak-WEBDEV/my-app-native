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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
        <Heading color={Colors.white}>S'inscrire</Heading>
        <VStack space={5} pt="6">
          {/* Nom d'utilisateur */}
          <Input
            InputLeftElement={
              <MaterialCommunityIcons
                name="rename-box"
                size={20}
                color="#48B600"
              />
            }
            variant="underlined"
            placeholder="Nom et Prénom"
            isRequired
            w="70%"
            size={40}
            color="white"
            borderBottomColor={Colors.underLine}
          />
          {/* Adresse mail */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color="#48B600" />
            }
            variant="underlined"
            placeholder="user@mail.com"
            isRequired
            w="70%"
            size={40}
            color="white"
            borderBottomColor={Colors.underLine}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={<Ionicons name="eye" size={20} color="#48B600" />}
            variant="underlined"
            placeholder="**********"
            type="password"
            isRequired
            maxLength={15}
            w="70%"
            size={40}
            color="white"
            borderBottomColor={Colors.underLine}
          />
          <Input
            InputLeftElement={<Ionicons name="eye" size={20} color="#48B600" />}
            variant="underlined"
            placeholder="Confirmation"
            type="password"
            isRequired
            maxLength={15}
            w="70%"
            size={40}
            color="white"
            borderBottomColor={Colors.underLine}
          />
          <Button
            _pressed={{ bg: Colors.white }}
            my={30}
            w="50%"
            h="15%"
            rounded={30}
            bg="#48B600"
          >
            {" "}
            S'inscrire{" "}
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.deepstGray}>Se connecter</Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
