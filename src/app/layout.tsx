import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Provider from "./_trpc/Provider";
import {dark, shadesOfPurple, neobrutalism} from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevscribeAI",
  description: "App that let you chat with youtube videos.",
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
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
    </Provider>
  );
}
