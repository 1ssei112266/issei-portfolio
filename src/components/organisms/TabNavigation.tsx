'use client'

import { TabType } from '@/app/page'

interface TabNavigationProps {
  activeTab: TabType | null
  onTabChange: (tab: TabType) => void
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: 'about' as TabType, label: 'About' },
    { id: 'works' as TabType, label: 'Works' },
    { id: 'blog' as TabType, label: 'Blog' },
    { id: 'thinking' as TabType, label: 'Thinking' },
  ]

  return (
    <div className="tabs tabs-boxed justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab tab-lg ${activeTab === tab.id ? 'tab-active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}