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

const Tab1 = () => {
  return (
    <Container bg={"#fff"} color={"#000"} maxW="full" height="100%">
      <Flex width="100vw" height="90vh">
        <Box padding={10} flex={3}>
          <Text pt={20} fontSize={16}>
            Know About Us
          </Text>
          <Heading
            pt={10}
            fontWeight={700}
            fontSize="48px"
            lineHeight="57.6px"
            fontFamily="Roboto">
            We provide a place for children with special needs
          </Heading>
          <Text fontWeight={400} fontSize={16} pt={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat
            quisquam exercitationem totam? Dolore, quaerat.
          </Text>
          <Text fontWeight={400} fontSize={16} pt={5} pb={10}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            facilis!
          </Text>
          <Button w={"142px"} h={"51px"} bg="#F2C94C">
            Learn More
          </Button>
        </Box>
        <Box flex={2} padding={12}>
          <Image width="80%" height="100%" borderRadius={10} src={img1}></Image>
        </Box>
      </Flex>
      <Flex align="center" width="100%" my={6}>
        {/* Text */}
        <Text fontSize={16} mr={4}>
          OUR SUPPORTERS
        </Text>

        <Box flex="1" height="0.5px" bg="#E5E5E5"></Box>
      </Flex>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        pb={"20px"}
        gap={4}>
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
        <Image bg={"white"} src={Logo} width="150px" height="auto" />
      </Flex>
    </Container>
  );
};

export default Tab1;
