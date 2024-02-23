import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Provider from "./_trpc/Provider";
import {dark, shadesOfPurple, neobrutalism} from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevscribeAI",
  description: "App that let you chat with youtube videos.",
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
    <Provider>
    <ClerkProvider appearance={{
      baseTheme: neobrutalism,
    }}>
    <html lang="en">
      <body className={inter.className}> {children}   <Toaster richColors/></body>
    </html>
    </ClerkProvider>
    </Provider>
  );
}
