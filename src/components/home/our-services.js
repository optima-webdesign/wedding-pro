import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function OurServices() {
  // Homepage par sirf pehli 4 services dikhani hain
  const displayServices = services.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 01. HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-brown-muted font-sans tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
            Everything for Your <br className="hidden sm:block" />
            <span className="italic font-light">Perfect Day</span>
          </h2>
          <p className="text-brown-muted font-sans text-base leading-relaxed">
            Thoughtful planning and beautiful details, brought together for your celebration.
          </p>
        </div>

        {/* 02. SERVICES GRID (2 Column on Desktop, 1 Column on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {displayServices.map((service) => (
            <div key={service.id} className="group block">
              
              {/* Image Container with Subtle Reveal & Zoom */}
              <div className="aspect-[4/3] md:aspect-[3/2] w-full overflow-hidden rounded-sm bg-bg-soft mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start text-left pr-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-3 group-hover:text-accent-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-brown-muted font-sans text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-bold text-charcoal hover:text-accent-500 transition-colors duration-300"
                >
                  Explore Service <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 03. BOTTOM CTA */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase font-bold text-charcoal border-b border-charcoal pb-1 hover:text-brown-muted hover:border-brown-muted transition-all duration-300"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}