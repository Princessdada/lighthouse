import React from "react";
import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import Videopage from "./Videopage";
import MissionVision from "./MissionVission";
import Section from "../Section";

const Page1 = () => {
  return (
    <>
      <Box p={8} bg="white" color={"#1D2130"}>
        <Grid
          templateColumns={["1fr", "1fr", "3fr 2fr"]}
          gap={8}
          alignItems="start"
          w="100%">
          {/* First Column */}

          <Section
            subheading="KNOW ABOUT US"
            heading="We are a non-governmental organization"
          />
          {/* Second Column */}
          <VStack pt={"40px"}>
            <Text fontSize="20px" fontWeight={700}>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </Text>
            <Text fontSize="16px" fontWeight={400}>
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
