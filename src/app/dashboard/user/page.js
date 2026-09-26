"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { 
  MessageCircle, Phone, Calendar, Heart, User, 
  MapPin, Clock, CheckCircle, ArrowRight, Wallet 
} from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('bookings');
  
  // Mock Data (Real world me ye database se aayega)
  const [profile, setProfile] = useState({
    name: user?.displayName || user?.email?.split('@')[0] || "Rahul & Anjali",
    phone: "+91 98765 43210",
    weddingDate: "2026-12-14",
    city: "Udaipur, Rajasthan",
    budget: "2500000"
  });

  const bookings = [
    { 
      id: 1, 
      vendor: "Stories by Joseph Radhik", 
      category: "Photography", 
      date: "Dec 14-15, 2026", 
      price: "1,50,000", 
      status: "Confirmed", 
      image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80"
    },
    { 
      id: 2, 
      vendor: "The Leela Palace", 
      category: "Venue", 
      date: "Dec 14, 2026", 
      price: "20,00,000", 
      status: "Pending", 
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
    }
  ];

  const wishlist = [
    { id: 101, name: "Ojas Rajani Makeup", category: "Makeup", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80", rating: 4.8 },
    { id: 102, name: "Ferns N Petals Decor", category: "Decor", image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80", rating: 4.6 }
  ];

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-brand-50 pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
                <span className="text-brand-400 font-bold tracking-widest uppercase text-xs">Couple Dashboard</span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-2">
                    Welcome, <span className="text-brand-400 capitalize">{profile.name}</span> 💍
                </h1>
                <p className="text-gray-500 mt-2">Plan your perfect day, one step at a time.</p>
            </div>
            
            {/* Wedding Countdown Card */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-brand-100 flex items-center gap-4">
                <div className="text-center px-4 border-r border-gray-200">
                    <span className="block text-2xl font-bold text-brand-400">324</span>
                    <span className="text-xs text-gray-500 uppercase font-bold">Days Left</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-800">Big Day</p>
                    <p className="text-gray-500 text-sm">{profile.weddingDate}</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/4 h-fit sticky top-28 space-y-6">
                <div className="bg-white rounded-3xl shadow-glow border border-white p-4 overflow-hidden">
                    <nav className="space-y-1">
                        {[
                            { id: 'bookings', label: 'My Bookings', icon: Calendar },
                            { id: 'wishlist', label: 'Shortlisted Vendors', icon: Heart },
                            { id: 'profile', label: 'Wedding Details', icon: User },
                        ].map((item) => (
                            <button 
                                key={item.id}
                                onClick={() => setActiveTab(item.id)} 
                                className={`w-full text-left px-4 py-3.5 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
                                    activeTab === item.id 
                                    ? 'bg-brand-50 text-brand-500 shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <item.icon size={18}/> {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Budget Tracker Widget */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white shadow-xl">
                    <div className="flex items-center gap-2 mb-4 text-brand-200">
                        <Wallet size={20} /> <span className="font-bold text-sm">Budget Tracker</span>
                    </div>
                    <h3 className="text-2xl font-bold">₹21.5L <span className="text-sm text-gray-400 font-normal">/ ₹25L</span></h3>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                        <div className="bg-brand-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">85% of budget utilized. You are on track!</p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full lg:w-3/4">
                
                {/* 1. BOOKINGS TAB */}
                {activeTab === 'bookings' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-bold text-gray-800">Your Dream Team</h2>
                        {bookings.map((booking) => (
                            <div key={booking.id} className="bg-white p-4 md:p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
                                {/* Image */}
                                <div className="w-full md:w-32 h-32 rounded-2xl bg-gray-100 overflow-hidden shrink-0">
                                    <img src={booking.image} alt={booking.vendor} className="w-full h-full object-cover" />
                                </div>
                                
                                {/* Details */}
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-xs font-bold text-brand-400 uppercase tracking-wide">{booking.category}</span>
                                            <h3 className="font-serif font-bold text-xl text-gray-900 mt-1">{booking.vendor}</h3>
                                            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1"><Clock size={14}/> {booking.date}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                            booking.status === 'Confirmed' 
                                            ? 'bg-green-50 text-green-600 border-green-100' 
                                            : 'bg-yellow-50 text-yellow-600 border-yellow-100'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 flex gap-3">
                                        <button className="flex items-center gap-2 text-sm font-bold text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition shadow-sm">
                                            <MessageCircle size={16}/> Chat
                                        </button>
                                        <button className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition">
                                            <Phone size={16}/> Call
                                        </button>
                                        <div className="ml-auto font-bold text-lg text-gray-900">₹{booking.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 2. WISHLIST TAB */}
                {activeTab === 'wishlist' && (
                    <div className="animate-fade-in">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Shortlisted Vendors</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {wishlist.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition group">
                                    <div className="h-40 bg-gray-200 relative overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                                        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">
                                            <Heart size={16} fill="currentColor"/>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <span className="text-xs font-bold text-gray-400 uppercase">{item.category}</span>
                                        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1 mb-4">
                                            ⭐ <span className="font-bold text-gray-800">{item.rating}</span>
                                        </div>
                                        <Link href={`/vendors/${item.id}`} className="block text-center w-full bg-gray-50 hover:bg-brand-50 text-brand-500 font-bold py-2 rounded-xl text-sm transition">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. PROFILE TAB */}
                {activeTab === 'profile' && (
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm animate-fade-in relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <h2 className="font-bold text-xl mb-6 text-gray-900">Edit Wedding Details</h2>
                        <form onSubmit={handleUpdate} className="grid md:grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <label className="text-xs font-bold uppercase text-gray-500 mb-1 block">Couple Name</label>
                                <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-200 outline-none font-serif text-lg" />
                            </div>
                            
                            <div>
                                <label className="text-xs font-bold uppercase text-gray-500 mb-1 block">Wedding City</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="text" value={profile.city} onChange={(e) => setProfile({...profile, city: e.target.value})} className="w-full pl-12 p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-200 outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold uppercase text-gray-500 mb-1 block">Wedding Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="date" value={profile.weddingDate} onChange={(e) => setProfile({...profile, weddingDate: e.target.value})} className="w-full pl-12 p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-200 outline-none" />
                                </div>
                            </div>

                            <div className="col-span-2 mt-4">
                                <button className="w-full bg-gradient-to-r from-brand-300 to-brand-400 hover:from-brand-400 hover:to-brand-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                    Save Changes <ArrowRight size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}