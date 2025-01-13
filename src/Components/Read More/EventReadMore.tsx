import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import img from "../Image/unsplash_SBIak0pKUIE.png";
import Footer from "../Footer/footer";
const EventReadMore = () => {
  return (
    <>
      <Container
        bg={"#FCEDC6"}
        p={8}
        color="#1D2130"
        display="flex"
        justifyContent="center"
        minH="50vh">
        <Box w={"700px"} display="flex" justifyContent="center">
          <Heading
            fontWeight={700}
            fontSize={["32px", "36px", "48px"]}
            lineHeight={["40px", "50px", "57.6px"]}
            fontFamily="Roboto">
            A day with our wonderful children
          </Heading>
        </Box>
      </Container>
      {/* // Section 2 */}
      <Container
        bg={"#fff"}
        p={8}
        color="#1D2130"
        display="flex"
        flexDirection="column"
        alignItems="center">
        {/* Main Content */}
        <Box
          w={"700px"}
          display="flex"
          flexDirection="column"
          justifyContent="center">
          <Heading
            fontWeight={700}
            fontSize={["32px", "36px", "48px"]}
            lineHeight={["40px", "50px", "57.6px"]}
            fontFamily="Roboto"
            pb={10}
            pt={5}>
            About
          </Heading>
          <Text
            pb={10}
            textAlign={"left"}
            color={"#525560"}
            fontWeight={400}
            fontSize={"16px"}
            lineHeight={"25.6px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto
            velit repellendus magni modi quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error est ad iure suscipit recusandae
            quia magni. Sunt repellendus tempore nobis impedit, amet
            perspiciatis consequuntur exercitationem numquam saepe voluptates at
            maiores?
          </Text>
          <Text
            pb={10}
            textAlign={"left"}
            color={"#525560"}
            fontWeight={400}
            fontSize={"16px"}
            lineHeight={"25.6px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto
            velit repellendus magni modi quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error est ad iure suscipit recusandae
            quia magni. Sunt repellendus tempore nobis impedit, amet
            perspiciatis consequuntur exercitationem numquam saepe voluptates at
            maiores?
          </Text>
          {/* Image Section */}
          <Box display={"flex"} justifyContent={"center"}>
            <Image
              h={"300px"}
              w={"680px"}
              src={img}
              alt="Charity outreach"
              borderRadius="md"
              pb={10}
            />
          </Box>
          <Text
            pb={10}
            textAlign={"left"}
            color={"#525560"}
            fontWeight={400}
            fontSize={"16px"}
            lineHeight={"25.6px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto
            velit repellendus magni modi quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error est ad iure suscipit recusandae
            quia magni. Sunt repellendus tempore nobis impedit, amet
            perspiciatis consequuntur exercitationem numquam saepe voluptates at
            maiores?
          </Text>
        </Box>

        {/* Events Section */}
        <Box width="700px">
          <Heading
            fontWeight={700}
            fontSize={["20px", "30px", "40px"]}
            lineHeight={["40px", "50px", "57.6px"]}
            fontFamily="Roboto"
            pb={5}>
            Other Events
          </Heading>
          <Grid templateColumns="1fr" gap={[4, 6, 8]} alignItems="center">
            {/* Event 1 */}
            <Box
              bg={"#F2C94C"}
              color={"#000"}
              borderRadius={"md"}
              p={[4, 6]}
              boxShadow={"lg"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={["column", "row"]}>
              <Flex
                alignItems={"center"}
                gap={[2, 4]}
                flexDirection={["column", "row"]}>
                <Box textAlign={"center"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    13
                  </Text>
                  <Text fontSize={"sm"}>APR</Text>
                </Box>
                <Box>
                  <Text
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                    fontWeight={"semibold"}>
                    Next Events
                  </Text>
                  <Text fontSize={["md", "lg"]} fontWeight={"bold"}>
                    A day with our wonderful children
                  </Text>
                </Box>
              </Flex>
              <Button
                mt={[4, 0]}
                size={["md", "lg"]}
                bg={"#FFF"}
                color={"#000"}
                borderRadius={"full"}
                boxShadow={"md"}
                _hover={{ bg: "#E5E5E5" }}>
                →
              </Button>
            </Box>

            {/* Event 2 */}
            <Box
              bg={"#F2C94C"}
              color={"#000"}
              borderRadius={"md"}
              p={[4, 6]}
              boxShadow={"lg"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={["column", "row"]}>
              <Flex
                alignItems={"center"}
                gap={[2, 4]}
                flexDirection={["column", "row"]}>
                <Box textAlign={"center"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    25
                  </Text>
                  <Text fontSize={"sm"}>APR</Text>
                </Box>
                <Box>
                  <Text
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                    fontWeight={"semibold"}>
                    Next Events
                  </Text>
                  <Text fontSize={["md", "lg"]} fontWeight={"bold"}>
                    Seminar: Caring for children with autism
                  </Text>
                </Box>
              </Flex>
              <Button
                mt={[4, 0]}
                size={["md", "lg"]}
                bg={"#FFF"}
                color={"#000"}
                borderRadius={"full"}
                boxShadow={"md"}
                _hover={{ bg: "#E5E5E5" }}>
                →
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>

      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
};

export default EventReadMore;
