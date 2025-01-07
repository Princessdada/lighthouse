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
            We make sure to provide inclusive care for children with special
            needs
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Text>
        </VStack>

        {/* Vision */}
        <VStack align="start" gap={4} mr={20}>
          <Text fontSize="sm" fontWeight="bold">
            OUR VISION
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Provide more inclusive care to children around the world
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
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
