'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X, Volume2, VolumeX, Music } from 'lucide-react'
import type { Story } from '@/lib/stories-data'

interface StoryViewerProps {
  story: Story
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
}

export function StoryViewer({ story, onClose, onNext, onPrev }: StoryViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentSlide = story.slides[currentSlideIndex]
  const totalSlides = story.slides.length

  // Handle slide progression
  useEffect(() => {
    if (!isPlaying || !currentSlide) return

    const startTime = Date.now()
    const slideDuration = currentSlide.duration

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progressPercent = (elapsed / slideDuration) * 100

      if (progressPercent >= 100) {
        // Move to next slide
        if (currentSlideIndex < totalSlides - 1) {
          setCurrentSlideIndex(currentSlideIndex + 1)
          setProgress(0)
        } else {
          // Story finished
          onNext?.()
          onClose()
        }
      } else {
        setProgress(progressPercent)
      }
    }, 50)

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [currentSlideIndex, isPlaying, currentSlide, totalSlides, onNext, onClose])

  // Handle keyboard and gesture controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goToNextSlide()
      if (e.key === 'ArrowLeft') goToPrevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlideIndex])

  const goToNextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
      setProgress(0)
    } else {
      onNext?.()
      onClose()
    }
  }

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
      setProgress(0)
    } else {
      onPrev?.()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Progress bars */}
      <div className="flex gap-1 p-2 bg-black/40 backdrop-blur-sm">
        {story.slides.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-primary transition-all duration-100"
              style={{
                width: index < currentSlideIndex ? '100%' : index === currentSlideIndex ? `${progress}%` : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Story content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Slide image */}
        <img
          src={currentSlide.image}
          alt="Story slide"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

        {/* Slide text */}
        {currentSlide.text && (
          <div
            className={`absolute inset-x-0 text-center text-white ${
              currentSlide.textPosition === 'top' ? 'top-20' :
              currentSlide.textPosition === 'bottom' ? 'bottom-20' :
              'top-1/2 -translate-y-1/2'
            }`}
          >
            <div className="whitespace-pre-line text-2xl md:text-4xl font-bold drop-shadow-lg">
              {currentSlide.text}
            </div>
          </div>
        )}

        {/* Music info */}
        {story.music && (
          <div className="absolute top-20 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">
            <Music className="w-4 h-4 animate-pulse" />
            <div className="text-xs">
              <p className="font-semibold">{story.music.title}</p>
              <p className="text-white/60 text-xs">{story.music.artist}</p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {/* Left tap area */}
          <button
            onClick={goToPrevSlide}
            className="flex-1 flex items-center justify-start hover:bg-white/10 transition-colors h-full"
          >
            <ChevronLeft className="w-8 h-8 text-white/60 hover:text-white" />
          </button>

          {/* Center (pause/play on tap) */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            {/* Play/pause indicator */}
          </button>

          {/* Right tap area */}
          <button
            onClick={goToNextSlide}
            className="flex-1 flex items-center justify-end hover:bg-white/10 transition-colors h-full"
          >
            <ChevronRight className="w-8 h-8 text-white/60 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Header controls */}
      <div className="absolute top-4 right-4 flex gap-3 z-20">
        {/* Mute button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Swipe down to close hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        Swipe down to close
      </div>
    </div>
  )
}
