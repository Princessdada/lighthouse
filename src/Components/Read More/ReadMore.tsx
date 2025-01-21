import React from "react";
import {
  Box,
  List,
  ListItem,
  Image,
  Container,
  Text,
  Heading,
  Grid,
} from "@chakra-ui/react";
import Section from "../Section";
import img from "../Image/Image (4).png";
import SpecialNeeds from "../WhatWeDo/SpecialNeeds";
import { services } from "../WhatWeDo/WhatWeDo";
import Footer from "../Footer/footer";
import Tab5 from "../MainTab/Tab5";
import Tab3 from "../MainTab/Tab3";
const ReadMore = () => {
  return (
    <>
      <Container
        bg="white"
        p={8}
        color="#1D2130"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="100vh">
        <Box
          w={"800px"}
          display="flex"
          flexDirection="column"
          justifyContent="center">
          {/* First Section */}
          <Section
            subheading="OUR PROJECT"
            heading="Distribution of the book, Anomaly, at Temple Secondary School"
            text1="In 2024, the Lightout HighSchool
Initiative continued its mission to
empower and inspire Nigerian teen
students through music, arts, and
impactful campaigns, reaching new
heights in engagement, education, and
social impact. With a commitment to
fostering creativity, social and personal
development, and environmental
responsibility, LightOut delivered
transformative experiences to over a
thousand students across Lagos."
            text2="The year began witha visit to Temple
Secondary School, where 400+ students
were immersed in a unique blend of
music, arts, and thought-provoking
discussions about personal growth,
values such as delayed gratification,
abstinence, and community
responsibility. This visit set the tone fora
year of meaningful interactions and
engagement."
          />
          {/* Image Section */}
          <Box display={"flex"} justifyContent={"center"}>
            <Image
              h={"300px"}
              w={"728px"}
              src={img}
              alt="Charity outreach"
              borderRadius="md"
            />
          </Box>
          {/* Bulleted List Section */}

          <Box pt={4} justifyContent={"center"}>
            <Heading
              pt={4}
              pb={4}
              fontWeight={700}
              fontSize={["32px", "36px", "48px"]}
              lineHeight={["40px", "50px", "57.6px"]}
              fontFamily="Roboto">
              Climate Action & Recycle Campaign
            </Heading>
            <Text
              color={"#525560"}
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"25.6px"}
              pb={5}>
              One ofthe year's most notable achievements was the Climate Action
              and Recycling Campaign Concert held at Falomo Senior High school
              and Ireti Senior Grammar schools. This event combined electrifying
              performances with powerful messages about recycling and climate
              action, inspiring over 1,000 students to adoptsustainable
              practices. Through recycling exercises and the establishment of
              collection points at participating schools, the campaign directly
              contributed to cleaner environments and heightened awareness of
              SDG 12 (Responsible Consumption and Production) and SDG 13
              (Climate Action).
            </Text>

            <Text
              color={"#525560"}
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"25.6px"}>
              Throughout 2024, Lightout's high school tours engaged over 1,400
              students, fostering creativity and self-expression and supporting
              students in their educational, social and personal development.
            </Text>
          </Box>
        </Box>
      </Container>

      {/* Section 2 */}
      <Container
        bg={"#FCEDC6"}
        p={8}
        color="#1D2130"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="50vh">
        <Box
          w={"800px"}
          display="flex"
          flexDirection="column"
          justifyContent="center">
          <Grid templateColumns={["1fr", "1fr 1fr", "repeat(2, 1fr)"]} gap={5}>
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
      </Container>
      {/* Remaining sections */}
      <Tab3></Tab3>
      <Tab5></Tab5>
      <Footer></Footer>
    </>
  );
};

export default ReadMore;
