import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greencombe Corporate Finance | Experts in Selling Businesses",
  description:
    "Greencombe Corporate Finance helps business owners maximise the value of their businesses. With hands-on experience of acquiring and selling businesses, we make sure no value is left behind.",
  keywords:
    "sell my business, selling a business, business valuation, business sale, exit planning, UK, corporate finance",
  openGraph: {
    title: "Greencombe Corporate Finance",
    description: "Helping business owners sell their businesses for the best possible price.",
    url: "https://www.greencombecf.co.uk",
    siteName: "Greencombe Corporate Finance",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="font-dm antialiased">{children}</body>
    </html>
  );
}
