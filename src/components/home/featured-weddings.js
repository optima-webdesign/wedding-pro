"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { weddings } from "@/data/weddings";

export default function FeaturedWeddings() {
  // Safe filtering with fallback
  const featured = weddings?.filter((w) => w.featured) || [];
  const displayWeddings = featured.length >= 3 ? featured.slice(0, 3) : weddings?.slice(0, 3) || [];

  if (displayWeddings.length === 0) return null; // Prevent rendering if no data

  return (
    <section className="py-24 md:py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 01. SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-brown-muted font-sans tracking-widest uppercase text-xs font-semibold mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
            Beautifully Told <span className="italic font-light">Love Stories</span>
          </h2>
          <p className="text-brown-muted font-sans text-base leading-relaxed">
            A glimpse into celebrations crafted with love, care and attention to every detail.
          </p>
        </div>

        {/* 02. WEDDINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {displayWeddings.map((wedding, index) => {
            const isWide = index === 0;
            
            return (
              <Link 
                href={`/weddings/${wedding.slug}`} 
                key={wedding.slug || index} 
                className={`group block ${isWide ? "md:col-span-2" : "md:col-span-1"}`}
              >
                {/* Image Container with Hover Zoom */}
                <div className={`relative w-full overflow-hidden rounded-sm bg-bg-soft mb-6 ${isWide ? "aspect-4/3 md:aspect-21/9" : "aspect-4/5"}`}>
                  <Image 
                    src={wedding.coverImage} 
                    alt={wedding.title}
                    fill
                    sizes={isWide ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className={`flex flex-col ${isWide ? "md:items-center md:text-center" : "items-start text-left"}`}>
                  <span className="text-accent-500 font-sans text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    0{index + 1} <span className="w-6 h-px bg-accent-500"></span> {wedding.category || "Wedding"}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-3 group-hover:text-accent-500 transition-colors duration-300">
                    {wedding.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-brown-muted font-sans text-sm tracking-wide">
                    <MapPin size={14} /> {wedding.location}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 03. CTA BUTTON */}
        <div className="text-center">
          <Link 
            href="/weddings" 
            className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase font-bold text-charcoal border-b border-charcoal pb-1 hover:text-brown-muted hover:border-brown-muted transition-all duration-300"
          >
            Explore All Weddings <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}