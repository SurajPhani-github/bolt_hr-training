import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { INDUSTRY_CATEGORIES } from '@/lib/constants'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background pb-16 pt-[7.5rem]">
      {/* Abstract background gradient */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight tracking-tight mb-4">
            Elevate Your Workforce with <span className="text-primary">AI-Powered</span> Training
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
            Connect with expert trainers, access industry-specific resources, and leverage AI to accelerate professional growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/register">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
        
        {/* Industry categories */}
        <div className="mt-12 mb-6">
          <h3 className="text-center text-lg font-medium mb-6">Specialized Training Across Industries</h3>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {INDUSTRY_CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                href={`/resources?industry=${category.id}`}
                className="px-4 py-2 bg-secondary/80 hover:bg-secondary text-secondary-foreground rounded-full text-sm font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Hero image */}
        <div className="mt-12 relative mx-auto max-w-5xl rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-[16/9]">
            <img 
              src="https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Professionals in a modern training environment" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-8">
            <p className="text-white text-lg md:text-xl font-medium max-w-2xl">
              "TrainWise AI has transformed our approach to professional development across departments."
            </p>
            <p className="text-white/80 mt-2">
              — Global HR Director, Fortune 500 Company
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}