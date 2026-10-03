"use client";

import BrandIntro from "@/components/home/brand-intro";
import FeaturedWeddings from "@/components/home/featured-weddings";
import FinalCTA from "@/components/home/final-cta";
import Hero from "@/components/home/hero";
import OurProcess from "@/components/home/our-process";
import OurServices from "@/components/home/our-services";
import WhyChooseUs from "@/components/home/why-choose-us";
// Baaki components bhi import kar lena jaise banate jao

export default function Home() {
  return (
    <div className="bg-ivory min-h-screen">
      <Hero />
      <BrandIntro />
      <FeaturedWeddings />
      <OurServices />
      <WhyChooseUs />
      <OurProcess />
      <FinalCTA />
    </div>
  );
}