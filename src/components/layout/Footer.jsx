import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-white pt-16 md:pt-20 pb-8 md:pb-10 mt-16 md:mt-24 overflow-hidden">
      
      {/* Top Glowing Line (Separator) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-80"></div>

      {/* Background Glow Effect */}
      <div className="absolute -top-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-brand-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12 md:mb-16 relative z-10">
        
        {/* 1. Brand Section (Span 4 columns) */}
        <div className="md:col-span-4 space-y-5 md:space-y-6">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight inline-block">
            <span className="text-brand-400">Band</span>Baaja
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm max-w-sm md:max-w-none">
            India's most trusted wedding planning platform. We make your dream wedding a reality with logic, creativity, and seamless execution.
          </p>
          <div className="flex gap-4 pt-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center hover:bg-brand-400 hover:border-brand-400 hover:text-white cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Quick Links (Span 3 columns) */}
        <div className="md:col-span-3 lg:pl-8">
          <h4 className="font-bold text-lg mb-4 md:mb-6 text-brand-100">Quick Links</h4>
          <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm">
            {[
              { name: "Find Vendors", link: "/vendors" },
              { name: "Wedding Ideas", link: "/blog" },
              { name: "About Us", link: "/about" },
              { name: "Login / Register", link: "/login" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="flex items-center gap-2 hover:text-brand-300 transition-all duration-300 hover:translate-x-1 group w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact & Newsletter (Span 5 columns) */}
        <div className="md:col-span-5">
          <h4 className="font-bold text-lg mb-4 md:mb-6 text-brand-100">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-6 max-w-md">
            Join our newsletter for the latest wedding trends and exclusive vendor offers.
          </p>
          
          {/* Responsive Newsletter Input */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 bg-transparent sm:bg-gray-800/50 p-0 sm:p-1.5 rounded-2xl sm:rounded-full border-0 sm:border border-gray-700 sm:focus-within:border-brand-400 transition-colors mb-8">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-gray-800/50 sm:bg-transparent border border-gray-700 sm:border-0 px-4 py-3 sm:py-2 rounded-xl sm:rounded-none text-sm text-white placeholder-gray-500 outline-none focus:border-brand-400 sm:focus:border-transparent transition-colors"
            />
            <button className="bg-brand-400 hover:bg-brand-500 text-white px-6 py-3 sm:py-2 rounded-xl sm:rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto active:scale-[0.98] sm:active:scale-100">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:items-start gap-6 sm:gap-12 text-sm text-gray-400">
            <div>
              <p className="text-white font-semibold mb-1">Office</p>
              <p>Ahmedabad, Gujarat</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Contact</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm px-6">
        <p>
          © 2026 BandBaaja. Designed & Developed by <a href="https://www.optimawebdesign.in/" className="text-brand-300 hover:text-brand-400 hover:underline transition">Optima Webdesign</a>.
        </p>
      </div>
    </footer>
  );
}