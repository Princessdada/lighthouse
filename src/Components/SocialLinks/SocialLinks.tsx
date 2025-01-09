import { HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  const socialMedia = [
    { name: "facebook", url: "https://facebook.com", icon: FaFacebook },
    { name: "twitter", url: "https://twitter.com", icon: FaTwitter },
    { name: "linkedin", url: "https://linkedin.com", icon: FaLinkedin },
  ];

  return (
    <HStack gap={4} mt={4}>
      {socialMedia.map((social) => (
        <Link
          as="a"
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer">
          <Icon as={social.icon} boxSize={6} />
        </Link>
      ))}
    </HStack>
  );
};

export default SocialLinks;
