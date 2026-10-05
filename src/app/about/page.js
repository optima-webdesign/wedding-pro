"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  const approach = [
    {
      num: "01",
      title: "Thoughtful Planning",
      description: "Every detail is meticulously crafted to reflect your unique vision and lifestyle, ensuring nothing is overlooked."
    },
    {
      num: "02",
      title: "Personal Touch",
      description: "We believe in authentic connections. We take the time to know you, making your planning journey entirely stress-free."
    },
    {
      num: "03",
      title: "Beautiful Details",
      description: "From bespoke florals to fine linens, we curate aesthetic elements that elevate the entire experience."
    },
    {
      num: "04",
      title: "Seamless Experience",
      description: "Flawless execution on your wedding day, so you and your family can focus entirely on celebrating the moment."
    }
  ];

  const team = [
    {
      name: "Gaud Manish",
      role: "Founder & Creative Director",
      image: "/team/manish1.png",
      bio: "A visionary with a passion for crafting luxurious, timeless wedding experiences that feel authentic and elegant."
    },
    {
      name: "Nikhil Kori",
      role: "Head of Design",
      image: "/team/nk.jpeg",
      bio: "Ensuring every visual element and spatial design reflects absolute luxury and refined taste."
    },
    {
      name: "Rohan Das",
      role: "Vendor Curation",
      image: "/team/rd.png",
      bio: "Curating only the most exceptional and premium vendors to bring your perfect vision to life."
    }
  ];

  return (
    <div className="bg-ivory overflow-hidden">
      
      {/* 01. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-px bg-accent-500 mx-auto mb-8"></div>
          <span className="text-accent-500 font-sans tracking-[0.2em] uppercase text-xs font-semibold mb-6 block">
            About The Studio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-charcoal leading-[1.1] mb-8">
            Every love story deserves <br className="hidden sm:block" />
            <span className="italic font-light text-accent-500">a beautiful beginning.</span>
          </h1>
          <p className="text-lg md:text-xl text-brown-muted max-w-2xl mx-auto leading-relaxed font-sans">
            We don’t just plan weddings; we design memories. Our approach blends timeless elegance with flawless execution to create celebrations that feel entirely yours.
          </p>
        </div>
      </section>

      {/* 02. OUR STORY (EDITORIAL ASYMMETRIC LAYOUT) */}
      <section className="bg-white py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Text Block */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-accent-500 font-sans tracking-[0.2em] uppercase text-xs font-semibold mb-6 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-8 leading-tight">
                A vision brought <br /> <span className="italic font-light">to life.</span>
              </h2>
              <div className="space-y-6 text-brown-muted leading-relaxed font-sans text-base md:text-lg">
                <p>
                  At our studio, we realized that true luxury lies in peace of mind. The modern Indian wedding is a beautiful tapestry of traditions, but the planning process is often overwhelming.
                </p>
                <p>
                  We established our practice to bridge the gap between dream and reality. We take pride in our editorial approach, bringing together world-class aesthetics with meticulous logistical planning. Our goal is simple: to make your celebration as beautiful as the day itself.
                </p>
              </div>
            </div>

            {/* Image Block */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative pl-0 md:pl-10">
              <div className="relative aspect-4/5 md:aspect-3/4 w-full overflow-hidden rounded-sm z-10 bg-bg-soft">
                <Image 
                  src="/image/about-us.png" 
                  alt="Elegant Wedding Planning" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover hover:scale-105 transition duration-2000 ease-out"
                />
              </div>
              <div className="absolute top-8 -left-4 md:top-12 md:left-2 w-full h-full border border-accent-300 z-0 hidden sm:block"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 03. OUR APPROACH (MAGAZINE LIST STYLE) */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 md:mb-24">
            <span className="text-accent-500 font-sans tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal">
              Our Approach
            </h2>
          </div>
          
          <div className="border-t border-charcoal/20">
            {approach.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col md:flex-row items-start md:items-center py-10 md:py-12 border-b border-charcoal/20 gap-6 md:gap-12 transition-colors hover:bg-white/50"
              >
                <span className="text-5xl md:text-6xl font-serif text-accent-300 group-hover:text-accent-500 transition-colors duration-300 md:w-24 shrink-0 italic font-light">
                  {item.num}
                </span>
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal group-hover:text-accent-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="md:w-full">
                  <p className="text-brown-muted text-base leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. TEAM SECTION */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-accent-500 font-sans tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
              The People
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal">
              Behind the Celebrations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="relative aspect-3/4 w-full overflow-hidden mb-6 rounded-sm bg-bg-soft">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal">{member.name}</h3>
                  <p className="text-accent-500 font-sans text-[10px] tracking-widest uppercase mt-2 mb-4 font-bold">{member.role}</p>
                  <p className="text-brown-muted text-sm leading-relaxed max-w-sm mx-auto font-sans">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CTA SECTION (INVITATION CARD STYLE) */}
      <section className="py-24 md:py-32 px-6 bg-charcoal relative">
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-accent-500/30"></div>
        <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-accent-500/30"></div>
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-accent-500/30"></div>
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-accent-500/30"></div>

        <div className="max-w-3xl mx-auto text-center text-ivory relative z-10">
          <span className="text-accent-500 font-sans tracking-[0.2em] uppercase text-xs font-semibold mb-6 block">
            Begin The Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
            Let&apos;s create something <br />
            <span className="italic font-light text-accent-500">beautiful together.</span>
          </h2>
          <p className="text-beige/80 mb-12 max-w-xl mx-auto text-base md:text-lg font-sans">
            Start planning a celebration that feels entirely like you. Connect with our team to discuss your vision.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-white text-charcoal px-8 py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-bold transition-colors duration-300 w-full sm:w-auto"
          >
            Explore Our Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}