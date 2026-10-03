"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Flower2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-svh min-h-screen flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-wedding.png" 
          alt="Luxury Wedding Celebration"
          fill
          priority
          className="object-cover object-center md:object-right transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/90 via-charcoal/50 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-20">
        <div className="max-w-2xl">
          
          <span className="text-beige/80 font-sans tracking-widest uppercase text-xs font-semibold mb-6 block">
            Weddings & Celebrations
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-ivory mb-6 leading-tight">
            Where Your <br />
            Forever <span className="italic font-light text-accent-500">Begins</span>
          </h1>
          
          <p className="text-base md:text-lg text-beige/90 mb-10 max-w-lg font-sans leading-relaxed">
            Thoughtfully planned celebrations, beautiful spaces and unforgettable moments — crafted just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link 
              href="/weddings" 
              className="inline-flex items-center justify-center gap-3 bg-accent-500 text-charcoal px-8 py-3.5 rounded-full font-sans text-sm font-semibold hover:bg-white transition-colors duration-300"
            >
              Explore Weddings <ArrowRight size={16} />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-3 border border-beige/30 text-ivory px-8 py-3.5 rounded-full font-sans text-sm font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Our Services
            </Link>
          </div>

          <div className="flex items-center gap-6 md:gap-10 pt-8 border-t border-beige/20">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <Heart className="text-accent-500 shrink-0" size={24} strokeWidth={1.5} />
              <span className="text-beige/90 text-xs md:text-sm font-sans text-center sm:text-left leading-snug">
                Personalized <br className="hidden sm:block" /> Planning
              </span>
            </div>
            
            <div className="w-px h-10 bg-beige/20"></div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <Flower2 className="text-accent-500 shrink-0" size={24} strokeWidth={1.5} />
              <span className="text-beige/90 text-xs md:text-sm font-sans text-center sm:text-left leading-snug">
                Beautiful <br className="hidden sm:block" /> Details
              </span>
            </div>
            
            <div className="w-px h-10 bg-beige/20"></div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="flex -space-x-2 shrink-0 pt-0.5">
                <div className="w-6 h-6 rounded-full border-2 border-accent-500"></div>
                <div className="w-6 h-6 rounded-full border-2 border-accent-500"></div>
              </div>
              <span className="text-beige/90 text-xs md:text-sm font-sans text-center sm:text-left leading-snug">
                Seamless <br className="hidden sm:block" /> Execution
              </span>
            </div>
            
          </div>
        </div>
      </div>
      
    </section>
  );
}