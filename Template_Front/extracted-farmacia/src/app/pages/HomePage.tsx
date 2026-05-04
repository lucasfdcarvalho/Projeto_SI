import { Categories } from '@/app/components/Categories';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { BenefitsSection } from '@/app/components/home/BenefitsSection';
import { CTASection } from '@/app/components/home/CTASection';
import { FeaturedProducts } from '@/app/components/home/FeaturedProducts';
import { HomeIntro } from '@/app/components/home/HomeIntro';
import { HomePromotions } from '@/app/components/home/HomePromotions';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <Categories />
      <FeaturedProducts />
      <HomePromotions />
      <BenefitsSection />
      <Services />
      <CTASection />
    </>
  );
}
