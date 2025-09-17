import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const steps = [
  {
    step: 1,
    title: "Choose Your Plan",
    description: "Select from our flexible subscription plans that fit your creative schedule and budget",
    icon: "📋",
    color: "brand-coral"
  },
  {
    step: 2,
    title: "Receive Your Kit",
    description: "Get a carefully curated craft kit delivered to your door with all materials and instructions",
    icon: "📦",
    color: "brand-yellow"
  },
  {
    step: 3,
    title: "Create & Share",
    description: "Follow along with our step-by-step tutorials and share your creations with our community",
    icon: "🎨",
    color: "brand-mint"
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with your creative journey is simple
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-${step.color}/20 flex items-center justify-center mb-4`}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className={`w-8 h-8 mx-auto rounded-full bg-${step.color} text-white flex items-center justify-center text-sm font-bold mb-4`}>
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              
              {/* Arrow connector (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-brand-coral/30"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-brand-coral/30 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-background/80 px-4 py-2 rounded-full">
            <span className="text-brand-mint">✓</span>
            <span>No commitment • Cancel anytime • Free shipping</span>
          </div>
        </div>
      </div>
    </section>
  )
}
