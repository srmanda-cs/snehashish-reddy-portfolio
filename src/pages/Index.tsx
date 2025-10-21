import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImpactMetrics from "@/components/ImpactMetrics";
import CareerTimeline from "@/components/CareerTimeline";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate classes
    const animatedElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <ImpactMetrics />
      <CareerTimeline />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
