import React from "react";
import {
  Box,
  List,
  ListItem,
  Image,
  Container,
  Text,
  Heading,
  Grid,
} from "@chakra-ui/react";
import Section from "../Section";

import img from "../Image/Image (4).png";
import SpecialNeeds from "../WhatWeDo/SpecialNeeds";
import { services } from "../WhatWeDo/WhatWeDo";

import Footer from "../Footer/footer";
import Tab5 from "../MainTab/Tab5";
import Tab3 from "../MainTab/Tab3";
const ReadMore = () => {
  return (
    <>
      <Container
        bg="white"
        p={8}
        color="#1D2130"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="100vh">
        <Box
          w={"800px"}
          display="flex"
          flexDirection="column"
          justifyContent="center">
          {/* First Section */}
          <Section
            subheading="OUR PROJECT"
            heading="Mission Smile 1k Outdoor charity outreach"
            text1="Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna eget bibendum amet, nisi eu id."
            text3="Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est."
            text2="Vivamus at diam nunc non ornare. Sed ultrices pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras."
          />
          {/* Image Section */}
          <Box display={"flex"} justifyContent={"center"}>
            <Image
              h={"300px"}
              w={"728px"}
              src={img}
              alt="Charity outreach"
              borderRadius="md"
            />
          </Box>
          {/* Bulleted List Section */}

          <Box pt={4} justifyContent={"center"}>
            <Heading
              pt={4}
              pb={4}
              fontWeight={700}
              fontSize={["32px", "36px", "48px"]}
              lineHeight={["40px", "50px", "57.6px"]}
              fontFamily="Roboto">
              Some Cool Heading
            </Heading>
            <Text
              color={"#525560"}
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"25.6px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              iusto velit repellendus magni modi quis. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Error est ad iure suscipit
              recusandae quia magni. Sunt repellendus tempore nobis impedit,
              amet perspiciatis consequuntur exercitationem numquam saepe
              voluptates at maiores?
            </Text>
            <List.Root gap={3} p={2} fontWeight={700}>
              <List.Item>
                Posuere sed pulvinar enim faucibus justo, cursus.
              </List.Item>
              <List.Item>
                In diam facilisis at sit convallis blandit in.
              </List.Item>
              <List.Item>
                Maecenas odio orci lectus urna ante consequat erat non morbi.
              </List.Item>
            </List.Root>
            <Text
              color={"#525560"}
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"25.6px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              iusto velit repellendus magni modi quis. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Error est ad iure suscipit
              recusandae quia magni. Sunt repellendus tempore nobis impedit,
              amet perspiciatis consequuntur exercitationem numquam saepe
              voluptates at maiores?
            </Text>
          </Box>
        </Box>
      </Container>

      {/* Section 2 */}
      <Container
        bg={"#FCEDC6"}
        p={8}
        color="#1D2130"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="50vh">
        <Box
          w={"800px"}
          display="flex"
          flexDirection="column"
          justifyContent="center">
          <Grid templateColumns={["1fr", "1fr 1fr", "repeat(2, 1fr)"]} gap={5}>
            {services.map((service, index) => (
              <SpecialNeeds
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </Grid>
        </Box>
      </Container>
      {/* Remaining sections */}
      <Tab3></Tab3>
      <Tab5></Tab5>
      <Footer></Footer>
    </>
  );
};

export default ReadMore;
