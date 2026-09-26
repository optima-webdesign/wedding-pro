"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, LogOut, User } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock jab mobile menu open ho
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent py-5 md:py-6 border-b border-white/10"
            : "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tighter group z-50">
            <span className="text-brand-400 group-hover:text-brand-500 transition-colors">Band</span>
            <span className={`transition-colors ${isTransparent && !mobileMenuOpen ? "text-white" : "text-gray-900"}`}>
              Baaja
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm">
            {["Home", "Vendors", "About", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
                className={`transition-all duration-300 hover:-translate-y-0.5 ${
                  isTransparent 
                    ? "text-white/90 hover:text-white hover:drop-shadow-md" 
                    : "text-gray-600 hover:text-brand-400"
                }`}
              >
                {item}
              </Link>
            ))}

            {/* DESKTOP AUTH SECTION */}
            {user ? (
              <div className={`flex items-center gap-4 pl-6 border-l ${isTransparent ? "border-white/20" : "border-gray-300/50"}`}>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-brand-400 border ${
                      isTransparent ? "bg-white/10 border-white/20" : "bg-brand-50 border-brand-100"
                  }`}>
                      <User size={16} />
                  </div>
                  <div className="hidden lg:block text-left">
                      <p className={`text-[10px] uppercase font-bold ${isTransparent ? "text-white/60" : "text-gray-400"}`}>
                          Hello
                      </p>
                      <p className={`text-sm font-bold leading-none ${isTransparent ? "text-white" : "text-gray-800"}`}>
                          {user.displayName || "User"}
                      </p>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="bg-brand-400 text-white px-5 py-2 rounded-full shadow-glow hover:bg-brand-500 hover:shadow-lg transition-all text-xs font-bold uppercase tracking-wide"
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  title="Logout"
                  className={`p-2 rounded-full transition ${
                      isTransparent 
                      ? "text-white/80 hover:bg-white/10 hover:text-white" 
                      : "text-gray-400 hover:bg-red-50 hover:text-red-500"
                  }`}
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4 pl-4 border-l border-gray-300/50">
                <Link
                  href="/login"
                  className={`font-semibold transition ${
                      isTransparent ? "text-white hover:text-brand-200" : "text-gray-600 hover:text-brand-400"
                  }`}
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`md:hidden p-2 rounded-lg backdrop-blur-sm z-50 transition-colors ${
              isTransparent && !mobileMenuOpen ? "text-white bg-white/10" : "text-gray-800 bg-gray-100"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 px-6 pt-28 pb-10 flex flex-col h-screen overflow-y-auto animate-fade-in text-gray-900">
          <div className="flex flex-col gap-6 flex-grow">
            {["Home", "Vendors", "About", "Contact"].map((item) => (
                <Link 
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="block text-3xl font-serif font-bold text-gray-800 hover:text-brand-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {item}
                </Link>
            ))}
          </div>

          <hr className="border-gray-200 my-8" />
          
          {/* MOBILE AUTH SECTION */}
          {user ? (
            <div className="space-y-4 pb-6 mt-auto">
               <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-500">
                      <User size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Logged in as</p>
                        <p className="font-bold text-gray-900 text-lg">{user.displayName || "User"}</p>
                    </div>
               </div>
               <Link 
                  href="/dashboard" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block w-full text-center bg-brand-400 text-white py-4 rounded-xl font-bold hover:bg-brand-500 active:scale-[0.98] transition-all"
                >
                  Go to Dashboard
                </Link>
               <button 
                  onClick={() => { logout(); setMobileMenuOpen(false); }} 
                  className="block w-full text-center bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 active:scale-[0.98] transition-all"
                >
                  Logout
                </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 pb-6 mt-auto">
                <Link 
                  href="/login" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-center py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold active:bg-gray-50 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-center py-4 rounded-xl bg-brand-400 text-white font-bold active:bg-brand-500 transition-colors"
                >
                  Sign Up
                </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}