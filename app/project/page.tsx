import { projectSectionData } from '@/data/project-section/v1/list-page';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectSection } from '@/src/sections/project/v1';
import { Metadata } from 'next';
import bannerImage from 'public/assets/images/hero/hero-3.jpg';

export const metadata: Metadata = {
  title: 'Encodix | Project',
  description: 'Encodix - Discover the Best with Encodix',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Project"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Project',
          },
        ]}
        heroImageUrl={bannerImage.src}
      />
      <ProjectSection {...projectSectionData} />
      <Footer />
    </>
  );
}
