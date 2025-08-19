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
  title: "Hazem Gherissi | Développeur web junio",
  description:
    "Développeur web junior passionné. Découvrez mes projets et mon parcours en développement web.",
  keywords:
    "Hazem Gherissi, développeur web, junior, React, Next.js, Node.js, portfolio",
  author: "Hazem Gherissi",

  // Open Graph pour Facebook, LinkedIn, etc.
  openGraph: {
    title: "Hazem Gherissi | Développeur web",
    description:
      "Développeur web junior passionné. Découvrez mes projets et mon parcours en développement web.",
    url: "https://hazemgherissi.com",
    type: "website",
    // URL de ton image principale pour Open Graph
    images: [
      {
        url: "https://hazemgherissi.com/images/tooltip.png",
        width: 1200, // taille recommandée OG
        height: 630,
        alt: "Hazem Gherissi, développeur web junior",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Hazem Gherissi | Développeur web",
    description:
      "Développeur web junior passionné. Découvrez mes projets et mon parcours en développement web.",
    images: [
      {
        url: "https://hazemgherissi.com/images/tooltip.png",
        alt: "Hazem Gherissi, développeur web junior",
      },
    ],
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
