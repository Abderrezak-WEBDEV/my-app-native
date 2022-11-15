import { Box, Text, View } from "native-base";
import React from "react";
import Colors from "../Color";
import HomeProduct from "../components/HomeProduct";
import HomeSearch from "../components/HomeSearch";

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.orange}>
      <HomeSearch />
      <HomeProduct />
    </Box>
  );
};

export default HomeScreen;
