"use client";

import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
  Badge,
} from "@chakra-ui/react";
import { Navigation } from "@/components/Navigation";

const links = [
  {
    title: "プロジェクトA",
    url: "https://example.com/project-a",
    description:
      "Next.js、TypeScript、Tailwind CSSを使用したWebアプリケーション",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "プロジェクトB",
    url: "https://example.com/project-b",
    description:
      "Ruby on Rails、React、PostgreSQLを使用したWebアプリケーション",
    technologies: ["Ruby on Rails", "React", "PostgreSQL"],
  },
];

export default function Links() {
  return (
    <Box minH="100vh">
      <Navigation />
      <Container maxW="container.lg" py={8}>
        <Stack direction="column" spacing={8}>
          <Heading as="h1" size="xl" mb={4}>
            Web Links
          </Heading>
          {links.map((link, index) => (
            <Box
              key={index}
              w="full"
              p={6}
              borderWidth={1}
              borderRadius="lg"
              _hover={{ bg: "gray.50" }}
            >
              <ChakraLink
                href={link.url}
                isExternal
                fontSize="xl"
                fontWeight="bold"
                mb={2}
                display="block"
              >
                {link.title}
              </ChakraLink>
              <Text color="gray.600" mb={4}>
                {link.description}
              </Text>
              <Stack direction="row" spacing={2}>
                {link.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} colorScheme="gray">
                    {tech}
                  </Badge>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
