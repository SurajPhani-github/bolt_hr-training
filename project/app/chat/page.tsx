"use client"

import { useState, useRef, FormEvent } from 'react'
import { useChat } from '@/lib/hooks/use-chat'
import { MessageItem } from '@/components/chat/message-item'
import { Paperclip, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

export default function ChatPage() {
  const { messages, isLoading, addMessage } = useChat()
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (input.trim() && !isLoading) {
      addMessage(input)
      setInput('')
      
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }
  
  // Handle textarea height
  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }
  
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Chat header */}
      <div className="border-b py-3 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">AI Training Assistant</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Start New Chat
            </Button>
          </div>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="space-y-4 max-w-3xl mx-auto">
          {messages.map((message, index) => (
            <MessageItem
              key={message.id}
              content={message.content}
              role={message.role}
              timestamp={message.timestamp}
              isLatest={index === messages.length - 1}
            />
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-3 max-w-[80%] rounded-tl-none">
                <div className="flex space-x-2 items-center">
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Chat input */}
      <div className="border-t bg-card p-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onInput={handleInput}
              placeholder="Type your message..."
              className={cn(
                "min-h-[80px] max-h-[200px] resize-none border-0 py-3 pr-14 focus-visible:ring-0 text-base",
                isLoading && "opacity-50 cursor-not-allowed"
              )}
              disabled={isLoading}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
            />
            
            <div className="absolute right-2 bottom-2 flex gap-2">
              <Button 
                type="button" 
                size="icon" 
                variant="ghost"
                className="h-9 w-9 rounded-full"
                disabled={isLoading}
              >
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Attach a file</span>
              </Button>
              <Button 
                type="submit" 
                size="icon"
                className="h-9 w-9 rounded-full"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
          
          <p className="mt-2 text-xs text-center text-muted-foreground">
            TrainWise AI Assistant can help answer your questions about professional development and training resources.
          </p>
        </form>
      </div>
    </div>
  )
}