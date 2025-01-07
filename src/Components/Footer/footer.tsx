import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Grid,
  VStack,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  const handleSubscribe = () => {
    alert("Subscribed successfully!");
  };
  return (
    <Box bg={"#000"} color={"#fff"} p={20}>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "1fr 3fr 3fr"]}
        gap={6}
        alignItems={"start"}>
        {/* Logo Section */}
        <VStack align={"start"}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            lightout/
          </Text>
        </VStack>

        {/* Links Section */}
        <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
          {/* Column 1 */}
          <VStack align={"start"} gap={2}>
            <Link fontSize={"sm"} fontWeight={"bold"} href="/">
              Home
            </Link>
            <Link fontSize={"sm"} href="about-us">
              About us
            </Link>
            <Link fontSize={"sm"} href="team">
              Team
            </Link>
            <Link fontSize={"sm"} href="what-we-do">
              What we do
            </Link>
            <Link fontSize={"sm"} href="contact">
              Contact
            </Link>
          </VStack>

          {/* Column 2 */}
          <VStack align={"start"} gap={2}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              More
            </Text>
            <Link fontSize={"sm"} href="">
              Projects
            </Link>
            <Link fontSize={"sm"} href="">
              Events
            </Link>
            <Link fontSize={"sm"} href="">
              Donate
            </Link>
            <Link fontSize={"sm"} href="">
              Blog
            </Link>
          </VStack>

          {/* Column 3 */}
          <VStack align={"start"} gap={2}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Connect
            </Text>
            <Link fontSize={"sm"} href="">
              Facebook
            </Link>
            <Link fontSize={"sm"} href="">
              Instagram
            </Link>
            <Link fontSize={"sm"} href="">
              Twitter
            </Link>
            <Link fontSize={"sm"} href="">
              LinkedIn
            </Link>
          </VStack>
        </Grid>

        {/* Subscribe Section */}
        <VStack align={"start"} gap={4}>
          <Text fontSize={"30px"} fontWeight={700}>
            Subscribe to get latest updates
          </Text>
          <Flex>
            <Input
              placeholder="Your email"
              size={"md"}
              bg={"#000"}
              color={"#fff"}
              borderBlockColor={"#EBF0F94D"}
              w={"456px"}
              h={"64px"}
              borderRadius={"md"}
            />
            <Button
              h={"64px"}
              bg={"#fff"}
              color={"#000"}
              _hover={{ bg: "#E5B83C" }}
              onClick={handleSubscribe}>
              Subscribe
            </Button>
          </Flex>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Footer;
