"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { Navigation } from "@/components/Navigation";

// スキルデータ
const skills = {
  バックエンド: [
    { name: "Ruby on Rails", level: "⭐️", comment: "実務で5年以上の経験" },
    { name: "Nest.js", level: "⭕️", comment: "実務で1年以上の経験" },
    { name: "Firebase", level: "⭕️", comment: "複数プロジェクトで使用" },
    { name: "Supabase", level: "▲", comment: "個人開発で使用経験あり" },
  ],
  フロントエンド: [
    {
      name: "Next.js (AppRouter)",
      level: "⭐️",
      comment: "実務で2年以上の経験",
    },
    { name: "Tailwind", level: "⭐️", comment: "実務で2年以上の経験" },
    { name: "ChakraUI", level: "⭕️", comment: "複数プロジェクトで使用" },
    {
      name: "Vue.js",
      level: "⭕️",
      comment:
        "Ruby on Railsのテンプレートエンジンとの併用を業務で経験あり（Vue2系）Nuxt.jsは組まれたLPを保守したことがある程度。既存のVue.jsのプロジェクトを調べながら自分で実装・テストコードを書いていくことはできるレベル感",
    },
    { name: "React", level: "⭕️", comment: "複数プロジェクトで使用" },
    { name: "React Native", level: "▲", comment: "個人開発で使用経験あり" },
  ],
  AI: [
    { name: "Dify", level: "⭕️", comment: "実務で使用経験あり" },
    {
      name: "Cursor Composer Agent",
      level: "⭕️",
      comment: "実務で使用経験あり",
    },
  ],
  マネジメント: [
    {
      name: "スクラム/デリバリーマネジメント",
      level: "⭐️",
      comment: "5年以上の経験",
    },
    { name: "ピープルマネジメント", level: "⭕️", comment: "3年以上の経験" },
    { name: "テックマネジメント", level: "⭕️", comment: "2年以上の経験" },
    { name: "プロダクトマネジメント", level: "▲", comment: "1年程度の経験" },
  ],
  その他: [
    {
      name: "クリーンアーキテクチャ",
      level: "⭕️",
      comment: "実務での適用経験あり",
    },
    { name: "CI/CD", level: "⭐️", comment: "5年以上の経験" },
    { name: "Terraform", level: "⭕️", comment: "実務で2年以上の経験" },
    { name: "GCP", level: "⭐️", comment: "実務で3年以上の経験" },
    { name: "AWS", level: "⭕️", comment: "実務で2年以上の経験" },
  ],
};

// 職務経歴データ
const workHistory = [
  {
    period: "2022/04 - 現在",
    company: "株式会社ABC",
    type: "正社員",
    description: `テックリード・エンジニアリングマネージャーとして、チームマネジメントとテクニカルリーダーシップを担当。

新規プロダクト開発におけるアーキテクチャ設計、技術選定、チーム編成を主導。

Next.js、NestJS、GCPを用いたマイクロサービスアーキテクチャの設計・実装を行う。`,
  },
  {
    period: "2019/04 - 2022/03",
    company: "株式会社XYZ",
    type: "フリーランス",
    description: `フルスタックエンジニアとして、複数のプロジェクトに参画。

Ruby on Rails、React、AWS を用いたWebアプリケーション開発を担当。

アジャイル開発手法を導入し、開発プロセスの改善に貢献。`,
  },
];

export default function Home() {
  return (
    <Box minH="100vh" pt={20}>
      <Navigation />
      <Container maxW="container.lg" py={8}>
        {/* 基本情報セクション */}
        <Stack direction="column" spacing={8} mb={12}>
          <Box textAlign="center" w="full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              borderRadius="full"
              boxSize="200px"
              mx="auto"
              mb={4}
            />
            <Heading as="h1" size="xl" mb={2}>
              M.Furuya
            </Heading>
            <Text fontSize="lg" color="gray.600">
              フルスタックエンジニア / エンジニアリングマネージャー
            </Text>
          </Box>
          <Text>
            フルスタックエンジニアとしての技術力と、エンジニアリングマネージャーとしてのマネジメント経験を活かし、
            プロダクト開発からチーム育成まで幅広く貢献できます。
          </Text>
        </Stack>

        {/* 職務経歴セクション */}
        <Stack direction="column" spacing={8} mb={12}>
          <Heading as="h2" size="lg">
            職務経歴
          </Heading>
          {workHistory.map((work, index) => (
            <Box key={index} w="full" p={6} borderWidth={1} borderRadius="lg">
              <Text fontWeight="bold" mb={2}>
                {work.period}
              </Text>
              <Text fontSize="lg" mb={2}>
                {work.company} - {work.type}
              </Text>
              <Text color="gray.600" whiteSpace="pre-wrap">
                {work.description}
              </Text>
            </Box>
          ))}
        </Stack>

        {/* スキルセクション */}
        <Stack direction="column" spacing={8}>
          <Heading as="h2" size="lg">
            スキル
          </Heading>
          {Object.entries(skills).map(([category, items]) => (
            <Box key={category} w="full">
              <Heading as="h3" size="md" mb={4}>
                {category}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                {items.map((skill, index) => (
                  <Box
                    key={index}
                    p={4}
                    borderWidth={1}
                    borderRadius="lg"
                    _hover={{ bg: "gray.50" }}
                  >
                    <Text fontWeight="bold" mb={2}>
                      {skill.name}{" "}
                      <Badge colorScheme="gray" ml={2}>
                        {skill.level}
                      </Badge>
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {skill.comment}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
