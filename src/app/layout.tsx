import type { Metadata } from "next";
import { Jaldi, DM_Sans, Vollkorn, Bitter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import ClientBody from "./ClientBody";

// Define fonts used in the original site
const jaldi = Jaldi({
  weight: ['400', '700'],
  variable: "--font-jaldi",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const vollkorn = Vollkorn({
  weight: ['400', '500', '700'],
  variable: "--font-vollkorn",
  subsets: ["latin"],
});

const bitter = Bitter({
  weight: ['400', '500', '700'],
  variable: "--font-bitter",
  subsets: ["latin"],
});

// Nanum Pen Script is loaded as a regular CSS import in globals.css

export const metadata: Metadata = {
  title: "Quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam",
  description: "Tìm hiểu về quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam",
  icons: {
    icon: '/icon',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jaldi.variable} ${dmSans.variable} ${vollkorn.variable} ${bitter.variable}`}>
      <head>
        <title>Quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam</title>
        <meta name="description" content="Tìm hiểu về quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
