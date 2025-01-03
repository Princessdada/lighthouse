import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../Image/BG Image.png";

const Tab5 = () => {
  return (
    <Container bg={"#fff"} maxW={"full"} h={"1280px"}>
      <Box pt={"50px"}>
        <Box
          bg={"#fff"}
          p={10}
          position="relative"
          h="300px"
          w="900px"
          borderRadius="10px"
          mx="auto" // centers the container
          backgroundImage={`url(${img1})`}
          backgroundSize="cover"
          backgroundPosition="center"
          overflow="hidden">
          {/* Overlay content */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            zIndex="1"
            color="#fff">
            {/* Heading */}
            <Text fontFamily={"Roboto"} fontSize="2xl" fontWeight="700" mb={4}>
              You can contribute to provide a place for children with special
              needs!
            </Text>

            {/* Buttons */}
            <Flex justifyContent="center" gap={4}>
              <Button bg={"#F2C94C"} colorScheme="#F2C94C" size="lg">
                Join as a volunteer
              </Button>
              <Button colorScheme="blue" size="lg">
                Donate
              </Button>
            </Flex>
          </Box>

          {/* Optional background overlay for better contrast */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.5)" // dark overlay
            zIndex="0"
            borderRadius="10px"></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Tab5;
