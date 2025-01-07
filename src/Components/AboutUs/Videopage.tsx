import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import img from "../Image/unsplash_SBIak0pKUIE.png";
const Videopage = () => {
  return (
    <Box p={8} bg="#FCEDC6">
      <AspectRatio
        ratio={16 / 9}
        borderRadius="20px"
        maxW="1280px"
        h={"300px"}
        mx="auto">
        <iframe
          title="NGO Video"
          src="https://www.youtube.com/embed/iXsM6NkEmFc&list=PL4cUxeGkcC9hcnIeryurNMMcGBHp7AYlP"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
};

export default Videopage;
