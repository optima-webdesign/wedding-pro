import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/layout/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import Footer from "@/components/layout/Footer";

// Google Fonts Setup
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "BandBaaja | Premium Wedding Planner",
  description: "India's most trusted wedding planning platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} select-none`}>
      <body className="antialiased bg-gray-50">
        {/* Navbar hum agle step me banayenge */}
        <AuthProvider>
        <main className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster position="bottom-center" />
        </AuthProvider>
      </body>
    </html>
  );
}