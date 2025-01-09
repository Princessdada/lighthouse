import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import img1 from "./Image/unsplash_SBIak0pKUIE.png";
import img2 from "./Image/unsplash_nP9J7O90HfY.png";
import img3 from "./Image/Image (4).png";
import Footer from "./Footer/footer";
import Tab3 from "./MainTab/Tab3";
import Tab5 from "./MainTab/Tab5";
const Media = () => {
  const news = [
    {
      image: img1,
      title: "Autism care day",
      date: "15th Nov 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
    },
    {
      image: img2,
      title: "Down syndrome outreach",
      date: "15th Nov 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
    },
    {
      image: img3,
      title: "Caring for children with cerebral palsy",
      date: "15th Nov 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
    },
  ];
  return (
    <>
      <Box p={8} bg="#FCEDC6" color={"#1D2130"}>
        <Grid
          templateColumns={["1fr", "1fr", "0.5fr 2.5fr 3fr"]}
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
              TOP NEWS
            </Text>
            <Heading
              fontSize="57px"
              fontWeight="bold"
              lineHeight={"67px"}
              pb={"20px"}>
              Our goal is to provide inclusive care for children with special
              needs
            </Heading>
            <Text pb={"28px"}>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </Text>
            <Button w={"142px"} h={"51px"} bg="#F2C94C">
              Read More
            </Button>
          </VStack>

          {/* Third Column */}
          <VStack
            align="start"
            w={"90%"}
            h={"100%"}
            ml={"20px"}
            gap={6}
            bg="white"
            p={6}
            borderRadius="lg">
            {news.map((item, index) => (
              <HStack
                key={index}
                gap={4}
                align="start"
                w="100%"
                p={4}
                borderRadius="md"
                bg="gray.50">
                {/* News Image */}
                <Image
                  src={item.image}
                  boxSize="80px"
                  borderRadius="md"
                  alt={item.title}
                  objectFit="cover"
                />

                {/* News Content */}
                <VStack align="start" gap={1}>
                  <Text fontSize="lg" fontWeight="bold">
                    {item.title}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {item.date}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {item.description}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Grid>
      </Box>

      <Tab5></Tab5>
      <Footer></Footer>
    </>
  );
};

export default Media;
