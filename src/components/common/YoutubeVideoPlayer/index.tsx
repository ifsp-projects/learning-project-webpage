'use client'
/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from 'next/dynamic'

import { getVideoId } from '@/utils/getters/getVideoId'

import { VIDEO_CONTROLS_DESKTOP, VIDEO_CONTROLS_MOBILE } from './data'
import { YoutubeVideoPlayerProps } from './types'

const Plyr = dynamic(() => import('plyr-react'), { ssr: false })

export const YoutubeVideoPlayer: React.FC<YoutubeVideoPlayerProps> = ({
  video
}) => {
  const videoId = getVideoId(video)

  return (
    <>
      <div
        className="animate__animated animate__fadeIn animate__slow plyrVideoPlayer flex aspect-video w-full rounded-sm"
        data-cid="video-player"
      >
        <figure className="hidden w-full lg:flex">
          <Plyr
            options={{
              // @ts-expect-error
              controls: VIDEO_CONTROLS_DESKTOP
            }}
            source={{
              type: 'video',
              sources: [
                {
                  src: videoId,
                  provider: 'youtube'
                }
              ]
            }}
          />
        </figure>
        <figure className="flex w-full lg:hidden">
          <Plyr
            options={{
              // @ts-expect-error
              controls: VIDEO_CONTROLS_MOBILE
            }}
            source={{
              type: 'video',
              sources: [
                {
                  src: videoId,
                  provider: 'youtube'
                }
              ]
            }}
          />
        </figure>
      </div>
    </>
  )
}
