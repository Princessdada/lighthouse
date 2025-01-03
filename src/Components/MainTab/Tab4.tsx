import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

const Tab4 = () => {
  return (
    <Box bg="#000" color="#FFF" py={10} px={6}>
      <Container maxW="container.xl" padding={"40px"}>
        <SimpleGrid columns={[1, 1, 2]} gap={10}>
          {/* Left Section */}
          <Stack gap={6}>
            <Heading fontSize={["2xl", "3xl", "4xl"]}>
              How we spend your donations and where it goes
            </Heading>
            <Text color="#AAA" fontSize="lg">
              We understand that when you make a donation, you want to know
              exactly where your money is going, and we pledge to be
              transparent.
            </Text>

            <SimpleGrid columns={[2, 2, 3]} gap={4}>
              <Flex align="center" gap={2}>
                <Box w={4} h={4} bg="#A3E635" borderRadius="50%" />
                <Text fontSize="sm">40% child care home</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Box w={4} h={4} bg="#A78BFA" borderRadius="50%" />
                <Text fontSize="sm">35% cleanliness program</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Box w={4} h={4} bg="#FACC15" borderRadius="50%" />
                <Text fontSize="sm">10% excursions</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Box w={4} h={4} bg="#FEF3C7" borderRadius="50%" />
                <Text fontSize="sm">10% helping people</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Box w={4} h={4} bg="#F472B6" borderRadius="50%" />
                <Text fontSize="sm">5% feeding the poor</Text>
              </Flex>
            </SimpleGrid>
          </Stack>

          {/* Right Section - Donut Chart */}
          <Flex justify="center" align="center">
            <Box
              as="svg"
              viewBox="0 0 36 36"
              width="200px"
              height="200px"
              transform="rotate(-90deg)">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#A3E635"
                strokeWidth="4"
                strokeDasharray="40,60"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="4"
                strokeDasharray="35,65"
                strokeDashoffset="-40"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#FACC15"
                strokeWidth="4"
                strokeDasharray="10,90"
                strokeDashoffset="-75"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#FEF3C7"
                strokeWidth="4"
                strokeDasharray="10,90"
                strokeDashoffset="-85"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#F472B6"
                strokeWidth="4"
                strokeDasharray="5,95"
                strokeDashoffset="-95"
              />
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Tab4;
