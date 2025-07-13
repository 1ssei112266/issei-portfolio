import type { Config } from 'tailwindcss'

/**
 * Tailwind CSSの設定ファイル
 * daisyUIプラグインとカスタムアニメーションを含む
 */
const config: Config = {
  // TailwindがCSSクラスをスキャンするファイルパス
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // カスタムアニメーションの定義（シャボン玉風浮遊エフェクト）
      animation: {
        'float': 'float 6s ease-in-out infinite', // 基本の浮遊アニメーション
        'float-delayed': 'float 6s ease-in-out infinite 2s', // 2秒遅延版
        'float-delayed-2': 'float 6s ease-in-out infinite 4s', // 4秒遅延版
      },
      // アニメーションのkeyframesの定義
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' }, // 開始と終了: 元の位置
          '50%': { transform: 'translateY(-20px)' }, // 中間点: 20px上に移動
        }
      }
    },
  },
  // 使用するTailwind CSSプラグイン
  plugins: [require('daisyui')],
  
  // daisyUIの設定
  daisyui: {
    themes: ['cupcake'], // 使用するテーマ: cupcake（パステルカラー）
    base: true, // ベーススタイルを適用
    styled: true, // スタイル付きコンポーネントを使用
    utils: true, // ユーティリティクラスを使用
    prefix: '', // クラス名のプレフィックス（なし）
    logs: true, // コンソールログを表示
    themeRoot: ':root', // CSS変数のルート要素
  },
}
export default config