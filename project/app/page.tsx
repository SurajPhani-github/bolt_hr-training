import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { INDUSTRY_CATEGORIES, MOCK_RESOURCES } from "@/lib/constants"
import { ResourceCard } from "@/components/cards/resource-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  // Only show 3 resources on the homepage
  const featuredResources = MOCK_RESOURCES.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      
      {/* Featured Resources Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Featured Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Discover our most popular training materials across various industries.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/resources" className="flex items-center">
                View all resources
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Ready to Transform Your Training Experience?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals who are advancing their careers with TrainWise AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/register">Sign Up Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/chat">Try AI Assistant</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}