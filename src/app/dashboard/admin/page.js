"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, User, FileText, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsFlying(true); 

    setTimeout(() => {
        alert("Message Sent! ✈️");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
        setIsFlying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-50 pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Backgrounds */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Let's Plan Your Big Day</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                {/* Contact Info Cards (Same as before) */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                        <Phone className="w-10 h-10 text-brand-400 mb-4" />
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="font-bold text-brand-500 mt-2">+91 77788 81864</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                        <Mail className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="font-bold text-blue-600 mt-2">info@optimawebdesign.in</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-glow border border-white sticky top-28">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                        <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 bg-white border rounded-xl" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        <input type="email" required placeholder="Email" className="w-full px-4 py-3 bg-white border rounded-xl" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <select className="w-full px-4 py-3 bg-white border rounded-xl text-gray-600" onChange={(e) => setFormData({...formData, subject: e.target.value})}>
                        <option>Select Topic</option>
                        <option>Vendor Inquiry</option>
                        <option>Support</option>
                    </select>
                    <textarea rows="4" required placeholder="Message" className="w-full px-4 py-3 bg-white border rounded-xl" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>

                    {/* --- BUTTON WITH IMAGE PLANE --- */}
                    <button 
                        disabled={loading || isFlying}
                        className="w-full h-14 bg-gradient-to-r from-brand-300 to-brand-400 hover:from-brand-400 hover:to-brand-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 relative overflow-visible"
                    >
                        {/* Text Animation */}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={isFlying ? "sending" : "send"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                {isFlying ? "Sending..." : "Send Message"}
                            </motion.span>
                        </AnimatePresence>

                        {/* --- THE IMAGE ITSELF FLIES --- */}
                        <motion.img
                            src="/paper-plane.png" // ⚠️ IMAGE PUBLIC FOLDER MEIN HONI CHAHIYE
                            alt="Plane"
                            className="w-8 h-8 object-contain" // Size adjust kar lena
                            animate={isFlying ? { 
                                x: 150,     // Right
                                y: -100,    // Up
                                rotate: -45,// Tilt
                                scale: 0.5, // Shrink
                                opacity: 0  // Fade
                            } : { 
                                x: 0, 
                                y: 0, 
                                rotate: 0, 
                                scale: 1, 
                                opacity: 1 
                            }}
                            transition={{ duration: 1, ease: "easeIn" }}
                        />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}