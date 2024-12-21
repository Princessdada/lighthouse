import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import icon1 from "../Icons/Icon.png";
import icon2 from "../Icons/Icon (1).png";
import icon3 from "../Icons/Icon (2).png";
import icon4 from "../Icons/Icon (4).png";
import img from "../Image/unsplash_SBIak0pKUIE.png";

const Tab2 = () => {
  return (
    <Container
      maxWidth="full"
      px={[4, 8, 12]} // Adjust padding for responsiveness
      py={[8, 12, 16]}
      bg="#FCEDC6"
      color="#1D2130">
      <Flex
        direction={["column", "row"]} // Column on mobile, row on larger screens
        gap={8}>
        {/* Left Section */}
        <Box flex={[1, 3]} padding={4}>
          <Flex align="center" gap={4}>
            <Box height="2px" width="72px" bg="#1D2130" borderRadius="full" />
            <Text fontFamily="Roboto" fontWeight={700} fontSize="16px">
              What We Do
            </Text>
          </Flex>
          <Box mt={4}>
            <Heading
              lineHeight="1.2"
              fontSize={["2xl", "3xl", "4xl"]} // Adjust font size for responsiveness
            >
              Some services we provide for our children
            </Heading>
            <Text fontSize={["sm", "md"]} mt={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              eum aut, eaque repellat sed minima.
            </Text>
          </Box>
          {/* Icons and Descriptions */}
          {[
            { icon: icon4, title: "Family Support" },
            { icon: icon1, title: "Health Benefits" },
            { icon: icon2, title: "Scholarships" },
            { icon: icon3, title: "Therapy" },
          ].map((item, idx) => (
            <Box mt={6} key={idx}>
              <Flex align="center" gap={4}>
                <Image src={item.icon} alt={item.title} boxSize="24px" />
                <Heading fontSize="lg">{item.title}</Heading>
              </Flex>
              <Text ml="40px" mt={2}>
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
