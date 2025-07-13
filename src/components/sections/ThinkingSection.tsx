import { Card } from '@/components/atoms/Card'

export const ThinkingSection = () => {
  const thoughts = [
    {
      title: "モダンなWeb開発の未来",
      date: "2024-12-15",
      content: "React Server ComponentsやSuspenseの登場により、フロントエンド開発の paradigm が大きく変化しています。これらの技術がもたらす新しい可能性について考察します。",
      tags: ["React", "Next.js", "Future"]
    },
    {
      title: "ユーザー体験とパフォーマンス",
      date: "2024-12-10", 
      content: "Webサイトの表示速度とユーザー体験の関係性。Core Web Vitalsの改善がビジネスに与える実際の影響について、データとともに分析します。",
      tags: ["UX", "Performance", "Analytics"]
    },
    {
      title: "AIとプログラミングの共存",
      date: "2024-12-05",
      content: "ChatGPTやCopilotなどのAIツールが開発者の働き方をどう変えているか。人間とAIが協力する新しい開発スタイルについての私見です。",
      tags: ["AI", "Development", "Future"]
    }
  ]

  return (
    <div>
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">💭 Thinking</h2>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          技術や開発について考えていることを、思いつくままに綴っています。<br />
          日々の学びや気づき、未来への展望などを共有したいと思います。
        </p>
      </section>

      <section>
        <div className="space-y-8">
          {thoughts.map((thought, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="card-title text-xl text-primary">{thought.title}</h3>
                  <span className="text-sm text-base-content/60 mt-2 md:mt-0">
                    {thought.date}
                  </span>
                </div>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  {thought.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {thought.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge badge-outline">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {thoughts.length === 0 && (
        <section className="text-center py-16">
          <div className="text-6xl mb-4">💭</div>
          <p className="text-xl text-base-content/60 mb-4">
            まだ投稿がありません。
          </p>
          <p className="text-base-content/60">
            近日中に思考を整理して公開予定です。
          </p>
        </section>
      )}

      <section className="text-center mt-16">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="card-body">
            <h2 className="card-title justify-center text-primary">
              💡 アイデアを共有しませんか？
            </h2>
            <p className="text-base-content/80">
              技術的な議論や新しいアイデアについて、ぜひお話ししましょう。<br />
              お気軽にご連絡ください！
            </p>
          </div>
        </Card>
      </section>
    </div>
  )
}