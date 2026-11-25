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

const donneesStructurees = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://hazemgherissi.com/#personne",
      name: "Hazem Gherissi",
      url: "https://hazemgherissi.com",
      image: "https://hazemgherissi.com/images/photo-profil-cv.webp",
      jobTitle: "Développeur full-stack C# / .NET",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Quimper",
        addressRegion: "Bretagne",
        addressCountry: "FR",
      },
      knowsAbout: ["C#", ".NET", "ASP.NET Core", "React", "Next.js", "PostgreSQL"],
      sameAs: [
        "https://www.linkedin.com/in/hazem-g-884824304/",
        "https://github.com/HazGri",
        "https://www.malt.fr/profile/hazemgherissi",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://hazemgherissi.com/#site",
      url: "https://hazemgherissi.com",
      name: "Hazem Gherissi",
      inLanguage: "fr-FR",
      publisher: { "@id": "https://hazemgherissi.com/#personne" },
    },
  ],
};

export const metadata = {
  metadataBase: new URL("https://hazemgherissi.com"),
  alternates: { canonical: "/" },
  title: "Hazem Gherissi · Développeur full-stack C# / .NET",
  description:
    "Développeur full-stack C# / .NET basé à Quimper. Projets, parcours et stack technique.",
  keywords:
    "Hazem Gherissi, développeur full-stack, C#, .NET, ASP.NET Core, React, Next.js, Quimper, Finistère, portfolio",
  author: "Hazem Gherissi",
  openGraph: {
    title: "Hazem Gherissi · Développeur full-stack C# / .NET",
    description:
      "Développeur full-stack C# / .NET basé à Quimper.",
    url: "https://hazemgherissi.com",
    type: "website",
    images: [
      {
        url: "https://hazemgherissi.com/og-image.jpg",
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
      "Développeur full-stack C# / .NET basé à Quimper.",
    images: [
      {
        url: "https://hazemgherissi.com/og-image.jpg",
        alt: "Hazem Gherissi, développeur full-stack C# / .NET",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${archivo.variable} ${plexMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
