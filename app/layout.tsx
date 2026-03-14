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
  title: "Greenmount Corporate Finance | Sell-Side M&A Advisory",
  description:
    "Greenmount Corporate Finance is a specialist sell-side M&A advisory firm dedicated to maximising value for entrepreneurs and business owners.",
  keywords:
    "M&A advisory, sell-side, corporate finance, business sale, entrepreneur, exit planning, UK",
  openGraph: {
    title: "Greenmount Corporate Finance",
    description: "Specialist sell-side M&A advisory for entrepreneurs.",
    url: "https://www.greenmountcorporatefinance.co.uk",
    siteName: "Greenmount Corporate Finance",
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
