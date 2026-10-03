"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services"; 

export default function ServicesPage() {
  return (
    <div className="bg-ivory min-h-screen pt-32 md:pt-40">
      
      <section className="px-6 max-w-4xl mx-auto text-center mb-20 md:mb-32">
        <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-4 block">
          Our Services
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal mb-6 leading-tight">
          Every Detail, <br className="hidden sm:block" />
          <span className="italic font-light">Beautifully Planned.</span>
        </h1>
        <p className="text-lg md:text-xl text-brown-muted max-w-2xl mx-auto leading-relaxed">
          Thoughtful planning and beautiful details for celebrations that feel uniquely yours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">
            What We Do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((service) => (
            <div key={service.id} className="group cursor-default flex flex-col h-full">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm mb-6 bg-bg-soft">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-accent-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-brown-muted font-sans text-sm leading-relaxed mb-6 grow">
                {service.description}
              </p>
              
              <div className="w-12 h-px bg-accent-300 mt-auto transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center text-ivory">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Let&apos;s Plan Something <br />
            <span className="italic font-light text-accent-500">Beautiful</span>
          </h2>
          <p className="text-beige mb-12 max-w-xl mx-auto text-base md:text-lg">
            Tell us about your celebration and let&apos;s bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-white text-charcoal px-8 py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-bold transition-colors duration-300 w-full sm:w-auto"
          >
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}