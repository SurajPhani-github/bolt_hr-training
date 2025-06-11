import { FEATURES } from '@/lib/constants'
import { Brain, Users, FileText, MessageSquare } from 'lucide-react'

const iconMap = {
  Brain,
  Users,
  FileText,
  MessageSquare,
}

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Reimagine Professional Development
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines the best of AI technology with human expertise to deliver exceptional training experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Brain
            
            return (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px] border border-border/40"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}