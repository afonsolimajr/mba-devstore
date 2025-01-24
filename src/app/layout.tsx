import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | MBA devstore",
    default: "MBA devstore",
  },
  description: "Projeto de desenvolvimento frontend do MBA da Rocketseat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable}`} lang="pt">
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
