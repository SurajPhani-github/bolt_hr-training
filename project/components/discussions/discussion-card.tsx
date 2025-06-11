import Link from 'next/link'
import { MessageSquare, Eye, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type DiscussionCardProps = {
  id: string
  title: string
  author: string
  authorAvatar: string
  date: string
  category: string
  replies: number
  views: number
  excerpt: string
}

export function DiscussionCard({
  id,
  title,
  author,
  authorAvatar,
  date,
  category,
  replies,
  views,
  excerpt,
}: DiscussionCardProps) {
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="bg-card rounded-lg border border-border/50 p-5 transition-all hover:border-border hover:shadow-sm">
      <Link href={`/discussions/${id}`}>
        <h3 className="text-xl font-medium mb-2 transition-colors hover:text-primary">
          {title}
        </h3>
      </Link>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {excerpt}
      </p>
      
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src={authorAvatar} alt={author} />
          <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <span className="font-medium">{author}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <Badge variant="secondary" className="rounded-full">
          {category}
        </Badge>
        
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>{replies} replies</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          <Eye className="h-3.5 w-3.5" />
          <span>{views} views</span>
        </div>
      </div>
    </div>
  )
}