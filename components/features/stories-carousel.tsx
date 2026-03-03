'use client'

import { useState, useEffect } from 'react'
import { STORIES } from '@/lib/stories-data'
import { StoryViewer } from './story-viewer'

export function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [viewerKey, setViewerKey] = useState(0)

  const currentStory =
    currentIndex !== null ? STORIES[currentIndex] : null

  const openStory = (index: number) => {
    setCurrentIndex(index)
    setViewerKey((prev) => prev + 1)
  }

  const handleClose = () => {
    setCurrentIndex(null)
  }

  const handleNext = () => {
    if (currentIndex !== null) {
      if (currentIndex < STORIES.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setViewerKey((prev) => prev + 1)
      } else {
        handleClose()
      }
    }
  }

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setViewerKey((prev) => prev + 1)
    }
  }

  return (
    <>
      {/* Horizontal Story Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {STORIES.map((story, index) => (
          <button
            key={story.id}
            onClick={() => openStory(index)}
            className="flex-shrink-0 group relative"
          >
            <div className="w-20 h-28 rounded-xl overflow-hidden border-2 border-primary/40 hover:border-primary transition-all duration-300 relative">
              <img
                src={story.thumbnail}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <p className="text-xs text-white mt-2 text-center font-semibold truncate w-20">
              {story.title}
            </p>
          </button>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {currentStory && (
        <div className="fixed inset-0 bg-black z-[9999]">
          <StoryViewer
            key={viewerKey}
            story={currentStory}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      )}
    </>
  )
}