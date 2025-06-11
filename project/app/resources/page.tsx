"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { MOCK_RESOURCES, INDUSTRY_CATEGORIES } from '@/lib/constants'
import { ResourceCard } from '@/components/cards/resource-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const RESOURCE_TYPES = [
  { id: 'all', name: 'All Types' },
  { id: 'course', name: 'Courses' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'certification', name: 'Certifications' },
  { id: 'document', name: 'Documents' },
  { id: 'video', name: 'Videos' },
]

export default function ResourcesPage() {
  const searchParams = useSearchParams()
  const initialIndustry = searchParams.get('industry') || 'all'
  
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustry)
  const [selectedType, setSelectedType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filteredResources, setFilteredResources] = useState(MOCK_RESOURCES)

  useEffect(() => {
    let filtered = [...MOCK_RESOURCES]
    
    // Filter by industry
    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(resource => resource.industry === selectedIndustry)
    }
    
    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(resource => resource.type === selectedType)
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        resource => 
          resource.title.toLowerCase().includes(query) || 
          resource.description.toLowerCase().includes(query) ||
          resource.author.toLowerCase().includes(query)
      )
    }
    
    setFilteredResources(filtered)
  }, [selectedIndustry, selectedType, searchQuery])

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Training Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive library of professional development materials
          </p>
        </div>
        
        <div className="flex gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search resources..."
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
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters - Desktop */}
        <div className="hidden md:block space-y-6">
          <div>
            <h3 className="font-medium mb-3 flex items-center">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Industry
                </label>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {INDUSTRY_CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Resource Type
                </label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {RESOURCE_TYPES.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Applied filters */}
          {(selectedIndustry !== 'all' || selectedType !== 'all' || searchQuery) && (
            <div>
              <h3 className="text-sm font-medium mb-2">Applied Filters</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIndustry !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {INDUSTRY_CATEGORIES.find(c => c.id === selectedIndustry)?.name}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSelectedIndustry('all')}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}
                {selectedType !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {RESOURCE_TYPES.find(t => t.id === selectedType)?.name}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSelectedType('all')}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    "{searchQuery}"
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSearchQuery('')}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile filters */}
        {isFilterOpen && (
          <div className="md:hidden bg-card p-4 rounded-lg border mb-4">
            <h3 className="font-medium mb-3 flex items-center justify-between">
              <span className="flex items-center">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsFilterOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Industry
                </label>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {INDUSTRY_CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Resource Type
                </label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {RESOURCE_TYPES.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full" onClick={() => setIsFilterOpen(false)}>
                Apply Filters
              </Button>
            </div>
          </div>
        )}
        
        {/* Resources Grid */}
        <div className="lg:col-span-3">
          {/* Mobile tabs */}
          <div className="block md:hidden mb-6">
            <Tabs defaultValue="all" value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <TabsList className="w-full h-auto overflow-x-auto justify-start p-1">
                <TabsTrigger value="all" className="px-3 py-1.5">
                  All
                </TabsTrigger>
                {INDUSTRY_CATEGORIES.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-3 py-1.5">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {filteredResources.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedIndustry('all')
                  setSelectedType('all')
                  setSearchQuery('')
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}