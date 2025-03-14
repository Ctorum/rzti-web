"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href) {
          const targetId = href.substring(1);
          scrollToSection(targetId);
        }
      });
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header scrollToSection={scrollToSection} />
      <main className="flex-1">
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <About scrollToSection={scrollToSection} />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
