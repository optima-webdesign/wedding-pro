"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Search, MapPin, Star, Heart, Camera, Music, Coffee, ArrowRight, CheckCircle, Users } from "lucide-react";

export default function Home() {
  const { user } = useAuth();

  const categories = [
    { name: "Venues", icon: <MapPin />, slug: "venues" },
    { name: "Photographers", icon: <Camera />, slug: "photographers" },
    { name: "Makeup", icon: <Heart />, slug: "makeup" },
    { name: "Music/DJ", icon: <Music />, slug: "djs" },
    { name: "Catering", icon: <Coffee />, slug: "catering" },
    { name: "Planning", icon: <Star />, slug: "planning" },
  ];

  const featuredVendors = [
    { name: "The Royal Oberoi", cat: "Venue", rating: "5.0", img: "/image/The Royal Oberoi.png", loc: "Udaipur" },
    { name: "Lens & Stories", cat: "Photography", rating: "4.9", img: "/image/Lens & Stories.png", loc: "Mumbai" },
    { name: "Glam by Sneha", cat: "Makeup", rating: "4.8", img: "/image/Glam by Sneha.png", loc: "Delhi" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      {/* Changed height constraints and added padding-top to fix navbar collision */}
      <div className="relative min-h-[100svh] md:min-h-[90vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Luxury Wedding"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
                ✨ India's Most Trusted Wedding Planner
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
                Your Love Story, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-400">
                    Perfectly Planned.
                </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light px-2">
                Discover 5,000+ trusted vendors, exclusive venues, and expert planners to make your big day unforgettable.
            </p>

            {/* Premium Search Bar */}
            {/* Added better padding and fixed the search button clipping issue */}
            <div className="flex flex-col md:flex-row w-full max-w-3xl mx-auto bg-white/95 backdrop-blur-xl p-4 md:p-3 rounded-3xl md:rounded-[2rem] shadow-2xl border border-white/20 gap-4 md:gap-0">
                <div className="flex-grow flex items-center px-2 md:px-4 border-b border-gray-100 md:border-b-0 md:border-r md:border-gray-200 pb-3 md:pb-0">
                    <MapPin className="text-gray-400 mr-3 flex-shrink-0" size={20}/>
                    <select className="w-full bg-transparent outline-none text-gray-700 font-medium py-1 md:py-3 cursor-pointer">
                        <option>All Cities</option>
                        <option>Udaipur</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Goa</option>
                    </select>
                </div>
                <div className="flex-grow flex items-center px-2 md:px-4 pt-2 md:pt-0 pb-2 md:pb-0">
                    <Search className="text-gray-400 mr-3 flex-shrink-0" size={20}/>
                    <input 
                        type="text" 
                        placeholder="Search Venues, Makeup..." 
                        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 py-1 md:py-3"
                    />
                </div>
                <Link href="/vendors" className="bg-brand-400 hover:bg-brand-500 text-white w-full md:w-auto px-8 py-4 md:py-3 rounded-2xl md:rounded-full font-bold shadow-lg hover:shadow-brand-400/50 transition-all flex items-center justify-center mt-2 md:mt-0 text-lg md:text-base">
                    Search
                </Link>
            </div>
        </div>
      </div>

      {/* 2. STATS STRIP (Trust Builder) */}
      <div className="bg-brand-50 py-8 md:py-10 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
                { num: "10k+", label: "Happy Couples" },
                { num: "5000+", label: "Verified Vendors" },
                { num: "4.9", label: "Average Rating" },
                { num: "15+", label: "Cities Covered" },
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-serif font-bold text-brand-400">{stat.num}</span>
                    <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>

      {/* 3. CATEGORIES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-3 md:mb-4">Explore by Category</h2>
            <p className="text-gray-500 text-sm md:text-base">Everything you need for a grand celebration.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Link 
              href={`/vendors?category=${cat.slug}`} 
              key={idx} 
              className="group flex flex-col items-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-50 group-hover:bg-brand-400 flex items-center justify-center text-brand-400 group-hover:text-white text-xl md:text-2xl mb-3 md:mb-4 transition-all duration-300">
                {cat.icon}
              </div>
              <span className="font-bold text-gray-700 text-sm md:text-base group-hover:text-brand-400 transition-colors text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. FEATURED / TRENDING */}
      <div className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
        {/* Decor Blob */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-100/50 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Trending This Week</h2>
                    <p className="text-gray-500 text-sm md:text-base">Handpicked vendors loved by couples.</p>
                </div>
                <Link href="/vendors" className="hidden sm:flex items-center gap-2 text-brand-400 font-bold hover:gap-3 transition-all">
                    View All <ArrowRight size={20}/>
                </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {featuredVendors.map((vendor, i) => (
                    <div key={i} className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col">
                        <div className="h-56 md:h-64 w-full overflow-hidden relative flex-shrink-0">
                            <img src={vendor.img} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide">
                                {vendor.cat}
                            </div>
                            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-yellow-400 text-black px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                                <Star size={12} fill="black"/> {vendor.rating}
                            </div>
                        </div>
                        <div className="p-5 md:p-6 flex-grow flex flex-col">
                            <h3 className="text-lg md:text-xl font-bold font-serif mb-1 group-hover:text-brand-400 transition line-clamp-1">{vendor.name}</h3>
                            <p className="text-gray-500 text-sm mb-4 flex items-center gap-1"><MapPin size={14}/> {vendor.loc}</p>
                            <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">Starting Price</span>
                                <span className="font-bold text-gray-900 text-sm md:text-base">₹ On Request</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <Link href="/vendors" className="sm:hidden mt-8 flex items-center justify-center gap-2 text-brand-400 font-bold w-full border border-brand-200 py-3 rounded-full hover:bg-brand-50 transition-colors">
                View All Vendors <ArrowRight size={18}/>
            </Link>
        </div>
      </div>

      {/* 5. LOVE STORIES / TESTIMONIALS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-10 md:mb-16">Real Weddings, Real Love</h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-brand-400 rounded-3xl md:rounded-[3rem] rotate-2 md:rotate-3 opacity-20"></div>
                <img 
                    src="/manish.png" 
                    className="w-full h-auto max-h-[350px] md:max-h-full object-cover object-top relative rounded-3xl md:rounded-[3rem] shadow-2xl rotate-0 md:rotate-[-3deg] hover:rotate-0 transition duration-500"
                    alt="Couple"
                />
            </div>
            <div className="order-1 md:order-2">
                <QuoteIcon className="text-brand-200 mb-4 md:mb-6 w-12 h-12 md:w-16 md:h-16" />
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-700 leading-relaxed mb-6 md:mb-8">
                    "BandBaaja made our Udaipur wedding absolutely magical. We found our photographer and makeup artist within minutes. It felt like having a best friend who knows everyone in the industry!"
                </p>
                <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">Manish & Nita</h4>
                    <p className="text-brand-400 font-medium text-sm md:text-base">Married Dec 2025</p>
                </div>
            </div>
        </div>
      </div>

      {/* 6. CTA (Final Push) */}
      <div className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-64 h-64 md:w-96 md:h-96 bg-brand-500 rounded-full blur-3xl opacity-40"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6 relative z-10 leading-tight">Your Dream Wedding Awaits</h2>
          <p className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of couples planning their weddings with ease. Sign up today and get access to premium vendor pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 w-full sm:w-auto">
            <Link 
                href="/login" 
                className="bg-brand-400 hover:bg-brand-500 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold shadow-glow transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
                Get Started Free
            </Link>
            <Link 
                href="/vendors" 
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold transition-all w-full sm:w-auto text-center"
            >
                Browse Vendors
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

function QuoteIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
    );
}