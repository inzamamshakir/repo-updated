import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';
import bannerImage from 'public/assets/images/hero/hero-3.jpg';

export const metadata: Metadata = {
  title: 'Encodix | Faq',
  description: 'Encodix - Discover the Best with Encodix',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Faq"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Faq',
          },
        ]}
        heroImageUrl={bannerImage.src}
      />
      <FAQSection />
      <Footer />
    </>
  );
}
