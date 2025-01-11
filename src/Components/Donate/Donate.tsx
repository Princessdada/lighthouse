import { Box, Button, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img from "../Image/Image (5).png";
import ContributionSection from "./ContributinSection";
import Tab5 from "../MainTab/Tab5";
import Footer from "../Footer/footer";
const Donate = () => {
  return (
    <>
      <Box p={8} bg="#FCEDC6" color={"#1D2130"} h={"576px"}>
        <Grid
          mt={"30px"}
          templateColumns={["1fr", "1fr", "0.5fr 3fr 2fr"]}
          gap={8}
          alignItems="start"
          w="100%">
          {/* First Column */}
          <Box
            mt={"40px"}
            alignSelf={"start"}
            height="2px"
            width="70px"
            bg="#1D2130"
            borderRadius="full"
            ml={[0, 0, 4]}
          />

          {/* Second Column */}
          <VStack align="start" m={"30px"}>
            <Text fontSize="sm" fontWeight="bold">
              Donate
            </Text>
            <Text fontSize="4xl" fontWeight="bold" pb={"10px"}>
              Making a donation for our children.
            </Text>
            <Text color={"#525560"} fontSize={"16px"} mb={"20px"}>
              When you donate, you’re supporting effective care to children with
              special needs—an investment in the leaders of tomorrow.
            </Text>
            <Button w={"142px"} h={"51px"} bg="#F2C94C">
              Read More
            </Button>
          </VStack>

          {/* Third Column */}
          <VStack mt={"30px"} align="start">
            <Image
              src={img}
              w={"400px"}
              h={"300px"}
              borderRadius={"10px"}></Image>
          </VStack>
        </Grid>
      </Box>
      <ContributionSection></ContributionSection>
      <Tab5></Tab5>
      <Footer></Footer>
    </>
  );
};

export default Donate;
