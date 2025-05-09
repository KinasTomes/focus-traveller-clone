'use client';

import { FeatureSection } from './feature-section';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export const FeaturesContainer = () => {
  const { t } = useTranslation();
  
  return (
    <section>
      {/* First Feature: Tap and Focus */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title={t('feature1Title')}
          description={t('feature1Description')}
          imageSrc="https://ext.same-assets.com/3301080306/1445771840.png"
          imageAlt="Tap and Focus Feature"
          isReversed={false}
        />
      </motion.div>

      {/* Second Feature: Focus Data */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title={t('feature2Title')}
          description={t('feature2Description')}
          imageSrc="https://ext.same-assets.com/3301080306/2970540652.png"
          imageAlt="Focus Data Feature"
          isReversed={true}
        />
      </motion.div>

      {/* Third Feature: Your Traveller */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title={t('feature3Title')}
          description={t('feature3Description')}
          imageSrc="https://ext.same-assets.com/3301080306/554104015.gif"
          imageAlt="Your Traveller Feature"
          isReversed={false}
          isAnimated={true}
        />
      </motion.div>

      {/* Fourth Feature: Achievement */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title={t('feature4Title')}
          description={t('feature4Description')}
          imageSrc="https://ext.same-assets.com/3301080306/3337973433.png"
          imageAlt="Achievement Feature"
          isReversed={true}
        />
      </motion.div>
    </section>
  );
};
