'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FlagButton } from '@/components/ui/FlagButton';
import { useTranslation } from '@/hooks/useTranslation';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-transparent py-6">
      <div className="container-flex flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#5f635e]">
            IVF
          </Link>
          <div className="flex items-center ml-[50px] space-x-4">
            <img src="/images/logo1.webp" className="w-8 h-8 rounded-full" alt="Logo 1" />
            <img src="/images/logo2.jpg" className="w-8 h-8 rounded-full" alt="Logo 2" />
            <img src="/images/logo3.png" className="w-8 h-8 rounded-full" alt="Logo 3" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            {t('about')}
          </Link>
          <Link
            href="/travel"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            {t('travel')}
          </Link>
          <Link
            href="/questions"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            {t('test')}
          </Link>
          <FlagButton />
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background shadow-md md:hidden z-50">
            <div className="container-flex py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="/travel"
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('travel')}
              </Link>
              <Link
                href="/questions"
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('test')}
              </Link>
              <div className="flex justify-center">
                <FlagButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
