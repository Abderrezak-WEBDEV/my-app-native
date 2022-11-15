import { Box, HStack, Input, Pressable } from "native-base";
import React from "react";
import Colors from "../Color";
import { Entypo } from "@expo/vector-icons";
const HomeSearch = () => {
  return (
    <HStack
      space={3}
      w="full"
      px={8}
      h="15%"
      bg={Colors.black}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Votre marque préférée"
        bg={Colors.white}
        w="80%"
        type="text"
        h="12"
        borderWidth={0}
        _focus={{ bg: Colors.white }}
        variant="underlined"
        rounded={6}
      />
      <Pressable ml={3}>
        <Entypo name="shopping-bag" size={24} color="white" />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={1}
          bg={Colors.red}
          _text={{ color: Colors.white, fontSize: "11px" }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
