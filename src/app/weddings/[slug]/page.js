"use client";

import { use, useState, useEffect, useCallback } from "react";
import { weddings } from "@/data/weddings";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function WeddingDetail({ params }) {
  const { slug } = use(params);
  
  const weddingIndex = weddings.findIndex((w) => w.slug === slug);
  
  if (weddingIndex === -1) {
    notFound();
  }
  
  const wedding = weddings[weddingIndex];
  
  const prevWedding = weddingIndex > 0 ? weddings[weddingIndex - 1] : null;
  const nextWedding = weddingIndex < weddings.length - 1 ? weddings[weddingIndex + 1] : null;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Wrap helper functions in useCallback and move them ABOVE the useEffect
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const showNextImage = useCallback((e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % wedding.gallery.length);
  }, [wedding.gallery.length]);

  const showPrevImage = useCallback((e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + wedding.gallery.length) % wedding.gallery.length);
  }, [wedding.gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "Escape") closeLightbox();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, showNextImage, showPrevImage, closeLightbox]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-ivory min-h-screen">
      
      <section className="relative w-full h-[60svh] min-h-112 md:h-[95svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={wedding.coverImage} 
            alt={wedding.title} 
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <Link 
            href="/weddings" 
            className="inline-flex items-center gap-2 text-beige hover:text-white font-sans text-xs uppercase tracking-widest font-bold mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-ivory mb-6 leading-tight drop-shadow-lg">
            {wedding.title}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-beige font-sans text-xs md:text-sm tracking-widest uppercase font-semibold">
            <span>{wedding.couple}</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent-500"></span>
            <span>{wedding.location}</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent-500"></span>
            <span>{new Date(wedding.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-6 block">
            The Story
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-10 leading-tight">
            A celebration of <br className="hidden sm:block" />
            <span className="italic font-light text-accent-500">timeless love</span>
          </h2>
          <p className="text-lg md:text-xl text-brown-muted leading-relaxed font-sans max-w-3xl mx-auto">
            {wedding.story}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 bg-white p-8 md:p-12 rounded-sm shadow-elegant">
            <h3 className="font-serif font-bold text-2xl text-charcoal mb-8">
              Celebration Details
            </h3>
            <div className="space-y-6 font-sans text-sm md:text-base">
              <div className="flex flex-col sm:flex-row justify-between border-b border-charcoal/10 pb-4 gap-2">
                <span className="text-brown-muted font-bold uppercase tracking-widest text-xs">Couple</span>
                <span className="text-charcoal font-medium text-left sm:text-right">{wedding.couple}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b border-charcoal/10 pb-4 gap-2">
                <span className="text-brown-muted font-bold uppercase tracking-widest text-xs">Location</span>
                <span className="text-charcoal font-medium text-left sm:text-right">{wedding.venue}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b border-charcoal/10 pb-4 gap-2">
                <span className="text-brown-muted font-bold uppercase tracking-widest text-xs">Style</span>
                <span className="text-charcoal font-medium text-left sm:text-right">{wedding.style}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b border-charcoal/10 pb-4 gap-2">
                <span className="text-brown-muted font-bold uppercase tracking-widest text-xs">Date</span>
                <span className="text-charcoal font-medium text-left sm:text-right">
                  {new Date(wedding.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-serif font-bold text-3xl text-charcoal mb-10">
              Event Highlights
            </h3>
            <ul className="space-y-6">
              {wedding.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <span className="mt-1 bg-accent-100 text-accent-500 p-2 rounded-full shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="text-charcoal text-lg leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-4 block">
              The Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
              Moments Captured
            </h2>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {wedding.gallery.map((imgSrc, index) => (
              <div 
                key={index} 
                onClick={() => openLightbox(index)}
                className="group cursor-pointer rounded-sm overflow-hidden bg-bg-soft relative break-inside-avoid"
              >
                <Image 
                  src={imgSrc} 
                  alt={`${wedding.couple} gallery image ${index + 1}`} 
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-2000 ease-out"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="bg-white text-charcoal px-6 py-3 rounded-sm font-sans text-xs tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-ivory">
        <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-charcoal/10">
          
          <div className="w-full md:w-1/2 p-12 md:p-16 hover:bg-white transition-colors duration-500 flex flex-col items-center md:items-start text-center md:text-left group cursor-pointer">
            {prevWedding ? (
              <Link href={`/weddings/${prevWedding.slug}`} className="block w-full">
                <span className="text-brown-muted font-sans tracking-widest uppercase text-[10px] font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Previous Wedding
                </span>
                <h4 className="text-2xl md:text-4xl font-serif font-bold text-charcoal group-hover:text-accent-500 transition-colors">
                  {prevWedding.title}
                </h4>
              </Link>
            ) : (
              <div className="opacity-30 pointer-events-none w-full">
                <span className="text-brown-muted font-sans tracking-widest uppercase text-[10px] font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                  <ArrowLeft size={14} /> Previous Wedding
                </span>
                <h4 className="text-2xl md:text-4xl font-serif font-bold text-charcoal">None</h4>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-12 md:p-16 hover:bg-white transition-colors duration-500 flex flex-col items-center md:items-end text-center md:text-right group cursor-pointer">
            {nextWedding ? (
              <Link href={`/weddings/${nextWedding.slug}`} className="block w-full">
                <span className="text-brown-muted font-sans tracking-widest uppercase text-[10px] font-bold mb-4 flex items-center justify-center md:justify-end gap-2">
                  Next Wedding <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <h4 className="text-2xl md:text-4xl font-serif font-bold text-charcoal group-hover:text-accent-500 transition-colors">
                  {nextWedding.title}
                </h4>
              </Link>
            ) : (
              <div className="opacity-30 pointer-events-none w-full">
                <span className="text-brown-muted font-sans tracking-widest uppercase text-[10px] font-bold mb-4 flex items-center justify-center md:justify-end gap-2">
                  Next Wedding <ArrowRight size={14} />
                </span>
                <h4 className="text-2xl md:text-4xl font-serif font-bold text-charcoal">None</h4>
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="bg-charcoal py-24 md:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-accent-500 font-sans tracking-widest uppercase text-xs font-semibold mb-6 block">
            Let&apos;s create your wedding story
          </span>
          <p className="font-serif font-bold text-4xl md:text-5xl text-ivory mb-12 leading-tight">
            Inspired by this <br className="hidden sm:block" />
            <span className="italic font-light text-accent-500">celebration?</span>
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-accent-500 text-charcoal hover:bg-white px-10 py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-bold transition-colors duration-300"
          >
            Plan Your Wedding <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex flex-col items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
          
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-accent-500 transition-colors z-50">
            <X size={36} strokeWidth={1.5} />
          </button>
          
          <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center px-4 md:px-16" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={wedding.gallery[currentIndex]} 
              alt={wedding.galleryCaptions?.[currentIndex] || "Wedding Image"} 
              fill
              className="object-contain rounded-sm shadow-2xl"
            />
            
            {wedding.galleryCaptions && wedding.galleryCaptions[currentIndex] && (
              <p className="absolute -bottom-10 left-0 w-full text-center text-beige font-sans tracking-widest uppercase text-xs px-6">
                {wedding.galleryCaptions[currentIndex]}
              </p>
            )}
          </div>

          <button 
            onClick={showPrevImage} 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-charcoal/50 hover:bg-accent-500 p-3 md:p-4 rounded-full transition-all"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={showNextImage} 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-charcoal/50 hover:bg-accent-500 p-3 md:p-4 rounded-full transition-all"
          >
            <ChevronRight size={32} />
          </button>

        </div>
      )}

    </div>
  );
}