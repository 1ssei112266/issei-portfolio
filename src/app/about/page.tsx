import { Card } from "@/components/atoms/Card";
import { Link } from "@/components/atoms/Link";
import { PageBackground } from '@/components/organisms/PageBackground';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール | Issei Suzuki's Portfolio",
  description: "Issei Suzukiのプロフィール、経歴、スキルセットについて",
};

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
    {
      category: "Other",
      items: ["UI/UX Design", "Responsive Design", "Performance Optimization"],
    },
  ];

  const experience = [
    {
      period: "2023年4月 - 現在",
      company: "フリーランス Web Developer",
      description:
        "モダンなWeb技術を使用したフロントエンド開発を中心に活動。React/Next.jsを使用したSPAの開発や、パフォーマンス最適化を得意としています。",
    },
    {
      period: "2021年4月 - 2023年3月",
      company: "テックスタートアップ株式会社",
      description:
        "フロントエンドエンジニアとして、BtoBサービスのWebアプリケーション開発に従事。ユーザビリティの向上とコードの品質向上に貢献しました。",
    },
    {
      period: "2019年4月 - 2021年3月",
      company: "独学でプログラミング学習",
      description:
        "オンライン教材や技術書を活用してWeb開発の基礎から応用まで学習。個人プロジェクトを通じて実践的なスキルを身につけました。",
    },
  ];

  return (
    <PageBackground showBubbles={false}>
      <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">プロフィール</h1>
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Issei Suzuki</h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            ユーザー体験を重視したモダンなWebアプリケーション開発を行うフロントエンドエンジニア。
            React/Next.jsを中心とした技術スタックで、パフォーマンスと保守性を両立したコードを書くことを心がけています。
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-base-content mb-8 text-center">
            スキルセット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <div className="card-body">
                  <h3 className="card-title text-primary">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="badge badge-outline">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-base-content mb-8 text-center">
            経歴
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="card-title text-lg">{exp.company}</h3>
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base-content/80">{exp.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-base-content mb-8">
            お問い合わせ
          </h2>
          <Card>
            <div className="card-body">
              <p className="text-base-content/80 mb-6">
                お仕事のご依頼やご相談がございましたら、お気軽にご連絡ください。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="mailto:contact@example.com"
                  external
                  className="btn btn-primary"
                >
                  メールで連絡
                </Link>
                <Link
                  href="https://github.com/1ssei112266"
                  external
                  className="btn btn-ghost"
                >
                  GitHub
                </Link>
                <Link
                  href="https://twitter.com/isseisuzuki"
                  external
                  className="btn btn-ghost"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
      </div>
    </PageBackground>
  );
}
