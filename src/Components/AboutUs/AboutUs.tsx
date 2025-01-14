import React from "react";
import { Box } from "@chakra-ui/react";

import img1 from "../Image/Image (6).png";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Team, { TeamMember } from "./Team";
import Tab5 from "../MainTab/Tab5";
import Footer from "../Footer/footer";

const teamMembers: TeamMember[] = [
  {
    name: "Leonard John Davies",
    role: "Cofounder, CEO",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    image: img1,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  },
];

const AboutUs = () => {
  return (
    <Box fontFamily={"Roboto"}>
      <Page1></Page1>
      <Page2></Page2>
      <Team members={teamMembers}></Team>
      <Tab5></Tab5>
      <Footer></Footer>
    </Box>
  );
};

export default AboutUs;
