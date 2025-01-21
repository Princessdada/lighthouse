import { Box, Button, Container, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../Image/A student taking the Abstinence Pledge.jpg";
import useHandleEventsReadMore from "../Hooks/useHandleEventsReadMore";

const Tab5 = () => {
  const eventReadMore = useHandleEventsReadMore();
  return (
    <Container bg={"#fff"} maxW={"full"}>
      <Box pt={"50px"}>
        <Box
          bg={"#fff"}
          p={[4, 6, 10]}
          position="relative"
          h={["250px", "300px"]}
          w={["90%", "90%", "1100px"]}
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
            <Text
              fontFamily={"Roboto"}
              fontSize={["xl", "2xl"]}
              fontWeight="700"
              mb={4}>
              You can contribute to provide a place for youths and teenagers
            </Text>

            {/* Buttons */}
            <Flex justifyContent="center" gap={4} flexWrap="wrap">
              <Button bg={"#F2C94C"} colorScheme="#F2C94C" size={["md", "lg"]}>
                Join as a volunteer
              </Button>
              <Button colorScheme="blue" size={["md", "lg"]}>
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
      <Box bg={"#fff"} p={[4, 6, 10]}>
        {/* Heading */}
        <Text
          color={"#000"}
          fontSize={["lg", "xl", "2xl"]}
          fontWeight={"bold"}
          mb={6}>
          Our Events
        </Text>

        {/* Events Section */}
        <Grid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
          gap={[4, 6, 8]}>
          {/* Event 1 */}
          <Box
            bg={"#F2C94C"}
            color={"#000"}
            borderRadius={"md"}
            p={[4, 6]}
            boxShadow={"lg"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={["column", "row"]}>
            <Flex
              alignItems={"center"}
              gap={[2, 4]}
              flexDirection={["column", "row"]}>
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
                <Text fontSize={["md", "lg"]} fontWeight={"bold"}>
                  A day with our wonderful children
                </Text>
              </Box>
            </Flex>
            <Button
              onClick={eventReadMore}
              mt={[4, 0]}
              size={["md", "lg"]}
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
            p={[4, 6]}
            boxShadow={"lg"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={["column", "row"]}>
            <Flex
              alignItems={"center"}
              gap={[2, 4]}
              flexDirection={["column", "row"]}>
              <Box textAlign={"center"}>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  25
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
                <Text fontSize={["md", "lg"]} fontWeight={"bold"}>
                  Seminar: Caring for children with autism
                </Text>
              </Box>
            </Flex>
            <Button
              onClick={eventReadMore}
              mt={[4, 0]}
              size={["md", "lg"]}
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
