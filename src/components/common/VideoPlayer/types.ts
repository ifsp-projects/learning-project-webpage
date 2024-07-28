export interface VideoPlayerProps {
  video: {
    description: string
    duration: string
    features: string[]
    hoverText: string
    id: string
    markers: {
      time: number
      label: string
    }[]
    metadata: {
      title: string
      description: string
    }
    src: {
      SD: string
      HD: string
      fullHD: string
    }
    tags: string[]
    thumb: {
      src: string
    }
    title: string
  }
}
