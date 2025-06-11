"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Clock, BookOpen, Video, FileText, Download, Bookmark, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

type ResourceCardProps = {
  id: string
  title: string
  description: string
  category: string
  industry: string
  type: string
  duration: string
  author: string
  image: string
  className?: string
}

export function ResourceCard({
  id,
  title,
  description,
  category,
  industry,
  type,
  duration,
  author,
  image,
  className,
}: ResourceCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  
  const typeIcon = {
    'course': <BookOpen className="h-4 w-4" />,
    'video': <Video className="h-4 w-4" />,
    'document': <FileText className="h-4 w-4" />,
    'webinar': <Video className="h-4 w-4" />,
    'workshop': <BookOpen className="h-4 w-4" />,
    'certification': <FileText className="h-4 w-4" />,
  }[type] || <FileText className="h-4 w-4" />

  return (
    <div className={cn(
      "group bg-card rounded-lg overflow-hidden border border-border/50 transition-all hover:shadow-md hover:border-border",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
          <div>
            <Badge className="mb-2 bg-primary/80 hover:bg-primary">
              {industry.charAt(0).toUpperCase() + industry.slice(1)}
            </Badge>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background transition-colors"
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <Bookmark 
                    className={cn(
                      "h-4 w-4 transition-colors", 
                      isSaved ? "fill-primary text-primary" : "text-primary-foreground"
                    )} 
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isSaved ? 'Saved' : 'Save for later'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <div className="flex items-center">
            {typeIcon}
            <span className="ml-1 capitalize">{type}</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {duration}
          </div>
        </div>
        
        <Link href={`/resources/${id}`}>
          <h3 className="text-xl font-medium leading-tight mb-2 transition-colors hover:text-primary">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
          <div className="text-sm text-muted-foreground">
            By <span className="text-foreground font-medium">{author}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 px-3 flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Download</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}