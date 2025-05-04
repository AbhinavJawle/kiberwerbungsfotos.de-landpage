"use client";

import { Flex, Heading, Slider, Text } from "@chakra-ui/react";
import Features from "../home/Features";
import Hero from "../home/Hero";
import Pricing from "../home/Pricing";
import FaqPage from "./FaqPage";
import GalleryPage from "./GalleryPage";
import Beispielen from "../home/Beispielen";
import Bewerbungsfotosehen from "../home/Bewerbungsfotosehen";
import Vergleichen from "../home/Vergleichen";
import { Box } from "@chakra-ui/react";
import EndCTA from "../home/EndCTA";
const HomePage = () => (
  <>
    <Flex flexDirection="column" flex="1">
      <Hero />
    </Flex>
    <Slider />
    <Beispielen />
    <Box
      mb={5}
      as="h3"
      // Removed maxWidth="rem" as it seemed incomplete/incorrect
      lineHeight={{ base: "1.1rem", sm: "1.1rem" }}
      fontSize={{ base: "0.8rem", sm: "1.1rem" }}
      fontWeight="normal"
      marginX={{ base: 5, sm: 16 }}
      textAlign="center"
      mt={5}
      // marginLeft={{ base: 5 }}
    >
      <b>1800+</b> Bewerbungsfotos für über <b>600+</b> zufriedene Kunden
      gemacht
    </Box>
    <Features />
    <Bewerbungsfotosehen />
    <Vergleichen />
    <Flex px={4} py={10} maxWidth="container.lg" width="100%" marginX="auto">
      <Pricing />
    </Flex>
    <FaqPage />
    <EndCTA />
  </>
);

export default HomePage;
