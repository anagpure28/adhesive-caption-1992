import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import M2 from "../Videos/M2.mp4";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const RelaxMusicPage = () => {
  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <video autoPlay loop width="80%" style={{ margin: "auto" }}>
          <source src={M2} type="video/mp4" />
        </video>
      </div>
      <Container maxW={"8xl"} p="12">
        <Heading as="h1">Relaxation Music</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://2.bp.blogspot.com/-w4XrUT0cIbM/VyB_R7NGh0I/AAAAAAAAASo/Tu3FJmYGBLgytyOd-vKO10YDSt-fYJargCKgB/s1600/om%2B005.jpg"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "1", sm: "0" }}
          >
            <Heading>
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Relax your Mind with "OM Mantra"
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              textAlign={"justify"}
            >
              A sensation of vibration is experienced during audible ‘OM’
              chanting. This has the potential for vagus nerve stimulation
              through its auricular branches and the effects on the brain
              thereof. The neurohemodynamic correlates of ‘OM’ chanting are yet
              to be explored.
            </Text>
            <BlogAuthor
              name="Aniket Nagpure"
              date={new Date("2023-08-05T19:01:27Z")}
            />
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://play-lh.googleusercontent.com/A1AOfjwLo-9ioTKgrAjjjnI8NRda5Y3NrBG87aBYs3s8qQhByJnDeoZ7SEx9BMhaXGui=w240-h480-rw"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>
              <Heading fontSize="xl" marginTop="4">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2" textAlign={"justify"}>
                Om or Aum is the most powerful mantra. It’s not just the sound,
                but the vibrations that impact the mind, body and soul, making
                way for a happy, blissful and calm state. Om is an ancient,
                sacred word from the eastern spiritual traditions of Yoga,
                Hinduism, Buddhism, and Jainism. Only at higher frequencies can
                we learn to let go of desires and be happy with nature. In
                today’s materialistic world, it is so easy to get caught up in
                stress, fear, anxiety, worry, etc.
              </Text>
              <BlogAuthor
                name="Ritesh Raut"
                date={new Date("2023-08-05T19:01:27Z")}
              />
            </Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <Text as="p" fontSize="lg" textAlign={"justify"}>
          Om is the highest positive vibration. It is a universal syllable, and it is cosmic energy. According to Vedas, and the Big Bang theory - the whole universe was created by the sound Om (aum). Chanting Om raises the vibrations of an individual, not just in body but in the overall consciousness of one's soul and mind. Chanting Om allows you to align with the whole.
          </Text>
          <Text as="p" fontSize="lg" textAlign={"justify"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
            pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
            imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
            sapien. Suspendisse placerat vulputate posuere. Curabitur neque
            tortor, mattis nec lacus non, placerat congue elit.
          </Text>
          <Text fontSize={"25px"} fontWeight={"bold"}>Benefits</Text>
          <Text as="p" fontSize="lg" textAlign={"justify"}>
              1. Chanting Om raises the vibrations from within, allowing you to feel happier and blissful.<br /> 
              2. It clears out negative energy, purifying the environment, including people around you.<br /> 
              3. It provides an instant feeling of calm. <br />
              4. The vibrations help balance moods and emotions. <br />
              5. Purifies and improves your aura. <br />
              6. It has self-healing powers which improve immunity and strength. <br />
              7. It makes you calmer, happier and healthier. <br />
              8. It improves concentration, memory and focus. <br />
              9. It reduces blood pressure and maintains a healthy rhythmic heartbeat.<br />
              10. It has a profound impact on reducing stress and anxiety. It eliminates worries from the mind. <br />
              11. Improves imagination and creativity. <br />
              12. You will soon begin to feel the subtle, pure and strong energy within you. Any heaviness, negativity, imbalance and confusion will begin to subside. <br />
          </Text>
          <Text fontSize={"25px"} fontWeight={"bold"}>What research says about Om chanting</Text>
          <Text as="p" fontSize="lg" textAlign={"justify"}>          
            Several studies have deep-dived into the physical and mental health benefits of chanting Om. Some studies are offering insights into how the mantra benefits the mind and body. One such study, published in the International Journal of Yoga Therapy, looked at how Om chanting might be connected to the vagus nerve. This offers insight into how chanting can retune the nervous system by activating the vagus nerve and balancing the parasympathetic nervous system. During Om chanting the vibration felt in the head and ears can be linked to the vagus nerve which has auricular (ear) branches. Therefore, this study hypothesized that chanting Om might stimulate the vagus nerve, producing a similar deactivation of the limbic system. 
            This is an important factor as low vagal tone is associated with a weak ability to deal with stress, poor digestion, elevated heart rate, and unstable moods. Stimulating the vagus nerve is good for our whole system. 
            The National Journal of Physiology, Pharmacy and Pharmacology published a study that found five minutes of Om chanting resulted in “highly significant” reduction in blood pressure and pulse rate in participants with hypertension. It was concluded that chanting Om can be a supportive therapy for hypertension patients. 
            Regular chanting helps you stay healthy - mentally, emotionally, physiologically and psychologically. It improves your inclination towards spirituality, making you a more positive, optimistic and calm person. The practice is unlike any other meditation practice. It is transformative in a fascinating and powerful way. You can chant the mantra silently or aloud. You can also chant on your own, or with a group. In fact, when you chant with a group the vibrations produced are outstanding and unbelievable. The soothing and mesmerizing effect will immediately make you feel relaxed and calm. So join the best online yoga classes and over time, you will feel a dramatic shift in your mind-body-spirit balance and connection.
          </Text>
        </VStack>
      </Container>
    </div>
  );
};

export default RelaxMusicPage;
