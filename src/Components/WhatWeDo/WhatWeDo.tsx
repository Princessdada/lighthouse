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

const WhatWeDo = () => {
  const services = [
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
          <VStack align="start" m={"30px"}>
            <Text fontSize="sm" fontWeight="bold">
              KNOW ABOUT US
            </Text>
            <Text fontSize="4xl" fontWeight="bold" pb={"10px"}>
              We are working cross country
            </Text>
            <Text color={"#525560"} fontSize={"16px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              quis dolor consequuntur eos modi reiciendis! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Minima itaque nisi, alias quia
              corporis harum?
            </Text>
          </VStack>

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
            <HStack key={index} gap={4} align="start" p={4} borderRadius="md">
              {/* Image Section */}
              <Box p={3} borderRadius="md">
                <Image src={service.icon} boxSize={8} alt={service.title} />
              </Box>

              {/* Text Section */}
              <VStack align="start" gap={1}>
                <Text fontWeight="bold" fontSize="lg">
                  {service.title}
                </Text>
                <Text fontSize="sm">{service.description}</Text>
              </VStack>
            </HStack>
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
