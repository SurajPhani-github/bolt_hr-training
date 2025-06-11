"use client"

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type MessageProps = {
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
  isLatest?: boolean
}

export function MessageItem({ content, role, timestamp, isLatest }: MessageProps) {
  const messageRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (isLatest && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLatest])
  
  const isAssistant = role === 'assistant'
  
  return (
    <motion.div
      ref={messageRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-full mb-4 items-start",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      {isAssistant && (
        <Avatar className="h-8 w-8 mr-3">
          <AvatarImage src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\" alt="AI Assistant" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "px-4 py-3 rounded-lg max-w-[80%]",
          isAssistant 
            ? "bg-secondary text-secondary-foreground rounded-tl-none" 
            : "bg-primary text-primary-foreground rounded-tr-none"
        )}
      >
        <p className="whitespace-pre-line">{content}</p>
        <div className={cn(
          "text-xs mt-1 opacity-70",
          isAssistant ? "text-secondary-foreground" : "text-primary-foreground"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {!isAssistant && (
        <Avatar className="h-8 w-8 ml-3">
          <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  )
}