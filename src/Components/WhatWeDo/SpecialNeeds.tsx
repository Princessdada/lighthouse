import { Box, HStack, Grid, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";

interface SpecialNeedsProps {
  icon: string;
  title: string;
  description: string;
}
const SpecialNeeds: React.FC<SpecialNeedsProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Box bg={"#FCEDC6"} color={"#1D2130"}>
      <HStack gap={4} align="start" p={4} borderRadius="md">
        {/* Icon Section */}
        <Box p={3} borderRadius="md">
          <Image src={icon} boxSize={8} alt={title} />
        </Box>

        {/* Text Section */}
        <VStack align="start" gap={1}>
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SpecialNeeds;
