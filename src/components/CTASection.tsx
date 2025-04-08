
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden hero-gradient">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: Math.random() * 0.5,
              animation: `float ${Math.random() * 8 + 5}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6 glow-text">
            This is not just another IDE.
            <br />
            This is <span className="text-gradient">Pandr</span>.
          </h2>
          
          <p className="section-subtitle mx-auto mb-10">
            Join thousands of developers who have transformed their coding experience
            with the most immersive IDE ever created.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-pandr-ultraviolet to-pandr-accent hover:shadow-glow text-white px-8 py-7 text-lg w-full sm:w-auto"
            >
              Start Your Free Trial Today
            </Button>
            
            <div className="text-sm text-gray-400">
              No credit card required • 14-day free trial
            </div>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 opacity-80">
            {/* Brand logos */}
            <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center">
              <div className="w-16 h-4 bg-white/20 rounded" />
            </div>
            <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center">
              <div className="w-16 h-4 bg-white/20 rounded" />
            </div>
            <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center">
              <div className="w-16 h-4 bg-white/20 rounded" />
            </div>
            <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center">
              <div className="w-16 h-4 bg-white/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
