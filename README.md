# Issei Suzuki's Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS + daisyUI で構築されたポートフォリオサイト

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + daisyUI (cupcake theme)
- **Animation**: Framer Motion
- **Architecture**: Atomic Design

## 機能

- 📱 レスポンシブデザイン
- 🎨 daisyUI cupcakeテーマ
- ✨ Framer Motionアニメーション（シャボン玉風）
- 🏗️ Atomic Design構成
- 📄 静的サイト生成 (SSG)

## ページ構成

- `/` - ホームページ
- `/works` - 作品一覧
- `/works/[slug]` - 作品詳細
- `/about` - プロフィール
- `/blog` - ブログ（Zenn記事）

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 型チェック
npm run type-check

# リンティング
npm run lint
```

## ディレクトリ構成

```
src/
├── app/                 # Next.js App Router
├── components/          # Atomic Design構成
│   ├── atoms/          # 基本コンポーネント
│   ├── molecules/      # 組み合わせコンポーネント
│   └── organisms/      # 複合コンポーネント
└── lib/                # ユーティリティ・データ
```

## デプロイ

Vercelでのデプロイを推奨

```bash
npm run build
```# issei-portfolio
