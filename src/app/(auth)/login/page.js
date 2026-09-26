"use client";

import React, { useState } from 'react';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Lock, Mail, User, ArrowRight, ShieldCheck, Briefcase, Heart } from "lucide-react";
import toast from 'react-hot-toast';

const LoginPage = () => {
  const { login, register, googleLogin } = useAuth();
  const router = useRouter();
  
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let success = false;

    // Demo Mode mein ye functions turant success return karenge
    if (isLogin) {
      success = await login(formData.email, formData.password);
    } else {
      success = await register(formData.name, formData.email, formData.password);
    }

    if (success) {
        toast.success(isLogin ? "Welcome Back!" : "Account Created!");
    }
    setLoading(false);
  };

  // --- DEMO LOGIN LOGIC (Quick Access) ---
  const fillDemoCredentials = (role) => {
    let creds = {};
    
    // Demo credentials - Backend nahi hai isliye ye sirf form fill karega
    if (role === 'admin') {
        creds = { email: 'admin@gmail.com', password: 'password123' };
        toast("Admin Credentials Filled!", { icon: '👮‍♂️' });
    } else if (role === 'vendor') {
        creds = { email: 'vendor@optima.com', password: 'password123' };
        toast("Vendor Credentials Filled!", { icon: '💼' });
    } else {
        creds = { email: 'ajay@gmail.com', password: 'password123' }; // User
        toast("User Credentials Filled!", { icon: '❤️' });
    }
    
    setFormData({ ...formData, email: creds.email, password: creds.password });
    setIsLogin(true); // Switch to login mode automatically
  };

  return (
    <div className="min-h-screen flex items-center pt-20 justify-center bg-brand-50 p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 w-full max-w-lg border border-white rounded-3xl shadow-glow">
        
        <div className="text-center mb-8">
            <span className="bg-brand-100 text-brand-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                Demo Mode Active
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900">
            {isLogin ? "Welcome Back" : "Join BandBaaja"}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
                {isLogin ? "Login to manage your wedding plans." : "Start planning your dream wedding today."}
            </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Name Field (Only for Register) */}
          {!isLogin && (
            <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="text" name="name" placeholder="Full Name" 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-200 outline-none transition" 
                    onChange={handleChange} 
                    required 
                />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
                type="email" name="email" placeholder="Email Address" 
                value={formData.email}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-200 outline-none transition" 
                onChange={handleChange} 
                required 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
                type="password" name="password" placeholder="Password" 
                value={formData.password}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-200 outline-none transition" 
                onChange={handleChange} 
                required 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="bg-gradient-to-r from-brand-300 to-brand-400 hover:from-brand-400 hover:to-brand-500 text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {loading ? "Processing..." : (isLogin ? "Login (Demo)" : "Create Account")} 
            {!loading && <ArrowRight size={20} />}
          </button>

          {/* Google Login (Demo) */}
          <button 
            type="button"
            onClick={googleLogin}
            className="w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            Continue with Google (Demo)
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          {isLogin ? "New here? " : "Already have an account? "}
          <span 
            className="font-bold text-brand-400 cursor-pointer hover:underline" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create Account" : "Login"}
          </span>
        </p>

        {/* --- DEMO ACCESS SECTION (Only for Portfolio) --- */}
        <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase text-center mb-4">— One-Click Demo Access —</p>
            <div className="grid grid-cols-3 gap-2">
                <button 
                    onClick={() => fillDemoCredentials('admin')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 hover:bg-red-50 hover:border-red-100 transition group"
                >
                    <ShieldCheck size={20} className="text-gray-400 group-hover:text-red-500 mb-1"/>
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-red-500">Admin</span>
                </button>

                <button 
                    onClick={() => fillDemoCredentials('vendor')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition group"
                >
                    <Briefcase size={20} className="text-gray-400 group-hover:text-blue-500 mb-1"/>
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-blue-500">Vendor</span>
                </button>

                <button 
                    onClick={() => fillDemoCredentials('user')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 hover:bg-brand-50 hover:border-brand-100 transition group"
                >
                    <Heart size={20} className="text-gray-400 group-hover:text-brand-400 mb-1"/>
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-brand-400">Couple</span>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;