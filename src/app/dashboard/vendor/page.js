"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  Calendar,
  Star
} from "lucide-react";

export default function VendorDashboard() {
  const { user } = useAuth();
  
  // Fake Data for UI
  const [leads, setLeads] = useState([
    { id: 1, name: "Rahul & Anjali", type: "Wedding Photography", date: "Jan 24, 2026", budget: "₹2.5L", status: "New", location: "Udaipur" },
    { id: 2, name: "Amit's Sangeet", type: "Event Coverage", date: "Feb 10, 2026", budget: "₹50k", status: "Accepted", location: "Mumbai" },
    { id: 3, name: "Priya's Bridal", type: "Makeup", date: "Mar 05, 2026", budget: "₹15k", status: "New", location: "Delhi" },
  ]);

  const handleAccept = (id) => {
    toast.success("Lead Accepted! Contact details unlocked.");
    // Update local state to show 'Accepted'
    setLeads(leads.map(l => l.id === id ? {...l, status: "Accepted"} : l));
  };

  return (
    <div className="min-h-screen bg-brand-50 pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header & Stats */}
        <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                        Vendor Dashboard
                    </h1>
                    <p className="text-gray-500 mt-2">Manage your leads and track your growth.</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-brand-100">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-gray-700">Accepting New Orders</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Revenue", value: "₹8.5L", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
                    { label: "Active Leads", value: "12", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Bookings", value: "8", icon: Calendar, color: "text-brand-400", bg: "bg-brand-50" },
                    { label: "Rating", value: "4.9", icon: Star, color: "text-yellow-500", bg: "bg-yellow-50" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-50 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            {idx === 0 && <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">+12%</span>}
                        </div>
                        <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                    </div>
                ))}
            </div>
        </div>

        {/* 2. Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* LEFT: Leads List (Span 2) */}
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <MessageSquare className="text-brand-400" size={20}/> Recent Inquiries
                </h2>

                <div className="space-y-4">
                    {leads.map((lead) => (
                        <div key={lead.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-200 transition-all group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                
                                {/* Lead Info */}
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-lg font-bold text-gray-900">{lead.name}</h3>
                                        {lead.status === 'New' && (
                                            <span className="bg-brand-100 text-brand-500 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide animate-pulse">
                                                New
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">{lead.type} • {lead.location}</p>
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                                        <span className="flex items-center gap-1"><Calendar size={12}/> {lead.date}</span>
                                        <span className="flex items-center gap-1 text-gray-900 font-bold bg-gray-50 px-2 py-1 rounded"><DollarSign size={12}/> Budget: {lead.budget}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div>
                                    {lead.status === 'New' ? (
                                        <div className="flex gap-3">
                                            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 transition">
                                                Ignore
                                            </button>
                                            <button 
                                                onClick={() => handleAccept(lead.id)}
                                                className="bg-brand-400 hover:bg-brand-500 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-glow hover:shadow-lg transition-all"
                                            >
                                                Accept Lead
                                            </button>
                                        </div>
                                    ) : (
                                        <button className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg cursor-default">
                                            <CheckCircle size={18} /> Accepted
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT: Quick Actions & Tips (Span 1) */}
            <div className="space-y-8">
                
                {/* Upgrade Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white text-center shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-400/20 rounded-full blur-2xl"></div>
                    <h3 className="text-xl font-bold mb-2">Boost Your Profile</h3>
                    <p className="text-gray-400 text-sm mb-6">Get 3x more leads by featuring your profile on the homepage.</p>
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-50 transition w-full">
                        Upgrade to Premium
                    </button>
                </div>

                {/* Profile Completion */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                    <h3 className="font-bold text-gray-800 mb-4">Profile Strength</h3>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                        <div className="bg-brand-400 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">70% Completed</p>
                    <ul className="text-sm space-y-3">
                        <li className="flex items-center gap-2 text-gray-400 line-through"><CheckCircle size={14} className="text-green-500"/> Upload Portfolio</li>
                        <li className="flex items-center gap-2 text-gray-700"><div className="w-4 h-4 rounded-full border border-gray-300"></div> Add Pricing Packages</li>
                        <li className="flex items-center gap-2 text-gray-700"><div className="w-4 h-4 rounded-full border border-gray-300"></div> Verify ID Proof</li>
                    </ul>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}