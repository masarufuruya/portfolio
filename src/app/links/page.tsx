"use client";

import {
  Box,
  Container,
  Heading,
  Stack,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { Navigation } from "@/components/Navigation";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const links = [
  {
    platform: "Zenn",
    url: "https://zenn.dev/nana",
  },
  {
    platform: "Note",
    url: "https://note.com/eve_key/",
  },
  {
    platform: "Qiita",
    url: "https://qiita.com/yugo-ibuki",
  },
  {
    platform: "Reading Book Blog",
    url: "https://ugo-ev.hatenablog.com/",
  },
  {
    platform: "Novel",
    url: "https://sizu.me/ugo",
  },
];

export default function Links() {
  return (
    <Box minH="100vh">
      <Navigation />
      <Container maxW="container.lg" py={8}>
        <Stack direction="column" spacing={8}>
          <Box display="flex" alignItems="center" gap={3} mt={16}>
            <Icon viewBox="0 0 24 24" boxSize={8}>
              <path
                fill="currentColor"
                d="M15.5 17.5L19.5 21.5L21 20L17 16L15.5 17.5M21.66 16.97L18.86 14.17L21.03 12L17 8L8 17L12 21L14.17 18.83L17 21.66L21.66 16.97M11 13L15 9L13 7L9 11L11 13Z"
              />
            </Icon>
            <Heading as="h1" size="xl">
              Web Links
            </Heading>
          </Box>

          <Stack direction="column" spacing={6}>
            {links.map((link, index) => (
              <Box key={index}>
                <Heading as="h2" size="md" mb={2}>
                  {link.platform}
                </Heading>
                <ChakraLink
                  href={link.url}
                  isExternal
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="lg"
                  color="gray.700"
                  _hover={{ color: link.color }}
                >
                  {link.url}
                  <ExternalLinkIcon />
                </ChakraLink>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
