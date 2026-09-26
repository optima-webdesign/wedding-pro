"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; 
import toast from "react-hot-toast";
import { User, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const { register } = useAuth(); 
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // 1. Basic Validation
    if (!firstName || !lastName || !email || !password) {
        toast.error("Sab fields bharna zaroori hai bhai!");
        return;
    }

    if (password.length < 6) {
        toast.error("Password kam se kam 6 characters ka rakho.");
        return;
    }

    setLoading(true);
    const fullName = `${firstName} ${lastName}`.trim();

    try {
        // 2. Register Call
        const success = await register(fullName, email, password);
        
        if (success) {
            toast.success("Account ban gaya! Dashboard ja rahe hain...");
            // Redirect AuthContext handle karega
        }
    } catch (error) {
        console.error("Register Error:", error);
        toast.error("Error: " + error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex bg-brand-50">
      
      {/* Left Side: Image */}
      <div className="hidden lg:block w-5/12 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Wedding"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 p-12 text-white">
          <h2 className="text-4xl font-serif font-bold mb-2">Welcome to BandBaaja</h2>
          <p className="text-gray-200">Start planning your luxury wedding today.</p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-900">Sign Up</h1>
            <p className="text-gray-500 text-sm mt-2">Create your account instantly.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            
            <div className="flex gap-4">
                <div className="relative w-full">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="First Name"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 outline-none"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="relative w-full">
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 outline-none"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="password" 
                placeholder="Password (Min 6 chars)"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              disabled={loading}
              className="w-full bg-brand-400 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Already have an account? <Link href="/login" className="text-brand-400 font-bold hover:underline">Login here</Link>
          </p>

        </div>
      </div>
    </div>
  );
}