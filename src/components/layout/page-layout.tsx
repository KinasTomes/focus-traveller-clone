'use client';

import type { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import Link from 'next/link';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
