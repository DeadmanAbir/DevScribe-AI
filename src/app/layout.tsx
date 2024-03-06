import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from "@/trpc/react";
import { neobrutalism} from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { siteConfig } from "@/config/site";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:siteConfig.name,
    template:` %s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: [
      {
        url: '/logo-black.svg',
        href: '/logo-black.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
    <ClerkProvider appearance={{
      baseTheme: neobrutalism,
    }}>
    <html lang="en">
 
      <body className={inter.className}>   {children}     <Analytics />  <SpeedInsights />  <Toaster richColors/></body>
    </html>
    </ClerkProvider>
    </TRPCReactProvider>
  );
}
