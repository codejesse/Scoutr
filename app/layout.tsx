import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scoutr",
  description: "Welcome to Scoutr - discover amazing Saas tools for your ideas",
  openGraph: {
    title: "Scoutr",
    description: "Discover amazing SaaS tools for your ideas",
    url: "#",
    siteName: "Scoutr",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Scoutr - discover amazing Saas tools.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scoutr",
    description: "Discover amazing Saas tools.",
    images: ["#"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
