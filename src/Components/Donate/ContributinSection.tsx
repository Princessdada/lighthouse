import React from "react";
import {
  Box,
  Text,
  Flex,
  Tabs,
  Grid,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";

const ContributionSection = () => {
  return (
    <>
      <Box
        bg={"#fff"}
        color={"#525560"}
        w={"100%"}
        borderBottom="1px solid #E5E5E5">
        <Box p="50px" w="100%">
          <Flex mt={"30px"}>
            <Grid templateColumns="1fr 1fr " w="100%" gap={10}>
              <VStack ml={"30px"} align={"start"} m={"10px"}>
                <Heading
                  color={"#1D2130"}
                  fontSize="48px"
                  fontWeight="700"
                  lineHeight={"57.6px"}
                  mb={4}>
                  How you can contribute to caring for our kids
                </Heading>
                <Text fontSize="16px" mb={20} mr={10}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </Text>
              </VStack>
              <HStack align={"start"} m={"10px"} mr={10}>
                <Tabs.Root defaultValue="overview">
                  <Tabs.List>
                    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                    <Tabs.Trigger value="impact">impact</Tabs.Trigger>
                    <Tabs.Trigger value="What you get">
                      What you get
                    </Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="overview">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium commodi maiores perspiciatis eos officia. Nisi
                    eligendi temporibus velit illum blanditiis.
                  </Tabs.Content>
                  <Tabs.Content value="impact">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum architecto assumenda eius officiis iusto autem,
                    dolorum id cupiditate quo voluptatum?
                  </Tabs.Content>
                  <Tabs.Content value="What you get">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere temporibus deleniti ullam explicabo quidem
                    consectetur molestiae debitis reprehenderit sunt.
                    Dignissimos?
                  </Tabs.Content>
                </Tabs.Root>
              </HStack>
            </Grid>
          </Flex>
        </Box>
      </Box>
      {/* // Section 2 */}
      <Box bg={"#fff"} color={"#525560"} p="70px" w="100%">
        <Flex>
          <Grid templateColumns="1fr 1fr 1fr" w="100%" gap={12}>
            <Heading
              color={"#1D2130"}
              fontSize="48px"
              fontWeight="700"
              lineHeight={"57.6px"}
              mb={4}>
              How we use your donation
            </Heading>

            {/* Left Column */}
            <Text flex={1} fontSize="16px" mr={10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Nunc ut sem vitae risus tristique posuere.
            </Text>

            {/* Right Column */}
            <Text flex={1} fontSize="16px" mr={10}>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et
              justo cursus id rutrum lorem imperdiet.
            </Text>
          </Grid>
        </Flex>
      </Box>
    </>
  );
};

export default ContributionSection;
