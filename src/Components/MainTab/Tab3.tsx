import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo.png";
import React from "react";
import img1 from "../Image/BG Image.png";

const Tab3 = () => {
  return (
    <Container bg="#FFF" color="#000" maxW="full" p={8}>
      {/* Header Section */}
      <Flex pl={"125px"} direction="column" mb={12}>
        <Flex align="center" gap={6}>
          <Box
            ml={4}
            height="2px"
            width="72px"
            bg="#1D2130"
            borderRadius="full"
          />
          <Text fontFamily="Roboto" fontWeight={700} fontSize="16px">
            PROJECTS WE HAVE DONE
          </Text>
        </Flex>
        <Box mt={4}>
          <Heading
            ml={"120px"}
            lineHeight="1.2"
            fontSize={["xl", "3xl", "4xl"]}
            width={"50%"}
            justifyContent={"center"}
            textAlign={"left"}>
            We are creating a place where children with special needs can thrive
          </Heading>
        </Box>
      </Flex>

      {/* Horizontal Cards Section */}
      <Flex justify="center" gap={6} wrap="wrap" mt="20px">
        {/* Card 1 */}
        <Box
          width="300px"
          height="300px"
          boxShadow="lg"
          borderRadius="10px"
          overflow="hidden"
          textAlign="center"
          backgroundImage={`url(${img1})`}
          backgroundSize="cover"
          backgroundPosition="center"
          justifyContent="space-between">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            flex="1"
            p={4}>
            <Text
              fontWeight="700"
              color="#FFFFFF"
              fontSize="18px"
              mb={2}
              textAlign="left"
              pt={"50px"}>
              Mission smile 1k: Outdoor charity
            </Text>
            <Text
              pb={"30px"}
              textAlign="left"
              fontSize="14px"
              color="#FFFFFF"
              mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </Text>
            <Button
              alignSelf="flex-start"
              bg="#FFFFFF"
              color="#000"
              fontSize="14px">
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Card 2 */}
        <Box
          width="300px"
          height="300px"
          boxShadow="lg"
          borderRadius="10px"
          overflow="hidden"
          textAlign="center"
          backgroundImage={`url(${img1})`}
          backgroundSize="cover"
          backgroundPosition="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            flex="1"
            p={4}>
            <Text
              pt={"50px"}
              textAlign="left"
              fontWeight="700"
              color="#FFFFFF"
              fontSize="18px"
              mb={2}>
              Weekly excursions
            </Text>
            <Text
              pb={"30px"}
              textAlign="left"
              fontSize="14px"
              color="#FFFFFF"
              mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </Text>
            <Button bg="#FFFFFF" color="#000" fontSize="14px">
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Card 3 */}
        <Box
          width="300px"
          height="300px"
          boxShadow="lg"
          borderRadius="10px"
          overflow="hidden"
          textAlign="center"
          backgroundImage={`url(${img1})`}
          backgroundSize="cover"
          backgroundPosition="center"
          flexDirection="column"
          justifyContent="flex-end">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            flex="1"
            p={4}>
            <Text
              pt={"50px"}
              textAlign="left"
              fontWeight="700"
              fontSize="18px"
              color="#FFFFFF"
              mb={2}
              flexDirection="column"
              alignItems="flex-start">
              Monthly public awareness
            </Text>
            <Text
              pb={"30px"}
              textAlign="left"
              fontSize="14px"
              color="#FFFFFF"
              mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </Text>
            <Button
              bg="#FFFFFF"
              color="#000"
              fontSize="14px"
              alignSelf="flex-start">
              Learn More
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Tab3;
