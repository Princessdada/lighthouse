import { Container, Flex } from "@chakra-ui/react";
import Section from "../Section";
import Card from "../Card";
import img1 from "../Image/BG Image.png";
import { useHandleReadMore } from "../Hooks/useHandleReadMore";

const Tab3 = () => {
  const readmore = useHandleReadMore();
  const cardData = [
    {
      title: "Temple Secondary School",
      description: "Ensure sustainable consumption and production patterns.",
      image: img1,
      buttonText: "Learn More",
      onClick: readmore,
    },
    {
      title: "Climate Action & Recycle Campaign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: img1,
      buttonText: "Learn More",
      onClick: readmore,
    },
    {
      title: "Good Health and well-being promotion",
      description:
        "Ensure healthy lives and promote well-being for all at all ages..",
      image: img1,
      buttonText: "Learn More",
      onClick: readmore,
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
          heading="We are creating a place where youths can thrive"
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
            onClick={card.onClick}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Tab3;
