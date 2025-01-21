import { Box, Button, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img from "../Image/Image (5).png";
import Tab5 from "../MainTab/Tab5";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import { useHandleReadMore } from "../Hooks/useHandleReadMore";
import Section from "../Section";

const Donate = () => {
  const handleReadMore = useHandleReadMore();
  return (
    <>
      <Box
        p={[4, 6, 8]}
        bg="#FCEDC6"
        color="#1D2130"
        maxH="576px"
        fontFamily="Roboto">
        <Grid
          mt="30px"
          templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
          gap={[4, 6, 8]}
          alignItems="start"
          w="100%">
          {/* First Column */}
          <Section
            heading="Making a donation for our teenagers"
            subheading="Donate"
            text1="When you donate, you’re supporting effective care for children, an investment in the leaders of tomorrow."
          />

          {/* Second Column */}
          <VStack align="start" m="10px">
            <Button
              onClick={handleReadMore}
              w={["full", "142px"]}
              h="51px"
              bg="#F2C94C"
              fontSize={["sm", "md"]}>
              Read More
            </Button>
          </VStack>

          {/* Third Column */}
          <VStack mt="30px" align="start">
            <Image
              src={img}
              w={["100%", "300px", "400px"]}
              h={["auto", "200px", "300px"]}
              borderRadius="10px"
              objectFit="cover"
            />
          </VStack>
        </Grid>
      </Box>

      <Tab5></Tab5>
      <Footer></Footer>
    </>
  );
};

export default Donate;
