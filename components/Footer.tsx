import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Logo & tagline */}
        <div className="text-center md:text-left">
          <Image
            src="/images/greencombe-logo.png"
            alt="Greencombe Corporate Finance"
            width={240}
            height={70}
            className="h-14 w-auto brightness-0 invert mx-auto md:mx-0"
          />
          <p className="font-dm text-gray-400 text-xs mt-2">
            Experts in Selling Businesses
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="#"
            className="font-dm text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-dm text-gray-400 hover:text-white transition-colors"
          >
            Terms &amp; Conditions
          </a>
        </div>

        {/* Copyright */}
        <p className="font-dm text-gray-500 text-xs">
          &copy; 2026 Greencombe Corporate Finance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
