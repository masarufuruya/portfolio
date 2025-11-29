"use client";

import {
  Box,
  Flex,
  Stack,
  IconButton,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { name: "Background", path: "/" },
  { name: "Web Links", path: "/links" },
];

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const MenuItems = () => (
    <>
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.path}
          as={NextLink}
          href={item.path}
          px={4}
          py={2}
          rounded="md"
          _hover={{ bg: "gray.100" }}
          bg={!item.isExternal && pathname === item.path ? "gray.100" : "transparent"}
          target={item.isExternal ? "_blank" : undefined}
          rel={item.isExternal ? "noopener noreferrer" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <Box as="nav" px={4} position="fixed" w="full" bg="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link as={NextLink} href="/" fontWeight="bold" fontSize="xl">
          MASARU FURUYA
        </Link>

        {/* Desktop Navigation */}
        <Stack
          direction="row"
          display={{ base: "none", md: "flex" }}
          spacing={8}
        >
          <MenuItems />
        </Stack>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="outline"
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                <MenuItems />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
