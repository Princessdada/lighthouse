import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo.png";
import React from "react";
import img1 from "../Image/BG Image.png";
import Section from "../Section";

const Tab1 = () => {
  return (
    <Container bg={"#fff"} color={"#1D2130"} maxW="full" height="100%">
      <Flex direction={["column", "column", "row"]} width="100vw">
        <Box padding={10} flex={3} textAlign={["left"]}>
          <Section
            subheading="Know About Us"
            heading="We provide a place for children with special needs"
            text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat quisquam exercitationem totam? Dolore, quaerat."
            text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, facilis!"
            buttonText="Learn More"
            onButtonClick={() => alert("Button Clicked")}
          />
        </Box>
        {/* Image Section */}
        <Box flex={2} padding={[4, 8, 12]} textAlign="center">
          <Image
            width={["100%", "90%", "80%"]}
            height="85%"
            borderRadius={10}
            src={img1}></Image>
        </Box>
      </Flex>
      <Flex align="center" width="100%" my={4}>
        {/* Text */}
        <Text fontSize={"16px"} mr={4} textAlign="center">
          OUR SUPPORTERS
        </Text>

        <Box flex="1" height="0.5px" bg="#E5E5E5"></Box>
      </Flex>
      <Flex
        justifyContent={["center", "space-around"]}
        alignItems="center"
        flexWrap="wrap"
        pb={"20px"}
        gap={4}>
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
      </Flex>
    </Container>
  );
};

export default Tab1;
