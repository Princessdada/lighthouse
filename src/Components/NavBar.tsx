import { HStack, Image, Text, Button, Flex, Container } from "@chakra-ui/react";
import logo from "../Components/Image/light-out-logo-yellow.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];
  const handleDonateClick = () => {
    navigate("/donate");
  };
  return (
    <Container pl={10} pr={10}>
      <HStack px={5} py={4} justify="space-between" align="center" width="100%">
        {/* Logo */}
        <Image height="60px" src={logo} alt="Logo" />

        {/* Center: Navigation Items */}
        <Flex flex={1} justify="center" align="center">
          <HStack gap={6}>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Text
                  pl={8}
                  key={item.path}
                  cursor="pointer"
                  fontWeight={active === item.name ? "bold" : "medium"}
                  textDecoration={active === item.name ? "underline" : "none"}
                  onClick={() => setActive(item.name)}>
                  {item.name}
                </Text>
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* End: Button */}
        <Button onClick={handleDonateClick} colorScheme="blue">
          Donate
        </Button>
      </HStack>
    </Container>
  );
};

export default NavBar;
