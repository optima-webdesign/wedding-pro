import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Weddings", path: "/weddings" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    // mt-20 hata diya gaya hai taaki upar koi ugly gap na bane
    <footer className="bg-charcoal text-ivory pt-20 md:pt-32 pb-8 md:pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-20 md:mb-24">
          
          {/* 1. Brand Section */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-3xl md:text-4xl font-serif font-bold text-ivory leading-none">
                Band<span className="text-accent-500 italic font-light">Baaja</span>
              </span>
              <span className="block text-[10px] font-sans tracking-[0.3em] uppercase text-brown-muted mt-2">
                Weddings & Celebrations
              </span>
            </Link>
            <p className="text-beige/70 font-sans text-sm md:text-base leading-relaxed max-w-sm">
              Thoughtfully planned celebrations, beautifully remembered moments. We design experiences that reflect your true story.
            </p>
          </div>

          {/* 2. Explore Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans font-semibold tracking-[0.2em] uppercase text-xs text-accent-500 mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="font-sans text-sm text-beige/80 hover:text-white transition-colors duration-300 relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact & CTA */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
             <h4 className="font-sans font-semibold tracking-[0.2em] uppercase text-xs text-accent-500 mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3 mb-8">
              <a href="mailto:hello@bandbaaja.com" className="block font-sans text-sm text-beige/80 hover:text-white transition-colors duration-300">
                hello@bandbaaja.com
              </a>
              <p className="font-sans text-sm text-beige/80">
                +91 00000 00000
              </p>
            </div>
            
            <p className="font-serif italic text-lg text-ivory mb-6">
              Let's make your day unforgettable.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 text-charcoal px-6 py-3 rounded-sm font-sans uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300"
            >
              Get in Touch <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-brown-muted font-sans text-xs tracking-wide">
            © {new Date().getFullYear()} BandBaaja. All rights reserved.
          </p>
          <p className="text-brown-muted font-sans text-xs tracking-wide">
            Designed by <a href="https://www.optimawebdesign.in/" target="_blank" rel="noopener noreferrer" className="text-beige hover:text-white hover:underline transition-colors">Optima Webdesign</a>
          </p>
        </div>

      </div>
    </footer>
  );
}