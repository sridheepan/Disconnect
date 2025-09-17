import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Portland, OR",
    quote: "Dysconnect has reignited my passion for creating. Each kit is thoughtfully curated with high-quality materials and clear instructions.",
    rating: 5,
    avatar: "👩‍🎨"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Austin, TX",
    quote: "As someone who travels frequently, having creative projects delivered to my door is perfect. The tutorials are fantastic!",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Seattle, WA",
    quote: "I've tried so many new crafts through Dysconnect. It's like having a personal art teacher guiding me through each project.",
    rating: 5,
    avatar: "👩‍🏫"
  },
  {
    id: 4,
    name: "David Kim",
    location: "Denver, CO",
    quote: "The quality of materials is exceptional. I've created pieces I'm genuinely proud to display in my home.",
    rating: 5,
    avatar: "👨‍🎨"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            What Our Creators Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy crafters who've discovered their creative potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-brand-yellow text-sm">★</span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-coral/20 to-brand-mint/20 flex items-center justify-center">
                      <span className="text-lg">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-brand-coral">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Crafters</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-yellow">200+</div>
            <div className="text-sm text-muted-foreground">Unique Kits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-mint">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-coral">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
