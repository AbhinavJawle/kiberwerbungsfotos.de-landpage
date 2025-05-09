import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
  ListIcon,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";
import { IoIosFlash } from "react-icons/io";
import { CheckIcon } from "@chakra-ui/icons"; // Import CheckIcon and QuestionOutlineIcon

const Header = ({ session }: { session: Session | null }) => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      marginX="auto"
      maxWidth="container.lg"
      px="2"
    >
      <Flex justifyContent="space-between" py={4} as="footer">
        <Flex
          role="group"
          as={Link}
          href="/"
          alignItems="center"
          fontWeight="bold"
          fontSize="2xl"
        >
          <Icon
            transition="200ms all"
            _groupHover={{ color: "brand.500" }}
            as={IoIosFlash}
          />
          <Text display={{ base: "none", sm: "inherit" }}>
            KIBewerbungsfotos.de
          </Text>
        </Flex>
        <HStack spacing={1}>
          <Button
            as={Link}
            href="/#pricing"
            colorScheme="beige"
            variant="link"
            mr={4}
            size="sm"
          >
            Kosten
          </Button>
          <Button
            as={Link}
            href="/login"
            colorScheme="beige"
            variant="brand"
            size="sm"
          >
            Erstellen
          </Button>
          {session ? (
            <>
              <Tooltip hasArrow label="Public gallery">
                <Button
                  href={`/gallery/${session.userId}`}
                  as={Link}
                  colorScheme="beige"
                  variant="ghost"
                  size="sm"
                >
                  My Gallery
                </Button>
              </Tooltip>
              <Button href="/dashboard" as={Link} variant="brand" size="sm">
                Dashboard
              </Button>
              <Tooltip hasArrow label="Logout">
                <IconButton
                  aria-label="logout"
                  icon={<HiLogout />}
                  size="sm"
                  colorScheme="beige"
                  variant="ghost"
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                />
              </Tooltip>
            </>
          ) : (
            <Button
              href="/login"
              as={Link}
              variant="ghost"
              colorScheme="beige"
              size="sm"
            >
              Anmelden
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
