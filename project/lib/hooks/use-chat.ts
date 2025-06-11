"use client"

import { useState } from 'react'

type Message = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you with your professional development or training needs today?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    }
    
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    
    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(content),
        role: 'assistant',
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return {
    messages,
    isLoading,
    addMessage,
  }
}

// Simple mock AI response function
function getAIResponse(message: string): string {
  const responses = [
    "I've found several resources that might help with that. Would you like me to share them?",
    "That's a great question about professional development. Here's what I suggest...",
    "Based on your industry interests, I recommend exploring our leadership courses.",
    "I can help you find the right training for that skill. Let me know your experience level.",
    "Several of our trainers specialize in that area. Would you like me to connect you?",
    "Have you checked our latest resources on that topic? There was a webinar last week that addresses this.",
    "That's a common challenge in the workplace. Our conflict resolution module might be helpful.",
    "I understand your concern. Many professionals in your field have similar questions.",
  ]
  
  return responses[Math.floor(Math.random() * responses.length)]
}