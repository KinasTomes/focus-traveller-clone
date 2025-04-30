import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam",
  description: "Tìm hiểu về quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam",
  icons: {
    icon: '/images/logo3.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
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
