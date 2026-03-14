export default function Footer() {
  return (
    <footer className="bg-brand-dark py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Logo & tagline */}
        <div className="text-center md:text-left">
          <span className="font-playfair font-bold text-white text-base tracking-wide">
            GREENMOUNT CORPORATE FINANCE
          </span>
          <p className="font-dm text-gray-400 text-xs mt-1">
            Sell-Side M&A Advisory
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
          &copy; 2026 Greenmount Corporate Finance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
