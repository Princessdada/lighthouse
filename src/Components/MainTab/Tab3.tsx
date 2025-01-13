import { Container, Flex } from "@chakra-ui/react";
import Section from "../Section";
import Card from "../Card";
import img1 from "../Image/BG Image.png";

const Tab3 = () => {
  const cardData = [
    {
      title: "Mission smile 1k: Outdoor charity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: img1,
      buttonText: "Learn More",
    },
    {
      title: "Weekly excursions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: img1,
      buttonText: "Learn More",
    },
    {
      title: "Monthly public awareness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: img1,
      buttonText: "Learn More",
    },
  ];

  return (
    <Container bg="#FFF" color="#000" maxW="full" p={8}>
      {/* Header Section */}
      <Flex
        pl={["0px", "0px", "125px"]}
        alignItems="flex-start"
        w={["100%", "100%", "740px"]}
        direction="column"
        mb={12}>
        <Section
          subheading="PROJECTS WE HAVE DONE"
          heading="We are creating a place where children with special needs can thrive"
        />
      </Flex>

      {/* Horizontal Cards Section */}
      <Flex
        justify="center"
        gap={6}
        wrap="wrap"
        mt="20px"
        direction={["column", "row"]}>
        {cardData.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText={card.buttonText}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Tab3;
