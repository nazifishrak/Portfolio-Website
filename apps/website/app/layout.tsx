import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import Image from "next/image";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { ThemeToggle } from "../components/theme-toggle";
import { Navigation } from "../components/navigation";
import { DitherBackground } from "../components/dither-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Final Year CS @ UBC → Mastercard | Nazif Ishrak";
const description =
  "Final year CS at UBC. Joining Mastercard full-time in Vancouver. I take things apart—code, systems, products—and put them back together faster and cleaner. Backend work, small tools, and market systems on the side.";

export const metadata: Metadata = {
  title,
  description,

  creator: "Nazif Ishrak",

  authors: [
    {
      name: "Nazif Ishrak",
      url: "https://github.com/nazifishrak",
    },
  ],

  openGraph: {
    title,
    description,
    type: "website",
    url: "https://nazifishrak.com",
    siteName: "Nazif Ishrak",
    locale: "en_US",
    images: [
      {
        alt: "Nazif Ishrak",
        height: 630,
        url: "https://nazifishrak.com/opengraph-image.png",
        width: 1200,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    creatorId: "@nazifishrak",
    images: [
      {
        alt: "Nazif Ishrak",
        height: 630,
        width: 1200,
        url: "https://nazifishrak.com/opengraph-image.png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={`${inter.className} antialiased`}>
      <DitherBackground />
      <main className="relative z-10 mx-auto w-full max-w-xl px-4 py-16 sm:py-32 pb-32">
        <Image
          alt="Nazif Ishrak"
          className="mb-12 size-8 rounded-full"
          height={32}
          src="https://github.com/nazifishrak.png"
          width={32}
        />
        {children}
      </main>
      <Analytics />
      <Toaster />
      <ThemeToggle />
      <Navigation />
    </body>
  </html>
);

export default RootLayout;
