"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { Calendar, Heart, User } from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('bookings');
  
  const [profile, setProfile] = useState({
    name: user?.displayName || "Ajay Chauhan",
    phone: "+91 98765 43210",
    weddingDate: "2026-12-14",
    city: "Ahmedabad, Gujarat",
    budget: "2500000"
  });

  // 👇 UPDATED IMAGES JO PAKKA CHALENGI
  const bookings = [
    { 
      id: 1, 
      vendor: "Stories by Joseph Radhik", 
      category: "Photography", 
      date: "Dec 14-15, 2026", 
      price: "1,50,000", 
      status: "Confirmed", 
      // Nayi Image Link
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      id: 2, 
      vendor: "The Leela Palace", 
      category: "Venue", 
      date: "Dec 14, 2026", 
      price: "20,00,000", 
      status: "Pending", 
      // Nayi Image Link
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const wishlist = [
    { id: 101, name: "Ojas Rajani Makeup", category: "Makeup", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop", rating: 4.8 },
    { id: 102, name: "Ferns N Petals Decor", category: "Decor", image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2070&auto=format&fit=crop", rating: 4.6 }
  ];

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success("Profile Updated (Demo Mode)");
  };

  if (!user) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-brand-50 pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
                <span className="text-brand-400 font-bold tracking-widest uppercase text-xs">Couple Dashboard</span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-2">
                    Welcome, <span className="text-brand-400 capitalize">{profile.name}</span> 💍
                </h1>
                <p className="text-gray-500 mt-2">This is a Demo Dashboard (No Backend Connected).</p>
            </div>
            
            {/* Countdown */}
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
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 h-fit space-y-6">
                <div className="bg-white rounded-3xl shadow-glow border border-white p-4">
                    <nav className="space-y-1">
                        {[
                            { id: 'bookings', label: 'My Bookings', icon: Calendar },
                            { id: 'wishlist', label: 'Shortlisted', icon: Heart },
                            { id: 'profile', label: 'Wedding Details', icon: User },
                        ].map((item) => (
                            <button 
                                key={item.id}
                                onClick={() => setActiveTab(item.id)} 
                                className={`w-full text-left px-4 py-3.5 rounded-xl font-bold flex items-center gap-3 transition-all ${
                                    activeTab === item.id 
                                    ? 'bg-brand-50 text-brand-500 shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <item.icon size={18}/> {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
                
                {activeTab === 'bookings' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-bold text-gray-800">Your Dream Team</h2>
                        {bookings.map((booking) => (
                            <div key={booking.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-32 h-32 rounded-2xl bg-gray-100 overflow-hidden shrink-0">
                                    {/* 👇 MAIN IMAGE FIX */}
                                    <img 
                                        src={booking.image} 
                                        alt={booking.vendor} 
                                        className="w-full h-full object-cover" 
                                        onError={(e) => e.target.src = "https://via.placeholder.com/150"} // Fallback agar fail ho
                                    />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-xs font-bold text-brand-400 uppercase">{booking.category}</span>
                                            <h3 className="font-serif font-bold text-xl text-gray-900">{booking.vendor}</h3>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${booking.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        <button className="text-sm font-bold text-white bg-green-500 px-4 py-2 rounded-full shadow-sm">Chat</button>
                                        <div className="ml-auto font-bold text-lg text-gray-900">₹{booking.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'wishlist' && (
                    <div className="animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-6">
                            {wishlist.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm p-5">
                                    <div className="h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
                                        {/* 👇 WISHLIST IMAGE FIX */}
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <Link href={`/vendors/${item.id}`} className="text-brand-500 font-bold text-sm mt-2 block">View Details</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm animate-fade-in">
                        <h2 className="font-bold text-xl mb-6">Edit Wedding Details</h2>
                        <form onSubmit={handleUpdate} className="grid md:grid-cols-2 gap-6">
                            <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} className="w-full p-4 bg-gray-50 rounded-xl outline-none" />
                            <input type="text" value={profile.city} onChange={(e) => setProfile({...profile, city: e.target.value})} className="w-full p-4 bg-gray-50 rounded-xl outline-none" />
                            <button className="col-span-2 w-full bg-brand-400 text-white py-4 rounded-xl font-bold">Save Changes</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}