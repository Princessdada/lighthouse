import {
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import SocialLinks from "../SocialLinks/SocialLinks";
import ContactForm from "./ContactForm";
import Map from "./Map";
import Footer from "../Footer/footer";

const Contact = () => {
  return (
    <>
      <Box p={8} bg="#FCEDC6" color={"#1D2130"}>
        <Grid
          p={"20px"}
          templateColumns={["1fr", "1fr", "0.5fr 2fr 2fr"]}
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
            <Text pb={"20px"} fontSize="sm" fontWeight="bold">
              Contact us
            </Text>
            <Heading
              fontSize="57px"
              fontWeight="bold"
              lineHeight={"67px"}
              pb={"20px"}>
              We'd love to hear from you
            </Heading>
            <Text fontSize={"16px"} fontWeight={"400"} pb={"28px"}>
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </Text>
          </VStack>

          {/* Third Column */}
          <VStack align="start">
            <Heading fontWeight={700}>Let's Talk!</Heading>
            <HStack pb={"20px"}>
              <Text fontSize="sm">hello@largerthani.com</Text>
              <Text fontSize="sm">+234 09012346514</Text>
            </HStack>
            <Heading fontWeight={700}>Headoffice</Heading>

            <Text fontSize="sm">8 Brewery Drive, Lagos,</Text>
            <Text pb={"20px"} fontSize="sm">
              {" "}
              Nigeria.
            </Text>

            <Heading fontWeight={700}>Branch Office</Heading>

            <Text fontSize="sm">Opp Opolo round about, Yenagoa, Bayelsa,</Text>
            <Text pb={"20px"} fontSize="sm">
              Nigeria
            </Text>
          </VStack>
        </Grid>
      </Box>
      <ContactForm></ContactForm>
      <Map></Map>
      <Footer></Footer>
    </>
  );
};

export default Contact;
