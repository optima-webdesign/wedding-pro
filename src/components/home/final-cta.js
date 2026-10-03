"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/final-cta-wedding.png"
          alt="Grand Wedding Celebration"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-6 block">
          Your Story Starts Here
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ivory mb-6 leading-tight">
          Let&apos;s Make Your Wedding <br className="hidden sm:block" />
          <span className="italic font-light text-accent-500">Unforgettable</span>
        </h2>

        <p className="text-beige/90 font-sans text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Every beautiful celebration begins with a conversation. Tell us about your dream wedding.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-white text-charcoal px-8 py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-bold transition-colors duration-300 w-full sm:w-auto"
        >
          Plan Your Wedding <ArrowUpRight size={16} />
        </Link>
      </div>
      
    </section>
  );
}