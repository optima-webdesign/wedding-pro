"use client";

import { useState } from "react";
import { Phone, Mail, ArrowRight, User, Calendar, MapPin, List, MessageSquare } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual API endpoint for the client's working backend
    alert("Form submission triggered. Connect this to your real backend API.");
  };

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24 px-6">
      
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-4 block">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
          Let&apos;s Make Your Day <br />
          <span className="italic font-light">Unforgettable</span>
        </h1>
        <p className="text-lg text-brown-muted max-w-2xl mx-auto">
          Tell us about your wedding and let&apos;s start planning something beautiful.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-8">Contact Information</h3>
              <div className="space-y-6">
                
                <div className="group flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 shadow-sm border border-gray-100 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-1 mt-1">Email Us</h4>
                    {/* Update this to the client's actual email, not Optima Webdesign */}
                    <p className="text-brown-muted text-sm">client@example.com</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 shadow-sm border border-gray-100 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-1 mt-1">Call Us</h4>
                    <p className="text-brown-muted text-sm">+91 77788 81864</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                Your story starts <span className="italic font-light">here.</span>
              </h3>
              <p className="text-brown-muted text-sm leading-relaxed">
                Whether you have a clear vision or need guidance finding your aesthetic, we&apos;d love to hear about your celebration.
              </p>
            </div>

          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-elegant border border-gray-50">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                Tell us about your celebration
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-sans tracking-widest font-semibold uppercase text-brown-muted mb-2 block">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        className="w-full pl-12 pr-4 py-3 bg-bg-soft border border-transparent focus:border-accent-300 focus:bg-white rounded-sm outline-none transition-all text-charcoal font-sans text-sm" 
                        placeholder="Enter your name" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-sans tracking-widest font-semibold uppercase text-brown-muted mb-2 block">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        className="w-full pl-12 pr-4 py-3 bg-bg-soft border border-transparent focus:border-accent-300 focus:bg-white rounded-sm outline-none transition-all text-charcoal font-sans text-sm" 
                        placeholder="Your email address" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-sans tracking-widest font-semibold uppercase text-brown-muted mb-2 block">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        type="tel" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                        className="w-full pl-12 pr-4 py-3 bg-bg-soft border border-transparent focus:border-accent-300 focus:bg-white rounded-sm outline-none transition-all text-charcoal font-sans text-sm" 
                        placeholder="+91" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-sans tracking-widest font-semibold uppercase text-brown-muted mb-2 block">Wedding Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        type="date" 
                        value={formData.date} 
                        onChange={(e) => setFormData({...formData, date: e.target.value})} 
                        className="w-full pl-12 pr-4 py-3 bg-bg-soft border border-transparent focus:border-accent-300 focus:bg-white rounded-sm outline-none transition-all text-charcoal font-sans text-sm" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-sans tracking-widest font-semibold uppercase text-brown-muted mb-2 block">Wedding Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        type="text" 
                        value={formData.location} 
                        onChange={(e) => setFormData({...formData, location: e.target.value})} 
                        className="w-full pl-12 pr-4 py-3 bg-bg-soft border border-transparent focus:border-accent-300 focus:bg-white rounded-sm outline-none transition-all text-charcoal font-sans text-sm" 
                        placeholder="City or venue" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-sans tracking-widest font-semibold uppercase text-brown-muted mb-2 block">Service Interested In</label>
                    <div className="relative">
                      <List className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <select 
                        value={formData.service} 
                        onChange={(e) => setFormData({...formData, service: e.target.value})} 
                        className="w-full pl-12 pr-4 py-3 bg-bg-soft border border-transparent focus:border-accent-300 focus:bg-white rounded-sm outline-none transition-all text-charcoal font-sans text-sm appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="wedding-planning">Wedding Planning</option>
                        <option value="wedding-decor">Wedding Decor</option>
                        <option value="photography-films">Photography & Films</option>
                        <option value="venue-selection">Venue Selection</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-sans tracking-widest font-semibold uppercase text-brown-muted mb-2 block">Tell us about your wedding</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-300" size={18} />
                    <textarea 
                      rows="4" 
                      required 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                      className="w-full pl-12 pr-4 py-3 bg-bg-soft border border-transparent focus:border-accent-300 focus:bg-white rounded-sm outline-none transition-all text-charcoal font-sans text-sm resize-none" 
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-charcoal text-white px-10 py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-bold transition-colors duration-300"
                  >
                    Send Inquiry <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}