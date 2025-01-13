import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img from "../Image/unsplash_SBIak0pKUIE.png";
import icon1 from "../Icons/Icon.png";
import icon2 from "../Icons/Icon (1).png";
import icon3 from "../Icons/Icon (2).png";
import icon4 from "../Icons/Icon (4).png";
import {
  FaHome,
  FaHeartbeat,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaSpa,
  FaBullhorn,
} from "react-icons/fa";
import Tab3 from "../MainTab/Tab3";
import Tab5 from "../MainTab/Tab5";
import Footer from "../Footer/footer";
import SpecialNeeds from "./SpecialNeeds";
import Section from "../Section";
export const services = [
  {
    icon: icon1,
    title: "Family support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: icon2,
    title: "Health benefits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: icon3,
    title: "Education",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: icon4,
    title: "Basic amenities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: icon1,
    title: "Therapy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: icon2,
    title: "Public outreach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];
const WhatWeDo = () => {
  return (
    <>
      <Box p={8} bg="white" color={"#1D2130"} fontFamily={"Roboto"}>
        <Grid
          templateColumns={["1fr", "1fr", "3fr 2fr"]}
          gap={8}
          alignItems="start"
          w="100%">
          {/* First Column */}
          <Section
            subheading="KNOW ABOUT US"
            heading="We are working cross country"
            text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis dolor consequuntur eos modi reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque nisi, alias quia corporis harum?"
          />

          {/* Third Column */}
          <VStack align="start">
            <Image
              src={img}
              w={"300px"}
              h={"300px"}
              borderRadius={"10px"}></Image>
          </VStack>
        </Grid>
      </Box>
      <Box bg={"#FCEDC6"} color={"#1D2130"}>
        {/* Header */}
        <HStack gap={4} textAlign="left" p={12}>
          <Text fontSize="3xl" fontWeight="700">
            What we do for our kids with special needs
          </Text>
        </HStack>
        <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]} gap={8}>
          {services.map((service, index) => (
            <SpecialNeeds
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </Box>
      <Tab3></Tab3>
      <Tab5></Tab5>
      <Footer></Footer>
    </>
  );
};

export default WhatWeDo;
