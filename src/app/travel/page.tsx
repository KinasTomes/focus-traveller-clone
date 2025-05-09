'use client';

import { PageLayout } from '@/components/layout/page-layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

const CHECKPOINTS = [
  {
    id: 1,
    titleKey: 'checkpoint1Title',
    descriptionKey: 'checkpoint1Description',
    position: 0,
  },
  {
    id: 2,
    titleKey: 'checkpoint2Title',
    descriptionKey: 'checkpoint2Description',
    position: 25,
  },
  {
    id: 3,
    titleKey: 'checkpoint3Title',
    descriptionKey: 'checkpoint3Description',
    position: 50,
  },
  {
    id: 4,
    titleKey: 'checkpoint4Title',
    descriptionKey: 'checkpoint4Description',
    position: 75,
  },
  {
    id: 5,
    titleKey: 'checkpoint5Title',
    descriptionKey: 'checkpoint5Description',
    position: 100,
  },
];

export default function TravelPage() {
  const { t } = useTranslation();
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const [showDialog, setShowDialog] = useState(true);

  const handleNext = () => {
    if (currentCheckpoint < CHECKPOINTS.length - 1) {
      setShowDialog(false);
      setTimeout(() => {
        setCurrentCheckpoint(prev => prev + 1);
        setShowDialog(true);
      }, 500);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container-flex py-12 relative z-10 max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="handwritten text-5xl font-bold text-[#5f635e]">{t('travelTitle')}</h1>
              
              {/* Dialog box */}
              {showDialog && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg max-h-[500px] overflow-y-auto w-full"
                >
                  <motion.h3 
                    className="text-xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.4
                    }}
                  >
                    {t(CHECKPOINTS[currentCheckpoint].titleKey)}
                  </motion.h3>
                  <motion.div 
                    className="text-[#5f635e] whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.6
                    }}
                  >
                    {t(CHECKPOINTS[currentCheckpoint].descriptionKey)}
                  </motion.div>
                </motion.div>
              )}

              {/* Go button */}
              {currentCheckpoint === CHECKPOINTS.length - 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.8
                  }}
                >
                  <Link
                    href="/questions"
                    className="inline-block px-6 py-3 bg-[#b49656] text-white rounded-full hover:bg-[#866a43] transition-colors"
                  >
                    {t('finishJourneyButton')}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.8
                  }}
                >
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-[#b49656] text-white rounded-full hover:bg-[#866a43] transition-colors"
                  >
                    {t('continueButton')}
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right side - Character */}
            <div className="relative h-[600px]">
              {/* Character */}
              <div className="absolute right-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/character.png"
                  alt="Character"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 