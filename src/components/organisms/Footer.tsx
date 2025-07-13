'use client'

import { Link } from '../atoms/Link'
import { motion } from 'framer-motion'

/**
 * フッターコンポーネント
 * 
 * 機能:
 * - シャボン玉テーマに合わせた遊び心のあるデザイン
 * - 15個の浮遊する泡の背景アニメーション
 * - 3つのバブルカード（Navigation、Connect、About Me）
 * - インタラクティブなSNSアイコン（絵文字使用）
 * - 浮遊する装飾要素とアニメーション効果
 * - レスポンシブ対応
 * - 温かみのあるコピーライト表示
 */

export const Footer = () => {
  // 動的に現在の年を取得
  const currentYear = new Date().getFullYear()
  
  // SSR対応：固定のプロパティでランダム性を表現
  const bubbleProperties = Array.from({ length: 15 }, (_, i) => ({
    width: 20 + (i * 7) % 40,
    height: 20 + (i * 9) % 40,
    left: (i * 23) % 100,
    top: (i * 17) % 100,
    duration: 6 + (i % 4),
    delay: (i % 3),
    opacity: 0.1 + (i % 3) * 0.05
  }))
  
  return (
    <footer className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
      {/* Floating bubble background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbleProperties.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header section with floating elements */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full"
              animate={{
                y: [-3, 3, -3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.h3 
              className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              whileHover={{ 
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Thanks for visiting! 🫧
            </motion.h3>
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full"
              animate={{
                y: [3, -3, 3],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
          <motion.p 
            className="text-base-content/60 max-w-lg mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            シャボン玉のように軽やかで美しい<br />
            <span className="text-primary font-medium">Web体験</span>をお届けします ✨
          </motion.p>
        </motion.div>

        {/* Bubble-styled content sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Navigation bubble */}
          <motion.div 
            className="bg-base-100/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-base-200/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <h4 className="font-bold text-primary mb-4 text-center text-lg flex items-center justify-center gap-2">
              <span>🗺️</span> Navigation
            </h4>
            <nav className="space-y-3">
              {[
                { href: "/about", label: "About", icon: "👤" },
                { href: "/works", label: "Works", icon: "💼" },
                { href: "/blog", label: "Blog", icon: "📝" },
                { href: "/thinking", label: "Thinking", icon: "💭" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  whileHover={{ 
                    x: 10, 
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl p-2 hover:bg-primary/10"
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
          
          {/* Connect bubble */}
          <motion.div 
            className="bg-base-100/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-base-200/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <h4 className="font-bold text-secondary mb-4 text-center text-lg flex items-center justify-center gap-2">
              <span>🌐</span> Connect
            </h4>
            <div className="flex justify-center space-x-4">
              {[
                { 
                  href: "https://github.com/1ssei112266", 
                  label: "GitHub",
                  emoji: "🐙",
                  color: "hover:bg-gray-100"
                },
                { 
                  href: "https://twitter.com/isseisuzuki", 
                  label: "Twitter",
                  emoji: "🐦",
                  color: "hover:bg-blue-100"
                },
                { 
                  href: "https://zenn.dev/isseisuzuki", 
                  label: "Zenn",
                  emoji: "📚",
                  color: "hover:bg-green-100"
                },
                { 
                  href: "mailto:contact@example.com", 
                  label: "Email",
                  emoji: "✉️",
                  color: "hover:bg-red-100"
                }
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                >
                  <Link 
                    href={social.href} 
                    external
                    className={`w-12 h-12 rounded-full bg-base-200/50 ${social.color} flex items-center justify-center text-xl transition-all duration-300 shadow-md border-2 border-base-200/30`}
                    aria-label={social.label}
                  >
                    {social.emoji}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile bubble */}
          <motion.div 
            className="bg-base-100/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-base-200/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <h4 className="font-bold text-accent mb-4 text-center text-lg flex items-center justify-center gap-2">
              <span>💭</span> About Me
            </h4>
            <div className="text-center space-y-3">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-2xl shadow-lg"
                animate={{
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                👨‍💻
              </motion.div>
              <p className="text-base-content/70 text-sm leading-relaxed">
                <span className="font-semibold text-primary">Issei Suzuki</span><br />
                Frontend Engineer<br />
                <span className="text-xs">Always creating with joy! 🎨</span>
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Floating divider */}
        <motion.div 
          className="flex items-center justify-center my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex space-x-2"
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* Bottom message */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-sm text-base-content/50 hover:text-primary/80"
            whileHover={{ 
              scale: 1.05
            }}
            transition={{ duration: 0.2 }}
          >
            © {currentYear} Issei Suzuki. Made with ❤️ & lots of ☕<br />
            <span className="text-xs">Built with Next.js • Tailwind CSS • Framer Motion</span><br />
            <motion.span 
              className="text-primary/60 text-xs"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨ Designed with Claude AI • シャボン玉のように軽やかに ✨
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}