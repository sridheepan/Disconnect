import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className='relative bg-gradient-to-br from-background to-muted/30 py-20 lg:py-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-4xl lg:text-6xl font-bold leading-tight'>
                Disconnect to <span className='text-brand-coral'>Reconnect</span> –{' '}
                <span className='block'>Creative Hobbies Delivered</span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg'>
                Discover the joy of hands-on creativity with monthly craft kits delivered to your
                door. Each box contains everything you need to create something beautiful.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button className='px-8 py-6'>Start Creating Today</Button>
              <Button variant='secondary' className='px-8 py-6'>
                View Sample Kits
              </Button>
            </div>
            <div className='flex items-center space-x-8 text-sm text-muted-foreground'>
              <div className='flex items-center space-x-2'>
                <span className='text-brand-mint'>✓</span>
                <span>Free shipping</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-brand-mint'>✓</span>
                <span>Cancel anytime</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-brand-mint'>✓</span>
                <span>Premium materials</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
            <div className='aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl'>
              {/* <div className='absolute inset-0 bg-gradient-to-br from-brand-coral/10 to-brand-mint/10 z-50' /> */}
              <Image
                src='/hero-image.png'
                alt='Craft supplies organized on a blue pegboard with various tools, brushes, and materials'
                fill
                className='object-cover rounded-2xl'
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow/20 rounded-full blur-xl' />
            <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-brand-mint/20 rounded-full blur-xl' />
          </div>
        </div>
      </div>
    </section>
  );
}
