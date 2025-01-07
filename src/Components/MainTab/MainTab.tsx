import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import img1 from "../Image/BG Image.png";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import Footer from "../Footer/footer";

const MainTab = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlay = () => {
    const videoElement = document.getElementById(
      "mainVideo"
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
      setVideoPlaying(true);
    }
  };

  return (
    <>
      <Container maxW="full" p={0} position="relative">
        {/* Background Image */}
        <Image src={img1} alt="Background" width="100%" height="auto" />

        {/* Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.4)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          zIndex={1}
          textAlign="center"
          px={[4, 8]}>
          <Text color="white" fontSize={["xl", "3xl"]} fontWeight="bold" mb={4}>
            Watch Our Story
          </Text>
          <Button colorScheme="red" size="lg" onClick={handlePlay} zIndex={2}>
            ▶ Play
          </Button>
        </Box>

        {/* Video */}
        {videoPlaying && (
          <video
            id="mainVideo"
            src=""
            width="100%"
            height="100%"
            controls
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              objectFit: "cover",
            }}
          />
        )}
      </Container>
      {/* Page 2 */}
      <Tab1 />
      {/* Page 3 */}
      <Tab2 />
      {/* Tab 4 */}
      <Tab3></Tab3>
      {/* Tab 5 */}
      <Tab4></Tab4>
      {/* Tab 6 */}
      <Tab5></Tab5>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainTab;
