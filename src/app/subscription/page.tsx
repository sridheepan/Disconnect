import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check, Gift } from 'lucide-react';

export default function SubscriptionPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background to-muted/30'>
      {/* Hero Banner */}
      <section className='py-20 lg:py-32'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl lg:text-6xl font-bold leading-tight mb-6'>
            Choose Your <span className='text-brand-coral'>Creative Journey</span>
          </h1>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
            Unlock your design potential with our carefully curated UI kits and templates
          </p>
          <div className='flex items-center justify-center space-x-2 text-brand-mint'>
            <Check className='h-5 w-5' />
            <span className='text-sm font-medium'>30-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Basic Plan */}
            <Card className='relative'>
              <CardHeader className='text-center'>
                <CardTitle className='text-2xl'>Basic Plan</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className='mt-4'>
                  <span className='text-4xl font-bold'>$29</span>
                  <span className='text-muted-foreground'>/month</span>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='text-center text-sm text-muted-foreground mb-6'>
                  5 UI kits per month
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Basic templates library</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Email support</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Commercial license</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Start Basic Plan</Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className='relative border-brand-coral'>
              <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                <Badge variant='coral'>Most Popular</Badge>
              </div>
              <CardHeader className='text-center'>
                <CardTitle className='text-2xl'>Premium Plan</CardTitle>
                <CardDescription>For serious designers</CardDescription>
                <div className='mt-4'>
                  <span className='text-4xl font-bold'>$59</span>
                  <span className='text-muted-foreground'>/month</span>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='text-center text-sm text-muted-foreground mb-6'>
                  10 UI kits per month
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Premium templates library</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Priority support</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Extended commercial license</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Early access to new releases</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Check className='h-4 w-4 text-brand-mint' />
                    <span className='text-sm'>Design system templates</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Start Premium Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Gift Option Section */}
      <section className='py-16 bg-gradient-to-r from-brand-yellow/10 to-brand-mint/10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Card className='text-center'>
            <CardHeader>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-brand-yellow/20 rounded-full'>
                  <Gift className='h-8 w-8 text-brand-yellow' />
                </div>
              </div>
              <CardTitle className='text-2xl'>Give the Gift of Creativity</CardTitle>
              <CardDescription className='text-lg'>
                Share the power of great design with someone special
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-4 text-sm'>
                <div className='flex items-center space-x-3'>
                  <Check className='h-4 w-4 text-brand-mint' />
                  <span>Perfect for designers and creatives</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Check className='h-4 w-4 text-brand-mint' />
                  <span>Beautiful gift certificate delivery</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Check className='h-4 w-4 text-brand-mint' />
                  <span>Flexible gift duration options</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Check className='h-4 w-4 text-brand-mint' />
                  <span>Instant or scheduled delivery</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className='justify-center'>
              <Button variant='secondary' className='px-8'>
                Purchase Gift Subscription
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Frequently Asked Questions</h2>
            <p className='text-muted-foreground'>
              Everything you need to know about our subscription plans
            </p>
          </div>
          <Accordion type='single' collapsible className='space-y-4'>
            <AccordionItem value='item-1' className='border rounded-lg px-6'>
              <AccordionTrigger className='text-left'>
                Can I cancel my subscription anytime?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can cancel your subscription at any time. There are no cancellation fees or
                long-term commitments. Your subscription will remain active until the end of your
                current billing period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3' className='border rounded-lg px-6'>
              <AccordionTrigger className='text-left'>
                Can I upgrade or downgrade my plan?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! You can upgrade or downgrade your plan at any time. When upgrading,
                you'll get immediate access to premium features. When downgrading, changes take
                effect at your next billing cycle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-4' className='border rounded-lg px-6'>
              <AccordionTrigger className='text-left'>Do you offer refunds?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day money-back guarantee for all new subscriptions. If you're not
                satisfied with our service within the first 30 days, we'll provide a full refund, no
                questions asked.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
