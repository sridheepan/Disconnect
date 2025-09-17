import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dysconnect - Creative Hobbies Delivered',
  description:
    'Discover the joy of hands-on creativity with monthly craft kits delivered to your door.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='min-h-screen bg-background'>
            <nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                  <div className='flex items-center'>
                    <Link href='/'>
                      <h1 className='text-2xl font-bold bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-mint bg-clip-text text-transparent cursor-pointer'>
                        DYSCONNECT
                      </h1>
                    </Link>
                  </div>
                  <div className='hidden md:flex items-center space-x-8'>
                    <a
                      href='#explore'
                      className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                      Explore
                    </a>
                    <a
                      href='/subscription'
                      className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                      Plans
                    </a>
                    <a
                      href='#tutorials'
                      className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                      Tutorials
                    </a>
                    <a
                      href='#about'
                      className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                      About
                    </a>
                    <a
                      href='#contact'
                      className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                      Contact
                    </a>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <a
                      href='/subscription'
                      className='bg-brand-coral hover:bg-brand-coral/90 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors'>
                      Subscribe
                    </a>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </nav>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
