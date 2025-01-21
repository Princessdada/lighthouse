import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import award1 from "../Logo/Award badge (4).png";
import award2 from "../Logo/Award badge.png";
import award3 from "../Logo/Award badge (1).png";
import award4 from "../Logo/Award badge (2).png";
import image from "../Image/Image (4).png";

const Page2: React.FC = () => {
  return (
    <Box p={8} bg="#FEFDFC" color={"#1D2130"}>
      {/* Awards Section */}
      <VStack gap={8} mb={16}>
        <Text fontSize="3xl" fontWeight="bold">
          Programs & Campaigns
        </Text>
        <SimpleGrid columns={[1, 2, 4]} gap={8}>
          {/* Award section */}
          <VStack gap={2} textAlign="center">
            <Image src={award1} alt="Award Icon" boxSize="50px" />
            <Text fontWeight="bold" fontSize="m">
              2021
            </Text>
            <Text>Best NGO Award</Text>
            <Text fontSize="sm">Berlin, Germany</Text>
          </VStack>

          <VStack gap={2} textAlign="center">
            <Image src={award2} alt="Award Icon" boxSize="50px" />
            <Text fontWeight="bold" fontSize="m">
              2018
            </Text>
            <Text>Global Award</Text>
            <Text fontSize="sm">New York, USA</Text>
          </VStack>

          <VStack gap={2} textAlign="center">
            <Image src={award3} alt="Award Icon" boxSize="50px" />
            <Text fontWeight="bold" fontSize="m">
              2014
            </Text>
            <Text>CSN Award</Text>
            <Text fontSize="sm">New Delhi, India</Text>
          </VStack>

          <VStack gap={2} textAlign="center">
            <Image src={award4} alt="Award Icon" boxSize="50px" />
            <Text fontWeight="bold" fontSize="m">
              2010
            </Text>
            <Text>NGO of the Year Award</Text>
            <Text fontSize="sm">Vienna, Austria</Text>
          </VStack>
        </SimpleGrid>
      </VStack>

      <Box borderColor="gray.300" />

      {/* Our Journey Section */}
      <Flex justify="center" align="center">
        <Box
          bg="#F2C94C"
          color={"#000000"}
          p={8}
          m={5}
          w={"950px"}
          h={"auto"}
          overflow="hidden"
          borderRadius="lg"
          boxShadow="sm"
          alignContent={"center"}>
          <Flex direction={["row", "row"]} gap={8} alignItems="center">
            {/* Text Section */}
            <VStack align="start" gap={4} width="100%">
              <Text fontSize="sm" fontWeight="bold">
                OUR JOURNEY
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                Empowering Over 1,400 Students Across Three Schools to Build
                Stronger Communities and Sustainable Futures
              </Text>
              <Text color="#000000" fontSize="sm">
                This year, Lightout reached3 schools—TempleSecondary School,
                Falomo Senior High School, and Ireti senior Grammar School with
                over 1,400 students actively participating invarious activities.
                By leveraging the universal appeal of music and the creativity
                of the arts, Lightout created a platform forstudents to learn
                about values such as stewardship, delayed gratification,
                abstinence and dignity of labour, as well as their role in
                fostering a sustainable environment and building their
                communities and naflon
              </Text>
              <HStack gap={8} mt={4} alignItems={"flex-start"}>
                <VStack align="center" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">
                    1,400+
                  </Text>
                  <Text fontSize="sm">Students impacted</Text>
                </VStack>

                <VStack align="center" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">
                    1000+
                  </Text>
                  <Text fontSize="sm">Booksgiven to students</Text>
                </VStack>
                <VStack align="center" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">
                    10+
                  </Text>
                  <Text fontSize="sm">Artistes</Text>
                </VStack>
                <VStack align="center" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">
                    3
                  </Text>
                  <Text fontSize="sm">Schools</Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Image Section */}
            <Box display={["block", "block"]} mt={[4, 0]} width="100%">
              <Image
                src={image}
                alt="Our Journey"
                borderRadius="lg"
                boxShadow="md"
                maxWidth="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Page2;
