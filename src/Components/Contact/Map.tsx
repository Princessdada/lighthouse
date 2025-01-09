import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

const Map: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  const handleMapLoad = () => {
    console.log("Map has loaded successfully!");
    setMapLoaded(true);
  };

  return (
    <Box margin="auto" bg={"#fff"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648015965!2d3.119144065630587!3d6.548028243795774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1736447539328!5m2!1sen!2sng"
        width="100%"
        height="400px"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
        onLoad={handleMapLoad}></iframe>
      {mapLoaded && <p style={{ textAlign: "center" }}>Map is loaded!</p>}
    </Box>
  );
};

export default Map;
