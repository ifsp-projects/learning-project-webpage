'use client'
/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from 'next/dynamic'

import { VideoPlayerProps } from './types'

const Plyr = dynamic(() => import('plyr-react'), { ssr: false })

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <>
      <div
        className={`animate__animated animate__fadeIn animate__slow plyrVideoPlayer mb-4 hidden aspect-video w-full sm:flex`}
      >
        <Plyr
          options={{
            quality: {
              default: 720,
              options: [1080, 720, 480]
            },
            // @ts-expect-error
            controls: VIDEO_CONTROLS_DESKTOP,
            markers: {
              enabled: true,
              points: video.markers
            }
          }}
          source={{
            sources: [
              {
                src: video.src.fullHD,
                type: 'video/mp4',
                size: 1080
              },
              {
                src: video.src.HD,
                type: 'video/mp4',
                size: 720
              },
              {
                src: video.src.SD,
                type: 'video/mp4',
                size: 480
              }
            ],
            type: 'video',
            poster: video.thumb.src
          }}
        />
      </div>

      <div
        className={`animate__animated animate__fadeIn animate__slow plyrVideoPlayer mb-4 flex aspect-video w-full sm:hidden`}
      >
        <Plyr
          options={{
            quality: {
              default: 480,
              options: [1080, 720, 480]
            },
            // @ts-expect-error
            controls: VIDEO_CONTROLS_MOBILE,
            markers: {
              enabled: true,
              points: video.markers
            }
          }}
          source={{
            sources: [
              {
                src: video.src.fullHD,
                type: 'video/mp4',
                size: 1080
              },
              {
                src: video.src.HD,
                type: 'video/mp4',
                size: 720
              },
              {
                src: video.src.SD,
                type: 'video/mp4',
                size: 480
              }
            ],
            type: 'video',
            poster: video.thumb.src
          }}
        />
      </div>
    </>
  )
}
