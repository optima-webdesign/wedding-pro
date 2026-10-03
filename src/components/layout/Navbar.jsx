"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Weddings", path: "/weddings" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock jab mobile menu open ho
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-elegant py-4 border-b border-gray-100"
            : "bg-ivory py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="flex flex-col z-50 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-2xl md:text-3xl font-serif font-bold text-charcoal leading-none transition-colors">
              Band<span className="text-accent-500 italic font-light">Baaja</span>
            </span>
            <span className="text-[9px] md:text-[10px] font-sans tracking-[0.3em] uppercase text-brown-muted mt-1">
              Weddings & Celebrations
            </span>
          </Link>

          {/* DESKTOP MENU (Center) */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`relative font-sans text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                    isActive ? "text-accent-500" : "text-charcoal hover:text-accent-500"
                  }`}
                >
                  {link.name}
                  {/* Active Indicator Line */}
                  <span 
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[1px] bg-accent-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA (Right) */}
          <div className="hidden lg:block z-50">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-full font-sans uppercase tracking-widest text-xs font-bold hover:bg-accent-500 transition-colors duration-300"
            >
              Let's Talk <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 -mr-2 text-charcoal z-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`lg:hidden fixed inset-0 bg-ivory z-40 px-6 pt-32 pb-10 flex flex-col h-screen overflow-y-auto transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 flex-grow mt-8">
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name}
                href={link.path}
                className={`text-4xl font-serif font-bold transition-colors ${
                  isActive ? "text-accent-500 italic" : "text-charcoal hover:text-accent-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.4s ease-out'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        {/* MOBILE CTA */}
        <div className="mt-auto pt-8 border-t border-gray-200">
          <p className="text-brown-muted text-sm mb-4">Ready to start planning?</p>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="flex items-center justify-between w-full bg-charcoal text-white px-8 py-4 rounded-full font-sans tracking-widest uppercase text-xs font-bold active:scale-[0.98] transition-transform"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}