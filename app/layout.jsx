import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Hazem Gherissi · Développeur full-stack C# / .NET",
  description:
    "Développeur full-stack C# / .NET basé à Brest. Ancien Marine nationale. Projets, parcours et stack technique.",
  keywords:
    "Hazem Gherissi, développeur full-stack, C#, .NET, ASP.NET Core, React, Next.js, Brest, portfolio",
  author: "Hazem Gherissi",
  openGraph: {
    title: "Hazem Gherissi · Développeur full-stack C# / .NET",
    description:
      "Développeur full-stack C# / .NET basé à Brest. Ancien Marine nationale.",
    url: "https://hazemgherissi.com",
    type: "website",
    images: [
      {
        url: "https://hazemgherissi.com/images/tooltip.png",
        width: 1200,
        height: 630,
        alt: "Hazem Gherissi, développeur full-stack C# / .NET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazem Gherissi · Développeur full-stack C# / .NET",
    description:
      "Développeur full-stack C# / .NET basé à Brest. Ancien Marine nationale.",
    images: [
      {
        url: "https://hazemgherissi.com/images/tooltip.png",
        alt: "Hazem Gherissi, développeur full-stack C# / .NET",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${archivo.variable} ${plexMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
