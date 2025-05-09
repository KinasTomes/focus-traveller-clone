'use client';

import { PageLayout } from '@/components/layout/page-layout';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { ChatBox } from '@/components/chat/chat-box';

export default function InfoPage() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background image with blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/test.jpg')",
            filter: "blur(50%)",
            opacity: 0.5
          }}
        />
        
        <div className="container-flex py-12 relative z-10 max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-6"
          >
            <h1 className="text-3xl font-bold text-[#5f635e] text-center mb-8">
              {t('infoTitle')}
            </h1>
            <div className="text-lg text-[#5f635e] space-y-4">
              <p className="text-justify whitespace-pre-line">{t('infoContent')}</p>
            </div>
          </motion.div>
        </div>
        <ChatBox />
      </div>
    </PageLayout>
  );
} 