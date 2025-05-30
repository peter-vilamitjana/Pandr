
import React from "react";
import { Zap, Moon, Star, Link } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, gradient, delay }: FeatureCardProps) => {
  return (
    <div 
      className="group glassmorphism p-6 rounded-lg border border-white/5 glow-card animate-slide-up opacity-0" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 bg-gradient-to-br",
        gradient
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative cosmic-bg">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4">
            Powerful <span className="text-gradient">features</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tools that adapt to your workflow, not the other way around
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Lightning Fast"
            description="Zero latency editing experience with unmatched performance, even in large projects."
            gradient="from-yellow-400 to-amber-500"
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<Moon className="w-6 h-6 text-white" />}
            title="Zen Mode"
            description="Distraction-free coding environment that helps you stay in flow state longer."
            gradient="from-blue-400 to-indigo-500"
            delay={0.4}
          />
          
          <FeatureCard 
            icon={<Star className="w-6 h-6 text-white" />}
            title="Intelligent Snippets"
            description="AI-powered code suggestions that learn from your coding patterns."
            gradient="from-pandr-ultraviolet to-pandr-accent"
            delay={0.6}
          />
          
          <FeatureCard 
            icon={<Link className="w-6 h-6 text-white" />}
            title="Seamless Integrations"
            description="Connect with all your favorite tools and services without friction."
            gradient="from-emerald-400 to-teal-500"
            delay={0.8}
          />
        </div>
        
        <div className="mt-24">
          <div className="neo-blur rounded-xl overflow-hidden">
            {/* Improved Tab Bar */}
            <div className="py-3 px-4 border-b border-pandr-violet/10 flex items-center justify-between bg-pandr-darkGray/70">
              <div className="flex items-center">
                <div className="flex items-center gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                </div>
                <div className="flex space-x-1">
                  <div className="px-3 py-1 rounded-t bg-pandr-violet/20 text-xs text-pandr-lavender">ZenMode.tsx</div>
                  <div className="px-3 py-1 rounded-t bg-pandr-darkGray/80 text-xs text-gray-400">utils.ts</div>
                  <div className="px-3 py-1 rounded-t bg-pandr-darkGray/80 text-xs text-gray-400">types.d.ts</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-sm bg-pandr-lavender/40" />
                </div>
                <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-sm bg-pandr-lavender/40" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-12">
              {/* Enhanced Left Sidebar with improved icons */}
              <div className="col-span-1 bg-pandr-mediumGray/30 p-2 border-r border-pandr-violet/5">
                <div className="flex flex-col gap-4 items-center py-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                      <div className={`w-3 h-3 rounded-sm ${i === 0 ? 'bg-pandr-violet/70' : 'bg-pandr-violet/40'}`} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Main Editor - Left aligned text */}
              <div className="col-span-8 p-4">
                <pre className="text-xs overflow-hidden text-left">
                  <code>
                    <span className="text-blue-400">import</span> <span className="text-cyan-300">&#123; useState, useEffect, useRef &#125;</span> <span className="text-blue-400">from</span> <span className="text-green-400">"react"</span>;
                    <br />
                    <span className="text-blue-400">import</span> <span className="text-cyan-300">&#123; usePandrEditor &#125;</span> <span className="text-blue-400">from</span> <span className="text-green-400">"@pandr/core"</span>;
                    <br />
                    <br />
                    <span className="text-green-400">// ZenMode component - focuses on the essential code</span>
                    <br />
                    <span className="text-blue-400">const</span> <span className="text-yellow-300">ZenMode</span> <span className="text-white">=</span> <span className="text-blue-400">()</span> <span className="text-white">=&gt;</span> <span className="text-white">&#123;</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-white">editorRef</span> <span className="text-white">=</span> <span className="text-yellow-300">useRef</span><span className="text-white">(</span><span className="text-purple-400">null</span><span className="text-white">);</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-white">[isZenMode, setIsZenMode]</span> <span className="text-white">=</span> <span className="text-yellow-300">useState</span><span className="text-white">(</span><span className="text-purple-400">true</span><span className="text-white">);</span>
                    <br />
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-white">&#123;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">editor,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">commands,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">suggestions</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-white">&#125; =</span> <span className="text-yellow-300">usePandrEditor</span><span className="text-white">(&#123;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">element: </span><span className="text-white">editorRef,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">zenMode: </span><span className="text-white">isZenMode,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">theme: </span><span className="text-green-400">"cosmic-violet"</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-white">&#125;);</span>
                  </code>
                </pre>
              </div>
              
              {/* Enhanced Right Sidebar with AI Suggestions */}
              <div className="col-span-3 bg-pandr-mediumGray/30 p-4 border-l border-pandr-violet/5">
                <div className="mb-4 text-xs font-semibold text-pandr-lavender">AI Suggestions</div>
                <div className="space-y-3">
                  <div className="p-2 rounded bg-pandr-darkGray/50 border border-pandr-violet/10">
                    <div className="text-xs text-yellow-300 mb-1">Add type annotation</div>
                    <div className="flex items-center mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-violet/50 mr-1.5"></div>
                      <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    </div>
                    <div className="flex items-center mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-violet/50 mr-1.5"></div>
                      <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-violet/50 mr-1.5"></div>
                      <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-pandr-darkGray/50 border border-pandr-violet/10">
                    <div className="text-xs text-blue-400 mb-1">Extract hook</div>
                    <div className="flex items-center mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-violet/50 mr-1.5"></div>
                      <div className="h-2 w-full bg-white/10 rounded"></div>
                    </div>
                    <div className="flex items-center mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-violet/50 mr-1.5"></div>
                      <div className="h-2 w-4/5 bg-white/10 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-violet/50 mr-1.5"></div>
                      <div className="h-2 w-3/5 bg-white/10 rounded"></div>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-pandr-darkGray/50 border border-pandr-violet/10 border-l-2 border-l-pandr-accent">
                    <div className="text-xs text-pandr-accent mb-1">Recommended pattern</div>
                    <div className="flex items-center mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-accent/70 mr-1.5"></div>
                      <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-pandr-accent/70 mr-1.5"></div>
                      <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
