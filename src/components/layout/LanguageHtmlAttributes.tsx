'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export const LanguageHtmlAttributes = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  // This component doesn't render anything visible
  return null;
}; 