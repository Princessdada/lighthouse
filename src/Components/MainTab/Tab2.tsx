import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import icon1 from "../Icons/Icon.png";
import icon2 from "../Icons/Icon (1).png";
import icon3 from "../Icons/Icon (2).png";
import icon4 from "../Icons/Icon (4).png";
import img from "../Image/unsplash_SBIak0pKUIE.png";
import Section from "../Section";

const Tab2 = () => {
  return (
    <Container
      maxWidth="full"
      px={[4, 8, 12]}
      py={[8, 12, 16]}
      bg="#FCEDC6"
      color="#1D2130">
      <Flex direction={["column", "row"]} gap={8}>
        {/* Left Section */}
        <Box flex={[1, 3]} padding={4}>
          <Section
            subheading="What We Do"
            heading="Some services we provide for our children"
            text1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eum aut, eaque repellat sed minima."
          />
          {/* Icons and Descriptions */}
          {[
            { icon: icon4, title: "Family Support" },
            { icon: icon1, title: "Health Benefits" },
            { icon: icon2, title: "Scholarships" },
            { icon: icon3, title: "Therapy" },
          ].map((item, idx) => (
            <Box key={idx} ml={["0", "0", 65]}>
              <Flex align="center" gap={4}>
                <Image src={item.icon} alt={item.title} boxSize="24px" />
                <Heading textAlign={"left"} fontSize="lg">
                  {item.title}
                </Heading>
              </Flex>
              <Text textAlign={"left"} ml="40px" mt={2} mb={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                reprehenderit in non officia sit esse.
              </Text>
            </Box>
          ))}
        </Box>

        {/* Right Section */}
        <Box flex={[1, 2]} padding={4}>
          <Image
            src={img}
            alt="Children Services"
            borderRadius="md"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Tab2;
