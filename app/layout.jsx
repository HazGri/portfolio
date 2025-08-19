import { Anek_Telugu, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const anekTelugu = Anek_Telugu({
  variable: "--font-anek-telugu",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hazem Gherissi | Développeur web junior",
  description:
    "Développeur web junior passionné. Découvrez mes projets et mon parcours en développement web.",
  keywords:
    "Hazem Gherissi, développeur web, junior, React, Next.js, Node.js, portfolio",
  author: "Hazem Gherissi",
  openGraph: {
    title: "Hazem Gherissi | Développeur web",
    description:
      "Développeur web junior passionné. Découvrez mes projets et mon parcours en développement web.",
    url: "https://hazemgherissi.com",
    type: "website",
    image: "https://hazemgherissi.com/images/tooltip.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${anekTelugu} ${geistMono.variable} antialiased px-3 h-full`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
