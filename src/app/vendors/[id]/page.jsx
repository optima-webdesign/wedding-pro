"use client";

import { use, useState } from "react";
import { weddingVendors } from "@/data/vendors";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { MapPin, Star, CheckCircle2, ShieldCheck, ArrowLeft, Loader2 } from "lucide-react";
import toast from "react-hot-toast"; // Toast add kiya notification ke liye

export default function VendorDetailPage({ params }) {
  // Params unwrap logic
  const { id } = use(params);
  
  // Vendor Data Find Karo
  const vendor = weddingVendors.find((v) => v.id.toString() === id);
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Error Handling: Agar vendor na mile
  if (!vendor) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <h2 className="text-2xl font-bold mb-4">Vendor Not Found</h2>
        <button onClick={() => router.push('/vendors')} className="text-brand-400 underline">Go Back</button>
    </div>
  );

  // --- DEMO BOOKING FUNCTION (No Firebase Error) ---
  const handleBookNow = async () => {
    if (!user) {
      toast.error("Please Login to Book");
      router.push("/login");
      return;
    }

    setLoading(true);
    
    // Fake Processing (1.5 Seconds)
    setTimeout(() => {
        toast.success("🎉 Booking Request Sent! (Demo)");
        router.push("/dashboard");
        setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="group flex items-center text-gray-500 hover:text-brand-400 mb-8 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-brand-50 flex items-center justify-center mr-2 transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back to Vendors
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-2">
            
            {/* 👇 IMAGE UI FIXED HERE */}
            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-sm mb-8 border border-gray-100 relative group">
              <img 
                src={vendor.image} 
                alt={vendor.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found"}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </div>

            {/* Title & Info */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-50 text-brand-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-100">
                  {vendor.category}
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-gray-900">{vendor.rating}</span>
                  <span className="text-gray-400 text-sm">(24 reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                {vendor.name}
              </h1>
              <div className="flex items-center text-gray-500 text-lg">
                <MapPin size={20} className="mr-2 text-brand-300" />
                {vendor.location}
              </div>
            </div>

            <hr className="border-gray-100 my-8" />

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold mb-4">About the Vendor</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {vendor.description || "We bring years of experience and a passion for perfection to your special day. Our team is dedicated to making every moment memorable."}
              </p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold mb-6">Services Offered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vendor.features?.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 hover:bg-white hover:shadow-sm transition">
                    <CheckCircle2 className="text-brand-400 mr-3" size={20} />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white rounded-3xl p-8 shadow-glow border border-brand-100 relative overflow-hidden">
                
                {/* Decorative Top Gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-300 to-brand-400"></div>

                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Starting Price</p>
                    <p className="text-3xl font-bold text-gray-900">₹{Number(vendor.price).toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-sm text-gray-600 bg-brand-50/50 p-4 rounded-xl">
                    <ShieldCheck className="text-brand-400 shrink-0" size={20} />
                    <p>Your booking is protected by our <span className="font-bold text-brand-400">Secure Promise</span>.</p>
                  </div>
                </div>

                <button 
                  onClick={handleBookNow}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-300 to-brand-400 hover:from-brand-400 hover:to-brand-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" /> Processing...
                    </>
                  ) : (
                    "Request Booking"
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  You won't be charged yet.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}