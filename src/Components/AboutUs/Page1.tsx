import React from "react";
import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import Videopage from "./Videopage";
import MissionVision from "./MissionVission";

const Page1 = () => {
  return (
    <>
      <Box p={8} bg="white" color={"#1D2130"}>
        <Grid
          templateColumns={["1fr", "1fr", "0.5fr 3fr 2fr"]}
          gap={8}
          alignItems="start"
          w="100%">
          {/* First Column */}
          <Box
            mt={"10px"}
            alignSelf={"start"}
            height="2px"
            width="60px"
            bg="#1D2130"
            borderRadius="full"
            ml={[0, 0, 4]}
          />

          {/* Second Column */}
          <VStack align="start">
            <Text fontSize="sm" fontWeight="bold">
              KNOW ABOUT US
            </Text>
            <Text fontSize="4xl" fontWeight="bold">
              We are a non-governmental organization
            </Text>
          </VStack>

          {/* Third Column */}
          <VStack align="start">
            <Text fontSize="sm">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim elementum tristique.
            </Text>
          </VStack>
        </Grid>
      </Box>
      <Videopage></Videopage>
      <MissionVision></MissionVision>
    </>
  );
};

export default Page1;
