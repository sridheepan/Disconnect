import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className='bg-muted/50 border-t'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Newsletter Section */}
        <div className='py-12 border-b border-border'>
          <div className='max-w-2xl mx-auto text-center space-y-4'>
            <h3 className='text-2xl font-bold text-foreground'>Stay Creative</h3>
            <p className='text-muted-foreground'>
              Get craft inspiration, tutorials, and exclusive offers delivered to your inbox
            </p>
            <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
              <Input type='email' placeholder='Enter your email' className='flex-1' />
              <Button className='bg-brand-coral hover:bg-brand-coral/90 text-white px-6'>
                Subscribe
              </Button>
            </div>
            <p className='text-xs text-muted-foreground'>No spam, unsubscribe at any time</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='py-12 grid grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='col-span-2 md:col-span-1 space-y-4'>
            <div className='flex items-center space-x-2'>
              <h4 className='text-lg font-bold bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-mint bg-clip-text text-transparent'>
                DYSCONNECT
              </h4>
            </div>
            <p className='text-sm text-muted-foreground'>
              Inspiring creativity through carefully curated craft kits delivered to your door.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-muted-foreground hover:text-brand-coral transition-colors'>
                <span className='sr-only'>Facebook</span>
                <span className='text-xl'>📘</span>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-brand-coral transition-colors'>
                <span className='sr-only'>Instagram</span>
                <span className='text-xl'>📷</span>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-brand-coral transition-colors'>
                <span className='sr-only'>Pinterest</span>
                <span className='text-xl'>📌</span>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-brand-coral transition-colors'>
                <span className='sr-only'>YouTube</span>
                <span className='text-xl'>📺</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className='space-y-4'>
            <h4 className='font-semibold text-foreground'>Explore</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  All Kits
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Beginner Friendly
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Advanced Projects
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Seasonal Crafts
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Gift Ideas
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className='space-y-4'>
            <h4 className='font-semibold text-foreground'>Support</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Community
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className='space-y-4'>
            <h4 className='font-semibold text-foreground'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Press
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'>
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='text-sm text-muted-foreground'>
            © 2025 Dysconnect. All rights reserved.
          </div>
          <div className='flex space-x-6 text-sm'>
            <a href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
              Terms of Service
            </a>
            <a href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
