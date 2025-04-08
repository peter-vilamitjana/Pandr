import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.getElementById('hero-content');
      const orbElement = document.getElementById('hero-orb');
      const gridElement = document.getElementById('hero-grid');
      
      if (heroElement) {
        heroElement.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      
      if (orbElement) {
        orbElement.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      
      if (gridElement) {
        gridElement.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-32 flex flex-col items-center overflow-hidden hero-gradient">
      {/* Glowing Orb */}
      <div 
        id="hero-orb"
        className="absolute -right-[10%] top-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pandr-ultraviolet/20 to-pandr-accent/10 blur-[100px]"
      />
      
      {/* Grid Background */}
      <div 
        id="hero-grid"
        className="absolute inset-0 grid-bg z-0 opacity-20"
      />
      
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-pandr-violet/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 6 + 3}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <div id="hero-content" className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-8 animate-float">
            <span className="py-1 px-4 rounded-full text-sm border border-pandr-violet/30 bg-pandr-darkGray/50 text-pandr-lavender flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-pandr-accent animate-pulse"></span>
              Now in Public Beta 2.0
            </span>
          </div>
          
          <h1 className="section-title mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Code with clarity.
            <br /> 
            Ship with <span className="text-gradient">confidence.</span>
          </h1>
          
          <p className="section-subtitle mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            Meet Pandr. The IDE that removes friction, boosts focus, and gives you control.
            Designed for developers who demand both power and elegance.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-gradient-to-r from-pandr-ultraviolet to-pandr-accent hover:shadow-glow text-white px-6 py-6 text-lg w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-pandr-violet/30 text-pandr-lavender hover:text-white hover:bg-pandr-darkGray/50 px-6 py-6 text-lg w-full sm:w-auto">
              See the Demo
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Code Preview dentro del hero */}
          <div 
            className="mt-16 w-[90%] max-w-5xl mx-auto glassmorphism rounded-lg border-t border-pandr-violet/20 shadow-glow animate-slide-up opacity-0" 
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex items-center gap-1.5 absolute left-4 top-4">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
            </div>
            <div className="overflow-hidden h-[150px] sm:h-[200px] p-8">
              <pre className="text-xs sm:text-sm overflow-hidden">
                <code className="font-mono">
                  <span className="text-blue-400">import</span> <span className="text-cyan-300">&#123; useState, useEffect &#125;</span> <span className="text-blue-400">from</span> <span className="text-green-400">"react"</span>;
                  <br /><br />
                  <span className="text-blue-400">const</span> <span className="text-yellow-300">PandrEditor</span> <span className="text-white">=</span> <span className="text-blue-400">()</span> <span className="text-white">=&gt;</span> <span className="text-white">&#123;</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">const</span> [code, setCode] = <span className="text-yellow-300">useState</span>(<span className="text-green-400">""</span>);
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">const</span> [theme, setTheme] = <span className="text-yellow-300">useState</span>(<span className="text-green-400">"cosmic-violet"</span>);
                  <br /><br />
                  &nbsp;&nbsp;<span className="text-yellow-300">useEffect</span>(() =&gt; &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">const</span> pandr = <span className="text-blue-400">new</span> <span className="text-yellow-300">PandrEngine</span>(&#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoComplete: <span className="text-purple-400">true</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zenMode: <span className="text-purple-400">true</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;);
                  <br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;pandr.init();
                  <br />
                  &nbsp;&nbsp;&#125;, [theme]);
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
