'use client';

import Link from 'next/link';
import Image from 'next/image';

export const AppStoreButton = () => {
  return (
    <Link
      href="https://apps.apple.com/tw/app/focus-traveller-mind-tracker/id1559730367?l=en"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:opacity-90 transition-opacity"
    >
      <img
        src="https://ext.same-assets.com/3301080306/3261214496.svg"
        alt="Download on the App Store"
        className="h-10 w-auto"
      />
    </Link>
  );
};
