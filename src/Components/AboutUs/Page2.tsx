import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Grid,
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
          Awards & Recognitions
        </Text>
        <SimpleGrid columns={[1, 2, 4]} gap={8}>
          {/*  Award section */}
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
          w={"950px"}
          h={"450px"}
          borderRadius="lg"
          boxShadow="sm"
          alignContent={"center"}>
          <Grid
            templateColumns={["1fr", "1fr 1fr"]}
            gap={8}
            alignItems="center">
            {/* Text Section */}
            <VStack align="start" gap={4}>
              <Text fontSize="sm" fontWeight="bold">
                OUR JOURNEY
              </Text>
              <Text fontSize="4xl" fontWeight="bold">
                How we raised 34M
              </Text>
              <Text color="#000000" fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh.
              </Text>
              <HStack gap={8} mt={4}>
                <VStack align="center" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">
                    34M+
                  </Text>
                  <Text fontSize="sm">Donation Received</Text>
                </VStack>
                <VStack align="center" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">
                    400+
                  </Text>
                  <Text fontSize="sm">Volunteers</Text>
                </VStack>
                <VStack align="center" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">
                    20+
                  </Text>
                  <Text fontSize="sm">Care homes</Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Image Section */}
            <Box>
              <Image
                src={image}
                alt="Our Journey"
                borderRadius="lg"
                boxShadow="md"
              />
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Page2;
