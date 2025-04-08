
import React from "react";
import { ArrowUpRight } from "lucide-react";

const WhySection = () => {
  return (
    <section id="why" className="py-32 bg-pandr-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pandr-darkGray/10 to-transparent opacity-70" />
      
      {/* Purple glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-pandr-ultraviolet/10 rounded-full blur-[100px] opacity-30" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6 text-center">
            Why <span className="text-gradient">Pandr</span> Matters
          </h2>
          
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-pandr-accent to-transparent mx-auto mb-12" />
          
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              In a world where developer cognitive load is at its peak, we're on a mission to create a space where code flows naturally, without the constant friction of context switching and tool juggling.
            </p>
            
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="neo-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Developer Focus Crisis</h3>
                <p className="text-gray-400">
                  The average developer loses 4.2 hours per week to unnecessary distractions and context switching between tools. Pandr's unified workflow eliminates the cognitive burden.
                </p>
              </div>
              
              <div className="neo-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">The Quality Connection</h3>
                <p className="text-gray-400">
                  Projects built with focused attention have 37% fewer critical bugs. Pandr's flow state preservation leads directly to higher quality code.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 neo-blur rounded-xl overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-1 lg:col-span-2">
                  <h3 className="text-2xl font-display font-bold mb-4">
                    The Flow Multiplier Effect
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    When developers achieve and maintain flow state, productivity increases exponentially. Our research shows that uninterrupted focus sessions of 2+ hours result in 5× more code shipped compared to fragmented work periods.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <div className="text-3xl font-display font-bold text-gradient mb-2">87%</div>
                      <div className="text-sm text-gray-400">of developers report deeper satisfaction with their work</div>
                    </div>
                    
                    <div>
                      <div className="text-3xl font-display font-bold text-gradient mb-2">3.2×</div>
                      <div className="text-sm text-gray-400">faster problem-solving in complex debugging scenarios</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:border-l lg:border-pandr-violet/10 lg:pl-8">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-lg text-pandr-lavender">From Our Users</h4>
                    
                    <div className="p-4 rounded bg-white/5">
                      <p className="text-gray-300 italic text-sm">
                        "Pandr has fundamentally changed how I work. The focus I can achieve now wasn't possible with my previous setup."
                      </p>
                      <p className="text-xs text-pandr-lavender mt-2">— Sarah K., Senior Engineer</p>
                    </div>
                    
                    <div className="p-4 rounded bg-white/5">
                      <p className="text-gray-300 italic text-sm">
                        "The cognitive load reduction is real. I spend less mental energy on my tools and more on actual problem-solving."
                      </p>
                      <p className="text-xs text-pandr-lavender mt-2">— Marcus T., Tech Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-pandr-lavender hover:text-white group">
              <span className="mr-2 group-hover:underline">Read our full research paper</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
