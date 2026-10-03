import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "Share Your Vision",
      description: "Tell us about your dream wedding, preferences, ideas and expectations."
    },
    {
      num: "02",
      title: "Plan Your Wedding",
      description: "Discuss your requirements, budget and the details of your celebration."
    },
    {
      num: "03",
      title: "Design & Coordinate",
      description: "Finalize the arrangements and coordinate the agreed wedding services."
    },
    {
      num: "04",
      title: "Celebrate Your Day",
      description: "Enjoy your celebration while the agreed arrangements are carried out."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 01. HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-accent-500 font-sans tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
            From Your Vision to <br className="hidden sm:block" />
            <span className="italic font-light">Your Wedding Day</span>
          </h2>
          <p className="text-brown-muted font-sans text-base leading-relaxed">
            A thoughtful journey, planned around your special day.
          </p>
        </div>

        {/* 02. WIDE PHOTOGRAPH */}
        
        {/* 03. STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 relative">
          
          {/* Connecting Line (Only visible on desktop behind numbers) */}
          <div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-gray-200 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-12 h-12 rounded-full bg-charcoal text-ivory flex items-center justify-center font-serif text-lg mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-accent-500 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-brown-muted font-sans text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 04. BOTTOM CTA */}
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-charcoal text-ivory hover:bg-accent-500 hover:text-charcoal px-8 py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-bold transition-colors duration-300"
          >
            Start Planning <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}