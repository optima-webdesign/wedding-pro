"use client";

import Image from "next/image";
import { Heart, Sparkles, Palette, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Personalized Planning",
      description: "Every wedding is planned around your vision and preferences.",
      icon: <Heart size={28} strokeWidth={1.5} />
    },
    {
      title: "Thoughtful Details",
      description: "Careful attention to the little things that make your day special.",
      icon: <Sparkles size={28} strokeWidth={1.5} />
    },
    {
      title: "Creative Concepts",
      description: "Wedding ideas shaped around your style and celebration.",
      icon: <Palette size={28} strokeWidth={1.5} />
    },
    {
      title: "Seamless Coordination",
      description: "A coordinated approach to help your celebration run smoothly.",
      icon: <CheckCircle2 size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-charcoal px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-4 block">
            The Wedding Pro Difference
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ivory mb-6 leading-tight">
            The Details Make <br className="hidden sm:block" />
            <span className="italic font-light text-accent-500">the Difference</span>
          </h2>
          <p className="text-beige/80 font-sans text-base md:text-lg leading-relaxed">
            Every celebration deserves thoughtful planning and a personal touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative w-full aspect-4/3 md:aspect-video lg:aspect-4/3 rounded-sm overflow-hidden bg-gray-800">
            <Image 
              src="/images/why-choose-us.png" 
              alt="Beautiful Wedding Details" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-2000 ease-out"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start text-left group">
                <div className="text-accent-500 mb-5 bg-white/5 p-4 rounded-full group-hover:bg-accent-500 group-hover:text-charcoal transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-ivory mb-2">
                  {feature.title}
                </h3>
                <p className="text-beige/70 font-sans text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}