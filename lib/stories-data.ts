export interface Story {
  id: string
  title: string
  thumbnail: string
  slides: StorySlide[]
  music?: {
    title: string
    artist: string
    url?: string
  }
}

export interface StorySlide {
  id: string
  image: string
  duration: number // milliseconds
  text?: string
  textPosition?: 'top' | 'center' | 'bottom'
}

export const STORIES: Story[] = [
  {
    id: 'our-story',
    title: 'Your Story',
    thumbnail: '/stories/your-story.jpg',
    music: {
      title: 'Fashion Forward',
      artist: 'Urban Beats',
    },
    slides: [
      {
        id: 'slide-1',
        image: '/stories/your-story.jpg',
        duration: 5000,
        text: 'ZORROW X\nOur Journey',
        textPosition: 'center',
      },
      {
        id: 'slide-2',
        image: '/stories/your-story.jpg',
        duration: 5000,
        text: 'Premium Streetwear Since 2020',
        textPosition: 'bottom',
      },
      {
        id: 'slide-3',
        image: '/stories/your-story.jpg',
        duration: 5000,
        text: 'Crafted for Visionaries',
        textPosition: 'bottom',
      },
    ],
  },
  {
    id: 'urban-vibes',
    title: 'Urban Vibes',
    thumbnail: '/stories/urban-vibes.jpg',
    music: {
      title: 'City Life',
      artist: 'Metro Sounds',
    },
    slides: [
      {
        id: 'slide-1',
        image: '/stories/urban-vibes.jpg',
        duration: 5000,
        text: 'Urban Vibes\nTrend Report',
        textPosition: 'center',
      },
      {
        id: 'slide-2',
        image: '/stories/urban-vibes.jpg',
        duration: 5000,
        text: 'Street Style Goals',
        textPosition: 'bottom',
      },
      {
        id: 'slide-3',
        image: '/stories/urban-vibes.jpg',
        duration: 5000,
        text: 'Express Yourself',
        textPosition: 'bottom',
      },
    ],
  },
  {
    id: 'streetwear',
    title: 'Streetwear',
    thumbnail: '/stories/streetwear.jpg',
    music: {
      title: 'Streetwear Anthem',
      artist: 'Urban Beats',
    },
    slides: [
      {
        id: 'slide-1',
        image: '/stories/streetwear.jpg',
        duration: 5000,
        text: 'Streetwear Collection',
        textPosition: 'center',
      },
      {
        id: 'slide-2',
        image: '/stories/streetwear.jpg',
        duration: 5000,
        text: 'Premium Quality Fabrics',
        textPosition: 'bottom',
      },
      {
        id: 'slide-3',
        image: '/stories/streetwear.jpg',
        duration: 5000,
        text: 'Limited Edition Pieces',
        textPosition: 'bottom',
      },
    ],
  },
  {
    id: 'fashion-tips',
    title: 'Fashion Tips',
    thumbnail: '/stories/fashion-tips.jpg',
    music: {
      title: 'Style Guide',
      artist: 'Fashion Vibes',
    },
    slides: [
      {
        id: 'slide-1',
        image: '/stories/fashion-tips.jpg',
        duration: 5000,
        text: 'Fashion Tips\nStyling Guide',
        textPosition: 'center',
      },
      {
        id: 'slide-2',
        image: '/stories/fashion-tips.jpg',
        duration: 5000,
        text: 'Master the Mix & Match',
        textPosition: 'bottom',
      },
      {
        id: 'slide-3',
        image: '/stories/fashion-tips.jpg',
        duration: 5000,
        text: 'Perfect Your Look Today',
        textPosition: 'bottom',
      },
    ],
  },
  {
    id: 'new-drops',
    title: 'New Drops',
    thumbnail: '/stories/new-drops.jpg',
    music: {
      title: 'New Release',
      artist: 'Hype Train',
    },
    slides: [
      {
        id: 'slide-1',
        image: '/stories/new-drops.jpg',
        duration: 5000,
        text: 'New Drops\nThis Week',
        textPosition: 'center',
      },
      {
        id: 'slide-2',
        image: '/stories/new-drops.jpg',
        duration: 5000,
        text: 'Exclusive Limited Stock',
        textPosition: 'bottom',
      },
      {
        id: 'slide-3',
        image: '/stories/new-drops.jpg',
        duration: 5000,
        text: 'Get Yours Before They\'re Gone',
        textPosition: 'bottom',
      },
    ],
  },
]
