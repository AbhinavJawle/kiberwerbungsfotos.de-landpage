import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react"; // Import Flex
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

// Use the same list of images as in Beispielen.tsx
const imageFiles = [
  "18160188-0.jpg",
  "18160203-0.jpg",
  "18611192-0.jpg",
  "18611194-0.jpg",
  "18611231-0.jpg",
  "18611282-0.jpg",
  "18611295-0.jpg",
  "18611328-0.jpg",
  "18611361-0.jpg",
  "18611389-0.jpg",
  "18611405-0.jpg",
  "18762787-0.jpg",
  "19127437-0.jpg",
  "19128132-0.jpg",
  "19150305-0.jpg",
  "19702812-0.jpg",
  "19702815-0.jpg",
  "19785607-0.jpg",
  "19790499-0.jpg",
  "19791315-0.jpg",
  "19799102-0.jpg",
  "19877825-0.jpg",
  "19877923-0.jpg",
  "19917131-0.jpg",
  "19924006-0.jpg",
  "19929323-0.jpg",
  "19931614-0.jpg",
  "19932016-0.jpg",
  "19932535-0.jpg",
  "19933897-0.jpg",
  "19933902-0.jpg",
  "20064736-0.jpg",
  "20064820-0.jpg",
  "20089890-0.jpg",
  "20242199-0.jpg",
  "20242203-0.jpg",
  "20391567-0.jpg",
  "20846637-0.jpg",
  "20856428-0.jpg",
  "20976849-0.jpg",
  "20976852-0.jpg",
  "21112299-0.jpg",
  "21112607-0.jpg",
  "21112739-0.jpg",
  "21123478-0.jpg",
  "21134390-0.jpg",
  "21137238-0.jpg",
  "21430800-0.jpg",
  "21430840-0.jpg",
  "21494746-0.jpg",
  "21494752-0.jpg",
  "21494755-0.jpg",
  "21765051-0.jpg",
  "21870568-0.jpg",
  "21870738-0.jpg",
  "21870752-0.jpg",
  "21870807-0.jpg",
  "21870849-0.jpg",
  "21918498-0.jpg",
  "22059216-0.jpg",
  "22385368-0.jpg",
  "22733930-0.jpg",
  "22991524-0.jpg",
  "23307421-0.jpg",
  "23343531-0.jpg",
  "23352072-0.jpg",
  "23429888-0.jpg",
  "23430315-0.jpg",
  "23431270-0.jpg",
  "24283725-0.jpg",
  "24283870-0.jpg",
  "24284070-0.jpg",
  "24291051-0.jpg",
  "24951535-0.jpg",
  "25018045-0.jpg",
  "25018046-2.jpg",
  "25111912-1.jpg",
  "25112068-0.jpg",
  "25112135-1.jpg",
];

// Function to shuffle array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;
  const newArray = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}

// Select the first 15 images after shuffling
const imagesToShow = shuffleArray(imageFiles).slice(0, 15); // Changed back to 15

function Bewerbungsfotosehen() {
  return (
    <VStack textAlign={"center"}>
      <Box py={12} px={4}>
        <Heading as="h2" size="xl" fontWeight="semibold" mb={3}>
          So könnten Ihre Bewerbungsfotos aussehen
        </Heading>

        {/* Wrap Button in Flex for centering */}
        <Flex justifyContent="center" mb={8}>
          <Button
            as={Link}
            href="/dashboard"
            variant="brand"
            size="md"
            shadow="md"
            // mt={4} // Removed mt as Flex handles spacing
            // mb={8} // Moved mb to Flex container
            // marginX={"auto"} // Removed marginX
            rightIcon={<HiArrowRight />}
          >
            Bewerbungsfotos erstellen
          </Button>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }} // Responsive columns
          spacing={{ base: 3, md: 4 }} // Responsive spacing
          maxWidth="container.xl"
          mx="auto"
        >
          {imagesToShow.map((img, index) => (
            <Box
              key={index}
              position="relative"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
              aspectRatio={3 / 4}
              // Conditionally hide the 15th item (index 14) on smaller screens
              display={index === 14 ? { base: "none", lg: "block" } : "block"}
            >
              <Image
                src={`/headshots/${img}`}
                alt={`Beispiel Bewerbungsfoto ${index + 1}`}
                objectFit="cover"
                width="100%"
                height="100%"
              />
              {/* Optional: Add overlay icon here if needed later */}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default Bewerbungsfotosehen;
