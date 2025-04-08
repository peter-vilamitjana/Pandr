
import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const WhySection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp();
        }
      });
    }, { threshold: 0.5 });
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!editorRef.current || !cursorRef.current) return;
    
    const text = "I LOVE Pandr :)";
    let i = 0;
    let isTyping = true;
    let direction = 1;
    
    const typeText = () => {
      if (!editorRef.current || !cursorRef.current) return;
      
      if (isTyping) {
        if (i < text.length && direction === 1) {
          editorRef.current.textContent = text.substring(0, i + 1);
          i++;
        } else if (i > 0 && direction === -1) {
          editorRef.current.textContent = text.substring(0, i - 1);
          i--;
        } else {
          // Change direction or pause
          if (direction === 1) {
            // Pause at the end before deleting
            setTimeout(() => {
              direction = -1;
              typeText();
            }, 1500);
            return;
          } else {
            // Pause at the beginning before typing again
            setTimeout(() => {
              direction = 1;
              typeText();
            }, 800);
            return;
          }
        }
      }
      
      // Adjust timing based on whether we're typing or deleting
      const speed = direction === 1 ? 100 + Math.random() * 100 : 50;
      setTimeout(typeText, speed);
    };
    
    // Start the typing animation
    typeText();
    
    // Blink cursor
    let cursorVisible = true;
    const blinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorVisible ? "1" : "0";
        cursorVisible = !cursorVisible;
      }
    };
    
    const cursorInterval = setInterval(blinkCursor, 530);
    
    return () => {
      clearInterval(cursorInterval);
    };
  }, []);
  
  const animateCountUp = () => {
    const percentElement = document.getElementById('stat-percent');
    const multiplierElement = document.getElementById('stat-multiplier');
    
    if (percentElement) {
      animateValue(percentElement, 0, 87, 1800);
    }
    
    if (multiplierElement) {
      animateValue(multiplierElement, 0, 3.2, 1500, 1);
    }
  };
  
  const animateValue = (element: HTMLElement, start: number, end: number, duration: number, decimals = 0) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = progress * (end - start) + start;
      
      element.textContent = decimals ? value.toFixed(decimals) : Math.floor(value).toString();
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        if (decimals) {
          element.textContent = end.toFixed(decimals) + '×';
        } else {
          element.textContent = end + '%';
        }
      }
    };
    window.requestAnimationFrame(step);
  };

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
                  
                  <div ref={statsRef} className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <div id="stat-percent" className="text-3xl font-display font-bold text-gradient mb-2">0%</div>
                      <div className="text-sm text-gray-400">of developers report deeper satisfaction with their work</div>
                    </div>
                    
                    <div>
                      <div id="stat-multiplier" className="text-3xl font-display font-bold text-gradient mb-2">0×</div>
                      <div className="text-sm text-gray-400">faster problem-solving in complex debugging scenarios</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:border-l lg:border-pandr-violet/10 lg:pl-8">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-lg text-pandr-lavender">From Our Users</h4>
                    
                    <div className="p-4 rounded bg-white/5">
                      <div className="flex items-start">
                        <Avatar className="h-8 w-8 mr-3 mt-1 border border-pandr-violet/20">
                          <AvatarImage src="https://i.pravatar.cc/100?img=37" alt="Sarah K." />
                          <AvatarFallback className="bg-pandr-ultraviolet/20 text-pandr-lavender text-xs">SK</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-gray-300 italic text-sm">
                            "Pandr has fundamentally changed how I work. The focus I can achieve now wasn't possible with my previous setup."
                          </p>
                          <p className="text-xs text-pandr-lavender mt-2">— Sarah K., Senior Engineer</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded bg-white/5">
                      <div className="flex items-start">
                        <Avatar className="h-8 w-8 mr-3 mt-1 border border-pandr-violet/20">
                          <AvatarImage src="https://i.pravatar.cc/100?img=53" alt="Marcus T." />
                          <AvatarFallback className="bg-pandr-ultraviolet/20 text-pandr-lavender text-xs">MT</AvatarFallback>
                        </Avatar>
                        <div>
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
            </div>
          </div>
          
          {/* Animated Text Preview */}
          <div className="mt-12 neo-blur rounded-lg overflow-hidden">
            <div className="py-3 px-4 border-b border-pandr-violet/10 flex items-center justify-between bg-pandr-darkGray/70">
              <div className="flex items-center">
                <div className="flex items-center gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                </div>
                <div className="px-3 py-1 rounded-t bg-pandr-violet/20 text-xs text-pandr-lavender">user.js</div>
              </div>
            </div>
            
            <div className="flex h-[80px]">
              {/* Left Sidebar */}
              <div className="w-8 bg-pandr-mediumGray/30 border-r border-pandr-violet/5 flex flex-col items-center py-3 gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded bg-white/5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-pandr-violet/40" />
                  </div>
                ))}
              </div>
              
              {/* Typing animation */}
              <div className="flex-1 p-4 text-left font-mono text-green-400">
                <span ref={editorRef}></span><span ref={cursorRef} className="text-pandr-violet animate-pulse">|</span>
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
