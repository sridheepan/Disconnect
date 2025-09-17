import { HeroSection } from '@/components/hero-section';
import { MonthlyKitsSection } from '@/components/monthly-kits-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { PricingPreviewSection } from '@/components/pricing-preview-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MonthlyKitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <Footer />
    </>
  );
}
