import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "react-icons/md";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="blue.500" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box color="white" fontWeight="bold">Health Dashboard</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "blue.700" }} href={"#"}>
                Home
              </Link>
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "blue.700" }} href={"#"}>
                Stats
              </Link>
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "blue.700" }} href={"#"}>
                Settings
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "blue.700" }} href={"#"}>
                Home
              </Link>
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "blue.700" }} href={"#"}>
                Stats
              </Link>
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "blue.700" }} href={"#"}>
                Settings
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;