import { Anek_Telugu, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
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
  title: "Hazem Gherissi Portfolio",
  description: "Hazem Gherissi Portfolio",
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
