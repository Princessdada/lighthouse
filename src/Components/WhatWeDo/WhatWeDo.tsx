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
          templateColumns={["1fr", "1fr", "2fr 2fr"]}
          gap={8}
          alignItems="start"
          w="100%">
          {/* First Column */}
          <Section
            subheading="KNOW ABOUT US"
            heading="Empowering Students with Values, Financial Literacy, and Life Skills Through Engaging Concerts"
          />
          <Text fontSize={"m"} pt={8} lineHeight={"1.8"}>
            <Text>
              We organize LightOut concerts across secondary schools and
              colleges in the country.
            </Text>
            <Text>
              We have so far held nineteen (19) editions of these concert
              experiences in schools, reaching over 28,000 students.
            </Text>

            <Text>
              {" "}
              Some of the schools are Kings College, Queens College,
              Greensprings School, Dansol High School, Lafiaji High School,
              Oxbridge Tutorial College as well as various youth groups and
              teenage camps.
            </Text>

            <Text>
              The concert excitement helps to forge a connection with the
              students; this connection is what then eases the advocacy of
              values that we really seek to communicate to them integrity,
              stewardship, abstinence and delayed gratification.
            </Text>

            <Text>
              We educate the students on the dangers of drug use and the
              importance of abstinence in preventing abuse, transmission of
              STDs, teenage pregnancies and maternal mortality. We also provide
              the girls with sanitary pads.
            </Text>

            <Text>
              Through our partnerships with financial institutions, we actively
              engage students in financial literacy games that promote valuable
              money habits, such as the importance of saving.. Additionally, we
              have professionals from partner brands address and creatively
              educate the students on these and more topics."
            </Text>
          </Text>

          {/* Third Column
          <VStack align="start">
            <Image
              src={img}
              w={"300px"}
              h={"300px"}
              borderRadius={"10px"}></Image>
          </VStack> */}
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
