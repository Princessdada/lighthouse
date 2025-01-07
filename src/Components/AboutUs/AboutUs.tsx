import React from "react";
import { Flex, Box, Text, Image, Button, Grid } from "@chakra-ui/react";

import img1 from "../Components/Image/BG Image.png";
import img2 from "../Components/Image/BG Image.png";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Team from "./Team";
import Tab5 from "../MainTab/Tab5";
import Footer from "../Footer/footer";

const AboutUs = () => {
  return (
    <Box>
      <Page1></Page1>
      <Page2></Page2>
      <Team></Team>
      <Tab5></Tab5>
      <Footer></Footer>
    </Box>
  );
};

export default AboutUs;
