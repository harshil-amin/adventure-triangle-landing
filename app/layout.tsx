// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adventure Triangle - Explore Water | Air | Land",
  description:
    "Join Adventure Triangle beta program. Experience adventures across water, air, and land ecosystems. Register for our launch event.",
  keywords:
    "adventure, travel, water sports, hiking, air activities, beta signup",
  openGraph: {
    title: "Adventure Triangle - Pre-Launch",
    description: "Experience the future of adventure travel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}