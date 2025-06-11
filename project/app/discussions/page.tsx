"use client"

import { useState } from 'react'
import { MOCK_DISCUSSIONS, INDUSTRY_CATEGORIES } from '@/lib/constants'
import { DiscussionCard } from '@/components/discussions/discussion-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  MessageSquare, 
  Plus,
  TrendingUp, 
  Clock,
  X
} from 'lucide-react'

// Add discussion categories based on the mocked data
const DISCUSSION_CATEGORIES = [
  { id: 'all', name: 'All Categories' },
  { id: 'Remote Work', name: 'Remote Work' },
  { id: 'Healthcare', name: 'Healthcare' },
  { id: 'Compliance', name: 'Compliance' },
  { id: 'Leadership', name: 'Leadership' },
]

export default function DiscussionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recent')
  const [filteredDiscussions, setFilteredDiscussions] = useState(MOCK_DISCUSSIONS)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  
  // Apply filters whenever any filter state changes
  useState(() => {
    let filtered = [...MOCK_DISCUSSIONS]
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        discussion => discussion.category === selectedCategory
      )
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        discussion => 
          discussion.title.toLowerCase().includes(query) || 
          discussion.excerpt.toLowerCase().includes(query) ||
          discussion.author.toLowerCase().includes(query)
      )
    }
    
    // Sort the discussions
    if (sortBy === 'recent') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === 'popular') {
      filtered.sort((a, b) => b.views - a.views)
    }
    
    setFilteredDiscussions(filtered)
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Community Discussions
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect with peers, share insights, and solve challenges together
          </p>
        </div>
        
        <div className="flex gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            className="md:hidden"
          >
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button asChild>
            <a href="#new-discussion" className="hidden md:flex items-center gap-1">
              <Plus className="h-4 w-4" />
              New Discussion
            </a>
          </Button>
        </div>
      </div>
      
      {/* Mobile action button */}
      <div className="md:hidden fixed bottom-6 right-6 z-10">
        <Button size="lg" className="h-14 w-14 rounded-full shadow-lg">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="hidden lg:block space-y-6">
          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-1">
              {DISCUSSION_CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm font-normal"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Popular Industries</h3>
            <div className="space-y-1">
              {INDUSTRY_CATEGORIES.slice(0, 5).map((industry) => (
                <Button
                  key={industry.id}
                  variant="ghost"
                  className="w-full justify-start text-sm font-normal"
                >
                  {industry.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="bg-secondary/40 rounded-lg p-4">
            <h3 className="font-medium mb-2">Start a Discussion</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Share your questions, insights, and challenges with our professional community.
            </p>
            <Button className="w-full" asChild>
              <a href="#new-discussion">
                <Plus className="h-4 w-4 mr-1" />
                New Discussion
              </a>
            </Button>
          </div>
        </div>
        
        {/* Mobile tabs */}
        <div className="lg:hidden mb-4">
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
            <div className="flex items-center justify-between mb-2">
              <TabsList className="w-full h-auto overflow-x-auto justify-start p-1">
                {DISCUSSION_CATEGORIES.slice(0, 4).map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-3 py-1.5">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <Button
                variant={sortBy === 'recent' ? "secondary" : "ghost"}
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setSortBy('recent')}
              >
                <Clock className="h-4 w-4" />
                Recent
              </Button>
              <Button
                variant={sortBy === 'popular' ? "secondary" : "ghost"}
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setSortBy('popular')}
              >
                <TrendingUp className="h-4 w-4" />
                Popular
              </Button>
            </div>
          </div>
        </div>
        
        {/* Discussions */}
        <div className="lg:col-span-3">
          {/* Sort controls - Desktop */}
          <div className="hidden lg:flex justify-between items-center mb-6">
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Button
                variant="ghost"
                size="sm"
                className={`${sortBy === 'recent' ? 'text-primary font-medium' : ''}`}
                onClick={() => setSortBy('recent')}
              >
                Recent
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`${sortBy === 'popular' ? 'text-primary font-medium' : ''}`}
                onClick={() => setSortBy('popular')}
              >
                Popular
              </Button>
            </div>
            
            <Badge variant="outline" className="flex items-center">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              {filteredDiscussions.length} discussions
            </Badge>
          </div>
          
          {filteredDiscussions.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No discussions found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <DiscussionCard key={discussion.id} {...discussion} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}