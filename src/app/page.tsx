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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// スキルデータ
const skills = {
  バックエンド: [
    {
      name: "Ruby on Rails",
      level: "⭐️",
      comment:
        "実務で5年以上の経験。要件を理解して自分で設計しながらコードを書くことができるレベル",
    },
    { name: "Nest.js", level: "▲", comment: "個人開発で使用中" },
    {
      name: "Firebase",
      level: "⭕️",
      comment: "実務と個人開発でFirestoreを利用",
    },
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
    period: "2022/07-現在",
    company: "PharmaX株式会社",
    type: "正社員",
    description: `新規事業のフロントエンドのリードエンジニアや、スクラムマスターとしてスクラム開発の主導を実施。

2023年よりEMとして開発生産性の向上や採用・評価などの組織づくりに関わるようになりました。`,
  },
  {
    period: "2021/06-2022/06",
    company: "PharmaX株式会社",
    type: "業務委託",
    description: `慢性的な体の不調について薬剤師にLINEで相談できるオンライン型薬局サービスを提供。

元々はアプリケーションエンジニアとして参画しましたが、データエンジニアとして全社データ分析基盤の開発・データの民主化の啓蒙を担当しました。

• **全社データ分析基盤の開発:** エンジニアとしてdbt×BigQueryを用いたデータ分析基盤を企画・設計・開発
• **薬剤師向けにデータの民主化の啓蒙:** 薬剤師がSQLを書けるようになるために基盤の整備・勉強の企画/運営`,
  },
  {
    period: "2020/05-2021/05",
    company: "株式会社セルフケアテクノロジーズ",
    type: "業務委託",
    description: `自己流では難しい運動・食事の習慣化をテーマにしたオンラインパーソナル型フィットネスサービスを提供。

新規サービスの立ち上げに伴うMVP開発と高単価サブスク化をミッションに必要な新機能・決済機能を開発・リリース。黒字化まで実現しました。

• **オンラインパーソナル型フィットネスサービスの開発:** エンジニアとしてRuby on Railsを用いたMVP開発・高単価化に必要な機能開発`,
  },
  {
    period: "2019/01-2020/04",
    company: "株式会社シューマツワーカー",
    type: "業務委託",
    description: `副業をしたいワーカーと企業をつなぐ副業マッチングプラットフォームを提供。ワーカー向けの予実管理サービスをリリースしました。

• **ワーカー向けの予実管理サービスの開発:** エンジニアとしてRuby on Railsを用いた開発`,
  },
  {
    period: "2018/01-2018/12",
    company: "株式会社palan",
    type: "業務委託",
    description: `React Nativeを用いたモバイルアプリの受託開発サービスを提供。Beauty naviという美容室検索サイトのモバイルアプリ(WebView)を在籍中に新規開発・リリース。

R&D活動としてWebのReact VR・ARを用いたPoC開発をリード。この時に研究開発していたAR分野が現在の主力事業に成長しました。

• **モバイルアプリの開発:** エンジニアとしてReact Native・Reduxを用いた開発
• **Web VR・AR領域の研究/PoC開発:** Web VR・ARの開発基盤構築・PoC開発をリード`,
  },
  {
    period: "2017/01-2017/12",
    company: "株式会社ベストティーチャー",
    type: "業務委託",
    description: `英語で自分が話したいことを書き出し、講師が添削したスクリプトをもとに会話を行う オンライン英会話サービスを提供。

既存サブスクユーザーのチャーンレートを下げることをミッションとして持ち、新復習機能（ベストレ）をPM/デザイナーと連携し、在籍中に開発・リリース。

既存のRuby on Rails環境へのReactの導入・設計・浸透までリードエンジニアとして実施しました。

• **オンライン英会話サービス・ベストティーチャーの開発:** エンジニアとしてRuby on Rails・JQueryを用いた開発
• **WebフロントエンドのリードエンジニアとしてReactのアーキテクト・導入:** Reactの開発基盤構築・Reactを用いてベストレを開発`,
  },
  {
    period: "2016/01-2016/12",
    company: "株式会社ペライチ",
    type: "業務委託",
    description: `ベトナム駐在時にオフショア会社の内部にいたことでより多くの業種で働きたいと思うようになり、フリーランスに転向。
スモールtoB向けのノーコードHP作成サービスであるペライチにアプリケーションエンジニアとして参画。
Webフロントエンドやサーバーサイドまで広く担当し、在籍中にスモール事業者が自社のサイトに決済を簡単に組み込めるペライチ決済を開発・リリースしました。

• **ノーコードHP作成サービス・ペライチの開発:** エンジニアとしてCakePHP・Backbone.jsを用いた機能開発を担当。`,
  },
  {
    period: "2014/05-2015/12",
    company: "株式会社コムニコ",
    type: "正社員",
    description: `ベンチャーでのスモールチームでの事業開発との相性が良く、本格的にプロダクト開発に関わってみたいと考え、支援先のコムニコに転職。
先行する競合他社の類似プロダクトに追いつくため、新規機能の拡充・他社以上に使いやすいUXを実現していくため当時先進的だったSPAへのリプレースを実施。
SPAへのシステムリプレース・新機能開発・ベトナム人エンジニアのコード品質チェックを担当しました。

• **SNSアカウント分析・管理SaaSの開発・リプレース:** エンジニアとしてAngular1系・Node.js（Express）を用いたSPA開発をリード。
• **各SNS (Facebook・Twitter)連携用の基盤開発:** エンジニアとしてAWS上にSQSを用いたジョブキューシステムの構築・アプリケーション用のEC2の運用環境を整備。
• **ベトナム人メンバーのコード品質チェック:** エンジニアリーダーとしてベトナム人メンバーのコード・設計レビューを担当。`,
  },
  {
    period: "2012/04-2014/04",
    company: "ニフティ株式会社",
    type: "正社員",
    description: `2012年から2014年までニフティ株式会社のベンチャー支援を行う部署で、アプリケーションエンジニアとして業務に従事しました。支援先のベンチャー企業の新規事業としてSNS管理SaaSの立ち上げにおけるシステム設計、開発、検証、リリースまで担当しました。

• **SNSアカウント分析・管理SaaSの開発:** エンジニアとしてCakePHP・JQueryを用いたMPA開発をリード。
• **ベトナムオフショアチームのプロジェクトマネジメント:** PjMとしてベトナム現地で現地メンバーのコード品質チェックと開発ディレクションを担当。`,
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
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                {work.company}（{work.period}） {work.type}
              </Text>
              <Box color="gray.600">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: (props) => <Text whiteSpace="pre-wrap" {...props} />,
                    strong: (props) => (
                      <Text as="span" fontWeight="bold" {...props} />
                    ),
                  }}
                >
                  {work.description}
                </ReactMarkdown>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* スキルセクション */}
        <Stack direction="column" spacing={8}>
          <Heading as="h2" size="lg">
            スキル（▲: 学習中、⭕️: 一人前、⭐️: 得意）
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
