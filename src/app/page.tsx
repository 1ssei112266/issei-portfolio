'use client'

import { useState, useRef, useEffect } from 'react'
import { Hero } from '@/components/organisms/Hero'
import { TabNavigation } from '@/components/organisms/TabNavigation'
import { AboutSection } from '@/components/sections/AboutSection'
import { WorksSection } from '@/components/sections/WorksSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ThinkingSection } from '@/components/sections/ThinkingSection'

export type TabType = 'about' | 'works' | 'blog' | 'thinking'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType | null>(null) // null = show all sections
  const aboutRef = useRef<HTMLDivElement>(null)
  const worksRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const thinkingRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: TabType) => {
    const refs = {
      about: aboutRef,
      works: worksRef,
      blog: blogRef,
      thinking: thinkingRef
    }
    
    const targetRef = refs[section]
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
  }

  const handleBackToHome = () => {
    setActiveTab(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleNavigateToSection = (event: CustomEvent) => {
      const section = event.detail as TabType
      if (activeTab === null) {
        // If showing all sections, just scroll to the section
        scrollToSection(section)
      } else {
        // If in tab mode, switch to that tab
        handleTabChange(section)
      }
    }

    const handleBackToHomeEvent = () => {
      handleBackToHome()
    }

    window.addEventListener('navigate-to-section', handleNavigateToSection as EventListener)
    window.addEventListener('back-to-home', handleBackToHomeEvent as EventListener)
    
    return () => {
      window.removeEventListener('navigate-to-section', handleNavigateToSection as EventListener)
      window.removeEventListener('back-to-home', handleBackToHomeEvent as EventListener)
    }
  }, [activeTab])

  const renderContent = () => {
    if (activeTab === null) {
      // Show all sections
      return (
        <div className="space-y-32">
          <div ref={aboutRef}>
            <AboutSection />
          </div>
          <div ref={worksRef}>
            <WorksSection />
          </div>
          <div ref={blogRef}>
            <BlogSection />
          </div>
          <div ref={thinkingRef}>
            <ThinkingSection />
          </div>
        </div>
      )
    }
    
    // Show single section based on tab
    switch (activeTab) {
      case 'about':
        return <AboutSection />
      case 'works':
        return <WorksSection />
      case 'blog':
        return <BlogSection />
      case 'thinking':
        return <ThinkingSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <>
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        {activeTab !== null && (
          <>
            <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
            <div className="text-center mb-8">
              <button
                onClick={handleBackToHome}
                className="btn btn-ghost text-primary hover:text-primary-focus"
              >
                ← 全セクションを表示
              </button>
            </div>
          </>
        )}
        
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </>
  )
}