'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export const FlagButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-10 h-6 rounded-md overflow-hidden shadow-sm hover:opacity-90 transition-opacity duration-200 bg-white"
      aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
    >
      {language === 'vi' ? (
        <svg viewBox="0 0 900 600" className="w-full h-full">
          <rect width="900" height="600" fill="#da251d" />
          <polygon points="450,150 500,300 350,230 550,230 400,300" fill="#ffff00" />
        </svg>
      ) : (
        <svg viewBox="0 0 60 30" className="w-full h-full">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      )}
    </button>
  );
};