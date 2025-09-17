import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    id: 1,
    name: 'Monthly Box',
    description: 'Perfect for trying new crafts',
    price: '$29',
    period: '/month',
    features: [
      '1 premium craft kit per month',
      'All materials included',
      'Step-by-step video tutorials',
      'Community access',
      'Free shipping',
    ],
    popular: false,
    buttonText: 'Start Monthly Plan',
  },
  {
    id: 2,
    name: 'Quarterly Box',
    description: 'Best value for regular crafters',
    price: '$25',
    period: '/month',
    originalPrice: '$29',
    features: [
      '1 premium craft kit per month',
      'All materials included',
      'Step-by-step video tutorials',
      'Priority community support',
      'Free shipping',
      'Exclusive quarterly bonus kit',
    ],
    popular: true,
    buttonText: 'Start Quarterly Plan',
  },
];

export function PricingPreviewSection() {
  return (
    <section className='py-20 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-foreground'>
            Choose Your Creative Journey
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Flexible plans designed to fit your lifestyle and budget
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-brand-coral shadow-lg scale-105' : ''
              }`}>
              {plan.popular && (
                <Badge className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-coral text-white px-4 py-1'>
                  Most Popular
                </Badge>
              )}

              <CardHeader className='text-center pb-8'>
                <CardTitle className='text-2xl'>{plan.name}</CardTitle>
                <CardDescription className='text-base'>{plan.description}</CardDescription>

                <div className='pt-4'>
                  <div className='flex items-center justify-center space-x-2'>
                    {plan.originalPrice && (
                      <span className='text-lg text-muted-foreground line-through'>
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className='text-4xl font-bold text-brand-coral'>{plan.price}</span>
                    <span className='text-muted-foreground'>{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className='text-sm text-brand-mint font-medium mt-1'>
                      Save $4/month with quarterly billing
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className='space-y-6'>
                <ul className='space-y-3'>
                  {plan.features.map((feature, index) => (
                    <li key={index} className='flex items-center space-x-3'>
                      <span className='text-brand-mint'>✓</span>
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-11 rounded-2xl px-8 py-3 ${
                    plan.popular
                      ? 'bg-brand-coral hover:bg-brand-coral/90 text-white'
                      : 'bg-brand-yellow hover:bg-brand-yellow/90 text-white'
                  }`}>
                  {plan.buttonText}
                </Button>

                <div className='text-center text-xs text-muted-foreground'>
                  Cancel anytime • No commitment
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button className='text-brand-coral underline-offset-4 hover:underline bg-transparent hover:bg-transparent'>
            View All Plans & Pricing →
          </Button>
        </div>

        {/* Money-back guarantee */}
        <div className='mt-16 text-center'>
          <div className='inline-flex items-center space-x-3 bg-background/80 px-6 py-3 rounded-full border border-border'>
            <span className='text-2xl'>🛡️</span>
            <div className='text-left'>
              <div className='font-semibold text-sm'>30-Day Money-Back Guarantee</div>
              <div className='text-xs text-muted-foreground'>
                Not satisfied? Get a full refund, no questions asked.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
