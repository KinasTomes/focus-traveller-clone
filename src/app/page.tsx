import { PageLayout } from '@/components/layout/page-layout';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturesContainer } from '@/components/home/features-container';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesContainer />
      {/* Quote section removed as requested */}
    </PageLayout>
  );
}
