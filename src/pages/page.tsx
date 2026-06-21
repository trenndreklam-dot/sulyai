"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Dashboard from "./components/Dashboard";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white min-h-screen">
      {/* شريط التنقل العلوي */}
      <Navbar />
      
      {/* القسم الرئيسي (الـ Hero) */}
      <Hero />
      
      {/* باقي أقسام الصفحة */}
      <Stats />
      <Features />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}