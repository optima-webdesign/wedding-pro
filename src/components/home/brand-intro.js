"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BrandIntro() {
  return (
    <section className="py-24 md:py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="order-1">
          <div className="relative aspect-4/3 lg:aspect-4/5 w-full overflow-hidden rounded-sm bg-bg-soft">
            <Image 
              src="/image/about-us.png" 
              alt="The Art of Celebrating Love" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-2000 hover:scale-105"
            />
          </div>
        </div>

        <div className="order-2 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="text-brown-muted font-sans tracking-widest uppercase text-xs font-semibold mb-6 block">
            The Wedding Experience
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
            The Art of <br className="hidden lg:block" />
            <span className="italic font-light">Celebrating Love</span>
          </h2>
          
          <h3 className="text-xl md:text-2xl font-serif text-charcoal mb-4">
            Your Story, Beautifully Celebrated
          </h3>
          
          <p className="text-brown-muted font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Every wedding is unique. We bring your ideas together with thoughtful planning, beautiful details and seamless coordination.
          </p>
          
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-bold text-charcoal border-b border-charcoal pb-1 hover:text-brown-muted hover:border-brown-muted transition-all duration-300"
          >
            Discover Our Story <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}