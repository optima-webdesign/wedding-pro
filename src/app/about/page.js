"use client";

import { Heart, Users, Award, Coffee, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const stats = [
    { label: "Happy Couples", value: "10k+", icon: Heart },
    { label: "Verified Vendors", value: "500+", icon: Users },
    { label: "Awards Won", value: "12", icon: Award },
    { label: "Years Experience", value: "5+", icon: Coffee },
  ];

  const team = [
    {
      name: "Gaud Manish",
      role: "Founder & CEO",
      image: "/team/Manish.png",
      bio: "Tech visionary with a passion for simplifying the complex indian wedding industry using logic and creativity."
    },
    {
      name: "Nikhil Kori",
      role: "Head of Design",
      image: "/team/WhatsApp Image 2026-01-08 at 3.24.23 PM.jpeg",
      bio: "Ensuring every pixel on BandBaaja reflects luxury and seamless user experience."
    },
    {
      name: "Rohan Das",
      role: "Vendor Management",
      image: "/team/WhatsApp Image 2026-01-08 at 3.24.38 PM.jpeg",
      bio: "Curating only the top 1% of vendors to ensure quality for our users."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-28 pb-16 md:pt-32 md:pb-20 px-6">
        <div className="absolute inset-0 bg-brand-50 -z-10 skew-y-3 origin-top-left transform scale-110"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-xs md:text-sm">Our Story</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mt-4 mb-6 leading-tight">
            We don’t just plan weddings, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              we design memories.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            BandBaaja was born out of a simple idea: Wedding planning shouldn't be stressful. 
            It should be as beautiful as the day itself.
          </p>
        </div>
      </div>

      {/* 2. IMAGE SPLIT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Image Block */}
            <div className="relative order-2 lg:order-1">
                <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-brand-100 rounded-full blur-2xl opacity-60"></div>
                <img 
                    src="/images/about-us.jpg" 
                    alt="Wedding Planning" 
                    className="w-full rounded-2xl md:rounded-3xl shadow-2xl relative z-10 hover:scale-[1.02] transition duration-500 object-cover"
                />
                {/* Float Card */}
                <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-glow border border-gray-100 z-20 hidden md:block">
                    <p className="font-serif font-bold text-lg md:text-xl text-gray-900">"Seamless"</p>
                    <div className="flex text-yellow-500 text-sm mt-1">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            
            {/* Text Block */}
            <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                  Bridging the gap between <span className="text-brand-400">Dream & Reality</span>
                </h2>
                <div className="space-y-4 text-gray-600 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
                  <p>
                      At Optima Webdesign, we realized that the Indian wedding industry was fragmented. 
                      Couples were running between 10 different vendors, managing 50 spreadsheets, and still feeling lost.
                  </p>
                  <p>
                      We built BandBaaja to bring technology and tradition together. 
                      Our platform uses smart algorithms to match you with vendors that fit your budget and style perfectly.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="border-l-4 border-brand-200 pl-4">
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</h4>
                            <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* 3. TEAM SECTION */}
      <div className="bg-brand-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Meet the Minds</h2>
                <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm md:text-base">The people working behind the scenes to make your day perfect.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="h-72 md:h-80 overflow-hidden bg-gray-100">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-6 md:p-8 relative">
                            <div className="absolute -top-6 right-6 md:right-8 w-12 h-12 bg-brand-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                <Users size={20} />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-brand-400 font-medium text-xs md:text-sm mb-3 md:mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. CTA */}
      <div className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6 relative z-10 leading-tight">Start Your Journey Today</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10 text-sm md:text-base">
                Join thousands of couples who planned their wedding hassle-free with BandBaaja.
            </p>
            <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition relative z-10 w-full sm:w-auto">
                Register Now <ArrowRight size={20} />
            </Link>
        </div>
      </div>

    </div>
  );
}