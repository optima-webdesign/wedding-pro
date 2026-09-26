"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, Instagram, Facebook, Twitter, User, FileText, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsFlying(true); 

    // Animation Time: 1.5 Seconds
    setTimeout(() => {
        alert("Message Sent! ✈️");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
        setIsFlying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-50 pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
            <span className="text-brand-400 font-bold tracking-widest uppercase text-sm">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
                Let's Plan Your <span className="text-brand-400">Big Day</span>
            </h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Have a question about vendors, pricing, or just want to say hi? 
                Drop us a message.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: Contact Info */}
            <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 hover:-translate-y-1 transition duration-300 group">
                        <div className="w-12 h-12 bg-brand-50 text-brand-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                        <p className="text-gray-500 text-sm mt-1">Mon-Sat from 9am to 7pm</p>
                        <p className="font-bold text-brand-500 mt-2">+91 77788 81864</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 hover:-translate-y-1 transition duration-300 group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                        <p className="text-gray-500 text-sm mt-1">For support & inquiries</p>
                        <p className="font-bold text-blue-600 mt-2">info@optimawebdesign.in</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-serif font-bold text-2xl text-gray-900 mb-6">Visit Our Office</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-brand-400 mt-1" size={20} />
                                <div>
                                    <p className="font-bold text-gray-800">BandBaaja HQ</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        101, Titanium Heights, <br />
                                        SG Highway, Ahmedabad, Gujarat - 380015
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className="text-brand-400" size={20} />
                                <p className="text-gray-500 text-sm">Open: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-4">Follow Us</p>
                            <div className="flex gap-4">
                                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-400 hover:text-white transition cursor-pointer">
                                        <Icon size={18} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10"></div>
                </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-glow border border-white sticky top-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Your Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-200 outline-none transition" placeholder="John Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-200 outline-none transition" placeholder="john@example.com" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Subject</label>
                        <div className="relative">
                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <select className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-200 outline-none transition text-gray-600 appearance-none" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}>
                                <option value="">Select a topic</option>
                                <option value="vendor">Vendor Inquiry</option>
                                <option value="support">Customer Support</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Message</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                            <textarea rows="4" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-200 outline-none transition resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                    </div>

                    {/* --- THE BUTTON WITH REAL ICON ANIMATION --- */}
                    <button 
                        disabled={loading || isFlying}
                        className="w-full h-14 bg-gradient-to-r from-brand-300 to-brand-400 hover:from-brand-400 hover:to-brand-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 relative overflow-visible"
                    >
                        {/* 1. Text Change Animation */}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={isFlying ? "sending" : "send"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isFlying ? "Sending..." : "Send Message"}
                            </motion.span>
                        </AnimatePresence>

                        {/* 2. The ICON itself flies away */}
                        <motion.div
                            animate={isFlying ? { 
                                x: 120,    // Right taraf jayega
                                y: -80,    // Upar hawa me jayega
                                rotate: -45, // Plane ki tarah ghumega
                                scale: 0.5, // Door jate hue chhota hoga
                                opacity: 0  // Gayab ho jayega
                            } : { 
                                x: 0, 
                                y: 0, 
                                rotate: 0, 
                                scale: 1, 
                                opacity: 1 
                            }}
                            transition={{ duration: 0.8, ease: "easeIn" }} // Tez udega
                        >
                            <Send size={20} strokeWidth={2} fill="currentColor" className={isFlying ? "text-white" : ""} />
                        </motion.div>

                        {/* 3. Small Smoke Behind the Icon */}
                        {isFlying && (
                            <div className="absolute right-[40%] top-1/2 -translate-y-1/2 pointer-events-none">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute bg-white/70 rounded-full"
                                        initial={{ opacity: 0.8, scale: 0 }}
                                        animate={{ opacity: 0, scale: 1.5, x: -20 - (i*10) }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        style={{ width: "8px", height: "8px" }}
                                    />
                                ))}
                            </div>
                        )}

                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
}