
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  color: "green" | "red" | "violet";
  delay: number;
}

const Metric = ({ value, label, color, delay }: MetricProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const colorClasses = {
    green: "from-emerald-400 to-green-500",
    red: "from-red-400 to-rose-500",
    violet: "from-pandr-violet to-pandr-accent"
  };

  return (
    <div 
      className={cn(
        "bg-pandr-darkGray/50 border border-white/5 rounded-lg p-6 backdrop-blur-sm transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="flex flex-col">
        <div className={cn("text-4xl font-display font-bold bg-gradient-to-r bg-clip-text text-transparent", colorClasses[color])}>
          {value}
        </div>
        <div className="text-gray-400 mt-2">{label}</div>
      </div>
    </div>
  );
};

const MetricsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4">
            Measure the <span className="text-gradient">impact</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real metrics from developers who switched to Pandr IDE, proving its effectiveness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Metric 
            value="+154%" 
            label="Productivity increase measured across 1,200+ devs" 
            color="green" 
            delay={200} 
          />
          <Metric 
            value="-83%" 
            label="Reduction in workflow disruptions and context switching" 
            color="red" 
            delay={400} 
          />
          <Metric 
            value="5×" 
            label="Faster code generation with advanced snippets" 
            color="violet" 
            delay={600} 
          />
        </div>

        <div className="mt-16 border-t border-pandr-violet/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-display font-bold">
                Adaptive metrics that <span className="text-gradient">improve over time</span>
              </h3>
              <p className="text-gray-400">
                Pandr analyzes your coding patterns to give personalized suggestions and optimizations.
                The more you use it, the more it adapts to your unique workflow.
              </p>
            </div>
            
            <div className="h-[200px] relative neo-blur rounded-lg p-4">
              {/* Simulated Chart */}
              <div className="absolute inset-x-0 bottom-4 flex items-end justify-between h-[150px] px-4">
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-[8%] bg-gradient-to-t from-pandr-ultraviolet to-pandr-violet rounded-t-sm animate-slide-up opacity-0"
                    style={{ 
                      height: `${30 + Math.random() * 50}%`,
                      animationDelay: `${i * 0.1 + 0.8}s`
                    }}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-pandr-violet/20" />
              <div className="absolute top-4 right-4 text-xs text-gray-400">Last 7 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
