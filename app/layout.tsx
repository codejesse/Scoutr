import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scoutr",
  description:
    "Welcome to Sofa Store - discover amazing Saas tools",
  openGraph: {
    title: "Sofa Store | Home",
    description: "Discover the best deals on furniture at Sofa Store.",
    url: "https://sofa-beta.vercel.app",
    siteName: "Sofa Store",
    images: [
      {
        url: "/sofa-og.png",
        width: 1200,
        height: 630,
        alt: "Sofa Store - Best furniture deals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofa Store | Home",
    description: "Discover the best deals on furniture at Sofa Store.",
    images: ["https://res.cloudinary.com/daiio9iqt/image/upload/v1725306571/8845e51a-1635-440e-bdfb-8e2cacda234d.png"],
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
