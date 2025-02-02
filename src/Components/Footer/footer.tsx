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
    <Box bg={"#000"} color={"#fff"} p={[6, 10, 20]} fontFamily={"Roboto"}>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 3fr 3fr"]}
        gap={[4, 6]}
        alignItems={"start"}>
        {/* Logo Section */}
        <VStack align={"start"}>
          <Text fontSize={["md", "lg"]} fontWeight={"bold"}>
            lightout/
          </Text>
        </VStack>

        {/* Links Section */}
        <Grid
          templateColumns={["1fr", "repeat(3, 1fr)"]}
          gap={[2, 4]}
          textAlign={["center", "left"]}>
          {/* Column 1 */}
          <VStack align={["center", "start"]} gap={2}>
            <Link fontSize={["sm", "md"]} fontWeight={"bold"} href="/">
              Home
            </Link>
            <Link fontSize={["sm", "md"]} href="about-us">
              About us
            </Link>
            <Link fontSize={["sm", "md"]} href="team">
              Team
            </Link>
            <Link fontSize={["sm", "md"]} href="what-we-do">
              What we do
            </Link>
            <Link fontSize={["sm", "md"]} href="contact">
              Contact
            </Link>
          </VStack>

          {/* Column 2 */}
          <VStack align={["center", "start"]} gap={2}>
            <Text fontSize={["sm", "md"]} fontWeight={"bold"}>
              More
            </Text>
            <Link fontSize={["sm", "md"]} href="">
              Projects
            </Link>
            <Link fontSize={["sm", "md"]} href="">
              Events
            </Link>
            <Link fontSize={["sm", "md"]} href="">
              Donate
            </Link>
            <Link fontSize={["sm", "md"]} href="">
              Blog
            </Link>
          </VStack>

          {/* Column 3 */}
          <VStack align={["center", "start"]} gap={2}>
            <Text fontSize={["sm", "md"]} fontWeight={"bold"}>
              Connect
            </Text>
            <Link fontSize={["sm", "md"]} href="">
              Facebook
            </Link>
            <Link fontSize={["sm", "md"]} href="">
              Instagram
            </Link>
            <Link fontSize={["sm", "md"]} href="">
              Twitter
            </Link>
            <Link fontSize={["sm", "md"]} href="">
              LinkedIn
            </Link>
          </VStack>
        </Grid>

        {/* Subscribe Section */}
        <VStack align={["center", "start"]} gap={4}>
          <Text
            fontSize={["lg", "2xl", "30px"]}
            fontWeight={700}
            textAlign={["center", "left"]}>
            Subscribe to get latest updates
          </Text>
          <Flex flexDirection={["column", "row"]} gap={[4, 2]}>
            <Input
              placeholder="Your email"
              size={"md"}
              bg={"#000"}
              color={"#fff"}
              borderBlockColor={"#EBF0F94D"}
              w={["100%", "300px", "456px"]}
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
