import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import img1 from "../Image/BG Image.png";

const Tab5 = () => {
  return (
    <Container bg={"#fff"} maxW={"full"}>
      <Box pt={"50px"}>
        <Box
          bg={"#fff"}
          p={10}
          position="relative"
          h="300px"
          w="1100px"
          borderRadius="10px"
          mx="auto"
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

          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex="0"
            borderRadius="10px"></Box>
        </Box>
      </Box>
      {/* our event */}
      <Box bg={"#fff"} p="50px">
        {/* Heading */}
        <Text color={"#000"} fontSize={"2xl"} fontWeight={"bold"} mb={6}>
          Our Events
        </Text>

        {/* Events Section */}
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={8}>
          {/* Event 1 */}
          <Box
            bg={"#F2C94C"}
            color={"#000"}
            borderRadius={"md"}
            p={6}
            boxShadow={"lg"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={4}>
              <Box textAlign={"center"}>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  13
                </Text>
                <Text fontSize={"sm"}>APR</Text>
              </Box>
              <Box>
                <Text
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                  fontWeight={"semibold"}>
                  Next Events
                </Text>
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  A day with our wonderful children
                </Text>
              </Box>
            </Flex>
            <Button
              size={"lg"}
              bg={"#FFF"}
              color={"#000"}
              borderRadius={"full"}
              boxShadow={"md"}
              _hover={{ bg: "#E5E5E5" }}>
              →
            </Button>
          </Box>

          {/* Event 2 */}
          <Box
            bg={"#F2C94C"}
            color={"#000"}
            borderRadius={"md"}
            height={"120px"}
            p={6}
            boxShadow={"lg"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={4}>
              <Box textAlign={"center"}>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  25
                </Text>
                <Text fontSize={"sm"} color={"#000"}>
                  APR
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                  fontWeight={"semibold"}>
                  Next Events
                </Text>
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  Seminar: Caring for children with autism
                </Text>
              </Box>
            </Flex>
            <Button
              size={"lg"}
              bg={"#FFF"}
              color={"#000"}
              borderRadius={"full"}
              boxShadow={"md"}
              _hover={{ bg: "#E5E5E5" }}>
              →
            </Button>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Tab5;
