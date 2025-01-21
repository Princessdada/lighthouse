import React from "react";
import { Box, Grid, VStack, Text, Flex, Image } from "@chakra-ui/react";
import Logo from "../Logo/Logo.png";
const MissionVision = () => {
  return (
    <Box p={10} bg="#FCEDC6" color="#1D2130">
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={8}>
        {/* Mission */}
        <VStack align="start" gap={4} ml={20}>
          <Text fontSize="sm" fontWeight="bold">
            OUR MISSION
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Fostering a Responsible and Value-Driven Youth for a Better Society
          </Text>
          <Text fontSize="sm">
            To havea healthy, well-educated and responsible Nigerian society
            because of the constructive values and habits our young people have
            imbibed and chosentolive by
          </Text>
        </VStack>

        {/* Vision */}
        <VStack align="start" gap={4} mr={20}>
          <Text fontSize="sm" fontWeight="bold">
            OUR VISION
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Inspiring Youth Through Music, Art, and Meaningful Engagement
          </Text>
          <Text fontSize="sm">
            LightOut High School Initiative creates unforgettable concert
            experiences across high schools, leveraging music and art as tools
            for promoting constructive values among students and various youth
            groups inNigeria. We engage teenage students with fun conversations
            and activities, and support themin their educational, social
          </Text>
        </VStack>
      </Grid>
      <Flex align="center" width="100%" my={6}>
        {/* Text */}
        <Text mt={10} fontSize={16} mr={4}>
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
        <Image src={Logo} width="150px" height="auto" />
        <Image src={Logo} width="150px" height="auto" />
        <Image src={Logo} width="150px" height="auto" />
        <Image src={Logo} width="150px" height="auto" />
        <Image src={Logo} width="150px" height="auto" />
      </Flex>
    </Box>
  );
};

export default MissionVision;
