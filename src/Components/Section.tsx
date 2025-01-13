import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

interface SectionProps {
  subheading?: string;
  heading?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonBg?: string;
}

const Section: React.FC<SectionProps> = ({
  subheading,
  heading,
  text1,
  text2,
  text3,
  buttonText,
  onButtonClick,
  buttonBg = "#F2C94C",
}) => {
  return (
    <Box textAlign={["left"]} padding={10}>
      <Flex align="center" gap={4}>
        <Box height="2px" width="72px" bg="#1D2130" borderRadius="full" />
        <Text fontFamily="Roboto" fontWeight={700} fontSize="16px">
          {subheading}
        </Text>
      </Flex>

      <Heading
        pt={4}
        pb={4}
        fontWeight={700}
        fontSize={["32px", "36px", "48px"]}
        lineHeight={["40px", "50px", "57.6px"]}
        fontFamily="Roboto">
        {heading}
      </Heading>

      {text1 && (
        <Text
          color={"#525560"}
          fontWeight={400}
          fontSize={"16px"}
          lineHeight={"25.6px"}>
          {text1}
        </Text>
      )}

      {text2 && (
        <Text
          color={"#525560"}
          fontWeight={400}
          fontSize={"16px"}
          pt={[2, 4, 5]}
          pb={[4, 6, 10]}>
          {text2}
        </Text>
      )}
      {text3 && (
        <Text color={"#525560"} fontWeight={400} fontSize={"16px"}>
          {text3}
        </Text>
      )}

      {buttonText && (
        <Button w={"142px"} h={"51px"} bg={buttonBg} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default Section;
