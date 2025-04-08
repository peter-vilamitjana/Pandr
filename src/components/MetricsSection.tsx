
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  color: "green" | "red" | "violet";
  delay: number;
  endValue: number;
  suffix: string;
}

const Metric = ({ value, label, color, delay, endValue, suffix }: MetricProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);
  
  // For the count-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          setIsVisible(true);
          
          // Start the count-up animation
          animationStarted.current = true;
          let startValue = 0;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();
          
          const updateValue = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Use easeOutQuart for smooth deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutProgress * endValue);
            
            setDisplayValue(current);
            
            if (progress < 1) {
              requestAnimationFrame(updateValue);
            } else {
              setDisplayValue(endValue);
            }
          };
          
          requestAnimationFrame(updateValue);
        }
      },
      { threshold: 0.3 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [endValue]);

  const colorClasses = {
    green: "from-emerald-400 to-green-500",
    red: "from-red-400 to-rose-500",
    violet: "from-pandr-violet to-pandr-accent"
  };

  return (
    <div 
      ref={elementRef}
      className={cn(
        "bg-pandr-darkGray/50 border border-white/5 rounded-lg p-6 backdrop-blur-sm transition-all duration-500 transform group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="flex flex-col">
        <div className={cn(
          "text-4xl font-display font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300",
          colorClasses[color]
        )}>
          {isVisible ? `+${displayValue}${suffix}` : value}
        </div>
        <div className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">{label}</div>
      </div>
    </div>
  );
};

const MetricsSection = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isChartVisible, setIsChartVisible] = useState(false);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          setIsChartVisible(true);
          animationStarted.current = true;
        }
      },
      { threshold: 0.3 }
    );
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

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
            endValue={154}
            suffix="%" 
            label="Productivity increase measured across 1,200+ devs" 
            color="green" 
            delay={200} 
          />
          
          <Metric 
            value="-83%" 
            endValue={83}
            suffix="%" 
            label="Reduction in workflow disruptions and context switching" 
            color="red" 
            delay={400} 
          />
          
          <Metric 
            value="5×" 
            endValue={5}
            suffix="×" 
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
            
            <div ref={chartRef} className="h-[200px] relative neo-blur rounded-lg p-4 group">
              {/* Animated Chart */}
              <div className="absolute inset-x-0 bottom-4 flex items-end justify-between h-[150px] px-4">
                {[...Array(7)].map((_, i) => {
                  const height = 30 + Math.random() * 50;
                  return (
                    <div key={i} className="relative w-[8%] group">
                      <div 
                        className="bg-gradient-to-t from-pandr-ultraviolet to-pandr-violet rounded-t-sm transition-all duration-1000 ease-out opacity-0 hover:from-pandr-accent hover:to-pandr-violet hover:shadow-glow-sm"
                        style={{ 
                          height: `${isChartVisible ? height : 0}%`,
                          opacity: isChartVisible ? 1 : 0,
                          transitionDelay: `${i * 100 + 300}ms`,
                          transform: `translateY(${isChartVisible ? '0' : '100%'})`
                        }}
                      />
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Day {i+1}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-pandr-violet/20" />
              <div className="absolute top-4 right-4 text-xs text-gray-400">Last 7 days</div>
              <div className="absolute left-4 top-4 text-xs text-pandr-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Productivity Trend
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
