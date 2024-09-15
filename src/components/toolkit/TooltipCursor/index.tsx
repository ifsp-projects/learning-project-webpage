'use client'

import { useEffect, useRef, useState } from 'react'

import { ExclamationCircle } from '@/assets/common/ExclamationCircle'

import { Disclaimer } from '../Disclaimer'
import { TooltipCursorProps } from './types'

export const TooltipCursor: React.FC<TooltipCursorProps> = ({
  children,
  content,
  disable,
  delay,
  ...props
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [showTooltipContent, setShowTooltipContent] = useState(false)

  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isTooltipVisible) {
      const timer = setTimeout(() => setShowTooltipContent(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isTooltipVisible, delay])

  const handleMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
    setShowTooltipContent(false)
  }

  return disable ? (
    children
  ) : (
    <div
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          top: tooltipPosition.y,
          left: tooltipPosition.x,
          transform: 'translate(-0%, 80%)',
          transition: 'opacity 0.2s ease-in-out'
        }}
        className={`fixed right-4 z-10 hidden max-w-xs shadow-md lg:block ${!disable && isTooltipVisible && showTooltipContent ? 'opacity-100' : 'opacity-0'}`}
        ref={tooltipRef}
      >
        <Disclaimer size="small" variant="info">
          <div className="flex gap-2">
            <ExclamationCircle className="w-5 text-blue-600" />
            <p className="w-full flex-1">{content}</p>
          </div>
        </Disclaimer>
      </div>
      {children}
    </div>
  )
}
