'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 700,
  className = '',
  threshold = 0.15
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left': return 'translateX(-60px)'
        case 'right': return 'translateX(60px)'
        case 'up': return 'translateY(50px)'
        case 'down': return 'translateY(-50px)'
        case 'scale': return 'scale(0.95)'
        default: return 'translateY(50px)'
      }
    }
    return 'translateX(0) translateY(0) scale(1)'
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
