import {
  Box,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  Button,
  Icon,
  Tooltip,
  VStack, // Import VStack
  HStack, // Import HStack
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon, QuestionOutlineIcon } from "@chakra-ui/icons"; // Import CheckIcon and QuestionOutlineIcon
import Link from "next/link"; // Import Link for buttons

// Keep CheckedListItem if used elsewhere, or integrate directly
export const CheckedListItem = ({
  children,
  tooltipLabel,
}: {
  children: React.ReactNode;
  tooltipLabel?: string;
}) => (
  <ListItem display="flex" alignItems="center">
    <ListIcon as={CheckIcon} color="green.500" mr={2} />
    <Text as="span" flex="1">
      {children}
    </Text>
    {tooltipLabel && (
      <Tooltip label={tooltipLabel} placement="top" hasArrow>
        <Icon as={QuestionOutlineIcon} color="gray.500" ml={1} cursor="help" />
      </Tooltip>
    )}
  </ListItem>
);

// Define pricing data
const pricingPlans = [
  {
    name: "Basic",
    price: "€29",
    description:
      "Erhalten Sie 40 Headshots mit 4 einzigartigen Hintergründen und Outfits.",
    features: [
      { text: "40 Headshots" },
      { text: "4 Hintergrund- & Outfit-Kombinationen", tooltip: "Info hier" },
      { text: "Hunderte von Stilen zur Auswahl" },
      { text: "4 Bearbeitungsguthaben", tooltip: "Info hier" },
      { text: "3 Stunden Bearbeitungszeit" },
    ],
    buttonText: "Jetzt Erstellen",
    isFeatured: false,
  },
  {
    name: "Professional",
    price: "€39",
    description:
      "Erhalten Sie 100 Headshots mit 10 einzigartigen Hintergründen und Outfits.",
    features: [
      { text: "100 Headshots" },
      { text: "10 Hintergrund- & Outfit-Kombinationen", tooltip: "Info hier" },
      { text: "Hunderte von Stilen zur Auswahl" },
      { text: "10 Bearbeitungsguthaben", tooltip: "Info hier" },
      { text: "2 Stunden Bearbeitungszeit" },
    ],
    buttonText: "Jetzt Erstellen",
    isFeatured: true,
  },
  {
    name: "Executive",
    price: "€59",
    description:
      "Erhalten Sie 200 Headshots mit 20 einzigartigen Hintergründen und Outfits.",
    features: [
      { text: "200 Headshots" },
      { text: "20 Hintergrund- & Outfit-Kombinationen", tooltip: "Info hier" },
      { text: "Hunderte von Stilen zur Auswahl" },
      { text: "20 Bearbeitungsguthaben", tooltip: "Info hier" },
      { text: "1 Stunde Bearbeitungszeit" },
    ],
    buttonText: "Jetzt Erstellen",
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <SimpleGrid
      width="100%"
      spacing={{ base: 4, md: 8 }}
      columns={{ base: 1, md: 3 }}
      py={10}
      px={{ base: 2, md: 4 }}
      maxWidth="container.xl" // Changed from container.xl to match parent
      mx="auto"
    >
      {pricingPlans.map((plan, index) => (
        <Box
          key={index}
          bg="white"
          borderWidth="1px"
          borderColor={plan.isFeatured ? "brand.500" : "gray.200"}
          borderRadius="xl"
          p={{ base: 4, md: 8 }} // Reverted md padding back to 8
          shadow={plan.isFeatured ? "xl" : "md"}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          transition="all 0.3s ease-in-out"
          _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
        >
          <VStack spacing={{ base: 2, md: 4 }} align="stretch" flexGrow={1}>
            {" "}
            {/* Reduced base spacing */}
            <Text fontWeight="semibold" fontSize="lg" color="gray.600">
              {plan.name}
            </Text>
            <Text
              fontWeight="black"
              fontSize={{ base: "4xl", md: "5xl" }}
              lineHeight="1"
            >
              {" "}
              {/* Reduced base font size */}
              {plan.price}
            </Text>
            <Text
              fontSize="sm"
              color="gray.500"
              minHeight={{ base: "auto", md: "3em" }}
            >
              {" "}
              {/* Adjusted minHeight for base */}
              {plan.description}
            </Text>
            <List spacing={{ base: 2, md: 3 }} pt={4}>
              {" "}
              {/* Reduced base spacing */}
              {plan.features.map((feature, fIndex) => (
                <CheckedListItem key={fIndex} tooltipLabel={feature.tooltip}>
                  {feature.text}
                </CheckedListItem>
              ))}
            </List>
          </VStack>
          <Button
            as={Link}
            href="/dashboard"
            mt={6}
            w="full"
            variant={plan.isFeatured ? "brand" : "outline"}
            colorScheme={plan.isFeatured ? undefined : "gray"}
            size={{ base: "md", md: "lg" }} // Make button size responsive
          >
            {plan.buttonText}
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Pricing;
