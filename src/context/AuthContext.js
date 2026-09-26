"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Check if user is already logged in (Local Storage se)
  useEffect(() => {
    const storedUser = localStorage.getItem("demoUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 1. FAKE REGISTER
  const register = async (name, email, password) => {
    // Fake Processing Time
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const fakeUser = { displayName: name, email: email };
    setUser(fakeUser);
    localStorage.setItem("demoUser", JSON.stringify(fakeUser));
    
    router.push("/dashboard");
    return true;
  };

  // 2. FAKE LOGIN
  const login = async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Hardcoded demo check (Optional) or allow anyone
    const fakeUser = { displayName: email.split('@')[0], email: email };
    setUser(fakeUser);
    localStorage.setItem("demoUser", JSON.stringify(fakeUser));

    router.push("/dashboard");
    return true;
  };

  // 3. FAKE GOOGLE LOGIN
  const googleLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const fakeUser = { displayName: "Ajay Chauhan", email: "ajay@gmail.com" };
    setUser(fakeUser);
    localStorage.setItem("demoUser", JSON.stringify(fakeUser));
    
    router.push("/dashboard");
  };

  // 4. LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("demoUser");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);