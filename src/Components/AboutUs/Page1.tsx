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
          <VStack pt={["", "", "40px"]}>
            {/* <Text fontSize="20px" fontWeight={700}>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </Text> */}
            <Text fontSize="16px" fontWeight={400}>
              LightOut Highschool Initiative isa CSR Co-Branding platform,
              harnessing the powerofmusic and arttodrive social impact.
              <Text>
                {" "}
                It hosts musical outreaches and concert experiences for Students
                across Secondary Schools and colleges, leveraging Music & Art to
                engage and support students in their educational, social and
                personal development.{" "}
              </Text>
              <Text>
                The initiative was founded 2017, by Nigerian Musician and
                Culture Architect, Gaise Baba through hisorganization — 4ó4
                Projects. So far, 22 editions reaching over 32,000 students have
                been executed.{" "}
              </Text>
              <Text>
                Lightout focuses on three (3) of the 17 SDGs through the work it
                does—SDGs3, 4, and 12.
              </Text>
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
