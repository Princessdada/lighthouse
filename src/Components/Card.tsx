import { Box, Text, Button } from "@chakra-ui/react";

const Card = ({ title, description, image, buttonText }: any) => {
  return (
    <Box
      width={["100%", "300px"]}
      height="350px"
      boxShadow="lg"
      borderRadius="10px"
      overflow="hidden"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      textAlign="left"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      p={4}>
      <Text fontWeight="700" color="#FFFFFF" fontSize="18px" mb={2} pt={"50px"}>
        {title}
      </Text>
      <Text fontSize="14px" color="#FFFFFF" mb={4} pb={"30px"}>
        {description}
      </Text>
      <Button w={"146px"} h={"51px"} bg="#FFFFFF" color="#000" fontSize="14px">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Card;
