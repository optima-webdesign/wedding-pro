"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { weddings } from "@/data/weddings";

export default function WeddingsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = [
    "All", 
    "Royal Wedding", 
    "Garden Wedding", 
    "Modern Wedding", 
    "Destination Wedding", 
    "Heritage Wedding", 
    "Intimate Wedding"
  ];

  const filteredWeddings = activeCategory === "All" 
    ? weddings 
    : weddings.filter(wedding => wedding.category === activeCategory);

  return (
    <div className="bg-ivory min-h-screen pt-32 md:pt-48 pb-0">
      
      <section className="px-6 max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <div className="w-12 h-px bg-accent-500 mx-auto mb-6 md:mb-8"></div>
        <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-4 block">
          Our Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal mb-6 leading-tight">
          Every Wedding <br className="hidden sm:block" />
          <span className="italic font-light text-accent-500">Tells a Story.</span>
        </h1>
        <p className="text-base md:text-lg text-brown-muted max-w-2xl mx-auto leading-relaxed font-sans">
          A curated collection of our most beautiful celebrations. Step into the moments of love, joy, and breathtaking details.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 border-y border-charcoal/10 py-5">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs uppercase tracking-widest transition-all duration-300 outline-none ${
                activeCategory === cat 
                  ? "text-charcoal font-bold border-b border-charcoal pb-1" 
                  : "text-brown-muted hover:text-accent-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        {filteredWeddings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredWeddings.map((wedding) => (
              <Link href={`/weddings/${wedding.slug}`} key={wedding.id || wedding.slug} className="group block h-full">
                
                <div className="bg-white rounded-sm shadow-elegant hover:shadow-glow transition-all duration-500 h-full flex flex-col overflow-hidden border border-gray-100 group-hover:-translate-y-1">
                  
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-bg-soft">
                    <Image 
                      src={wedding.coverImage} 
                      alt={wedding.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-center justify-center">
                      <span className="bg-white text-charcoal px-6 py-3 rounded-sm font-sans text-xs tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10 text-center flex flex-col grow items-center justify-center">
                    <span className="text-accent-500 font-sans text-xs uppercase tracking-widest font-bold block mb-3">
                      {wedding.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-accent-500 transition-colors duration-300">
                      {wedding.couple}
                    </h3>
                    
                    <div className="w-8 h-px bg-charcoal/10 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-accent-500"></div>
                    
                    <div className="flex items-center justify-center gap-2 text-brown-muted font-sans text-xs tracking-wide">
                      <MapPin size={14} className="text-accent-500" /> {wedding.location}
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-brown-muted font-serif text-xl md:text-2xl italic">No weddings found in this category.</p>
          </div>
        )}
      </section>

      <section className="bg-charcoal py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-4 block">
            Your turn
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ivory mb-6 md:mb-8 leading-tight">
            Ready to plan your <br className="hidden sm:block" />
            <span className="italic font-light text-accent-500">dream wedding?</span>
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-white text-charcoal px-8 py-3.5 md:py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-bold transition-colors duration-300 mt-2"
          >
            Plan Your Wedding <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}