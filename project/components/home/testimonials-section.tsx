"use client"

import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])
  
  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? TESTIMONIALS.length - 1 : current - 1
    )
  }
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length)
  }
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our community of trainers and trainees.
          </p>
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-primary/5 to-primary/10 p-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4 md:p-8">
                  <Card className="border-none bg-transparent shadow-none">
                    <CardContent className="pt-6 px-0 flex flex-col items-center text-center">
                      <Quote className="h-10 w-10 text-primary/40 mb-4" />
                      <p className="text-lg md:text-xl mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <Avatar className="h-16 w-16 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  activeIndex === index ? 'bg-primary w-4' : 'bg-muted'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow controls */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-background transition-colors border border-border"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-background transition-colors border border-border"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}