import React from "react";
import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";

import img1 from "../Components/Image/BG Image.png";
import img2 from "../Components/Image/BG Image.png";

const AboutUs = () => {
  return (
    <Flex w="100%" h="80vh" px={10} py={8} gap={8}>
      {/* Left Section */}
      <Flex
        flex={1}
        direction="column"
        justify="center"
        mt={10}
        align="flex-start">
        <Text fontSize="xs" fontWeight="bold" mb={4}>
          About Us
        </Text>
        <Text fontSize="2xl" color="gray.600" mb={6}>
          Our Journey
        </Text>
        <Text paddingBottom={10} fontSize="md" color="gray.700">
          We are committed to making a difference in the world through our
          initiatives. With a focus on innovation, sustainability, and community
          impact, we strive to create solutions that matter.
        </Text>
        <Button>Learn More</Button>
      </Flex>

      {/* Right Section */}
      {/* Right Section with Images */}
      <Flex
        flex={1}
        justify="center"
        align="center"
        position="relative"
        w="100%"
        h="100%">
        {/* Image in the Top */}
        <Image
          src={img1}
          boxSize="120px"
          position="absolute"
          top="10%"
          left="50%"
          transform="translateX(-50%)"
          borderRadius="md"
          boxShadow="lg"
        />

        {/* Image in the Bottom */}
        <Image
          src={img2}
          boxSize="120px"
          position="absolute"
          bottom="10%"
          left="50%"
          transform="translateX(-50%)"
          borderRadius="md"
          boxShadow="lg"
        />

        {/* Image on the Left */}
        <Image
          src={img2}
          boxSize="120px"
          position="absolute"
          left="10%"
          top="50%"
          transform="translateY(-50%)"
          borderRadius="md"
          boxShadow="lg"
        />

        {/* Image on the Right */}
        <Image
          src={img1}
          boxSize="120px"
          position="absolute"
          right="10%"
          top="50%"
          transform="translateY(-50%)"
          borderRadius="md"
          boxShadow="lg"
        />
      </Flex>
    </Flex>
  );
};

export default AboutUs;
