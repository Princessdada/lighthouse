import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Link,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { LuFacebook, LuTwitter, LuLinkedin } from "react-icons/lu";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
};

type TeamProps = {
  members: TeamMember[];
};

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <Box p={10} textAlign="center" bg={"#fff"} color={"#1D2130"}>
      <Heading as="h2" size="xl" mb={4}>
        Meet our team
      </Heading>
      <Text fontSize="lg" mb={8}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </Text>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(4, 1fr)"]} gap={6}>
        {members.map((member, index) => (
          <Box key={index} overflow="hidden" p={4} textAlign="center">
            <Image src={member.image} alt={member.name} mx="auto" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {member.name}
            </Heading>
            <Text fontSize="sm" mb={4}>
              {member.role}
            </Text>
            <Box display="flex" justifyContent="center" gap={4}>
              {/* <IconButton
                as="a"
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                icon={<LuFacebook />}
                size="lg"
                variant="ghost"
              />
              <IconButton
                as="a"
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                icon={<LuTwitter />}
                size="lg"
                variant="ghost"
              />
              <IconButton
                as="a"
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                icon={<LuLinkedin />}
                size="lg"
                variant="ghost"
              /> */}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
