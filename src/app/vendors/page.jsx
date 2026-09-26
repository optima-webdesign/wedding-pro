"use client";

import Link from "next/link";
import { weddingVendors } from "@/data/vendors"; // Data file import
import { MapPin, Star, ArrowRight } from "lucide-react";

export default function VendorsPage() {
  // Fallback agar data load na ho (Safety Check)
  const vendors = weddingVendors || [];

  return (
    <div className="min-h-screen bg-brand-50 relative overflow-hidden pt-32 pb-20 px-6">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent -z-10"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-200 rounded-full blur-[100px] opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-sm bg-white px-4 py-1 rounded-full shadow-sm border border-brand-100">
            Curated Professionals
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-6 mb-4">
            Find Your Dream Team
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Browse through our handpicked selection of premium venues, photographers, and artists.
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div 
              key={vendor.id} 
              className="group bg-white rounded-3xl shadow-sm hover:shadow-glow border border-transparent hover:border-brand-200 overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* --- IMAGE FIX YAHAN HAI --- */}
              <div className="h-64 relative overflow-hidden bg-gray-200">
                <img 
                  src={vendor.image} 
                  alt={vendor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-400 shadow-sm border border-brand-100 uppercase tracking-wide">
                  {vendor.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-brand-400 transition-colors">
                    {vendor.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-800 font-bold text-sm">{vendor.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <MapPin size={16} className="mr-1 text-brand-300" />
                  {vendor.location}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Starting From</p>
                    <p className="text-xl font-bold text-gray-900">₹{Number(vendor.price).toLocaleString()}</p>
                  </div>
                  
                  <Link 
                    href={`/vendors/${vendor.id}`} 
                    className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-brand-400 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}