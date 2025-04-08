import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
}

const ProcessStep = ({ number, title, description, isActive }: ProcessStepProps) => {
  return (
    <div
      className={cn(
        "border-l-2 pl-6 py-8 transition-all duration-500",
        isActive ? "border-pandr-accent" : "border-pandr-violet/20"
      )}
    >
      <div
        className={cn(
          "absolute -left-[9px] w-[18px] h-[18px] rounded-full transition-all duration-500",
          isActive ? "bg-pandr-accent shadow-glow" : "bg-pandr-darkGray border border-pandr-violet/30"
        )}
      />
      <div className="text-sm text-pandr-lavender mb-2">{number}</div>
      <h3
        className={cn(
          "text-2xl font-display font-bold mb-2 transition-all duration-300",
          isActive ? "text-white" : "text-gray-400"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-base transition-all duration-300",
          isActive ? "text-gray-300" : "text-gray-500"
        )}
      >
        {description}
      </p>
    </div>
  );
};

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = -containerTop + windowHeight * 0.4;

      const stepHeight = containerHeight / 4;
      const newActiveStep = Math.min(
        3,
        Math.max(0, Math.floor(scrollPosition / stepHeight))
      );

      setActiveStep(newActiveStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" className="py-32 relative overflow-visible">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4">
            Our <span className="text-gradient">4-Step</span> Focus Process
          </h2>
          <p className="section-subtitle mx-auto">
            Maximize developer flow and eliminate friction points
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={containerRef} className="relative px-4">
            <div className="relative">
              <ProcessStep
                number="STEP 01"
                title="Environment Setup"
                description="Customize your perfect environment with our AI assistant. From keyboard shortcuts to visual preferences, everything adapts to you."
                isActive={activeStep === 0}
              />
              <ProcessStep
                number="STEP 02"
                title="First Commit"
                description="Streamlined git operations with visual differentials and smart suggestions for commit messages that actually make sense."
                isActive={activeStep === 1}
              />
              <ProcessStep
                number="STEP 03"
                title="Zen Mode Focus"
                description="Eliminate all distractions with our Zen Mode that gradually fades away UI elements you're not actively using."
                isActive={activeStep === 2}
              />
              <ProcessStep
                number="STEP 04"
                title="Ship with Confidence"
                description="Integrated testing and CI/CD workflows that ensure your code is production-ready before you hit deploy."
                isActive={activeStep === 3}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-[calc(100vh-6rem)]" ref={stickyRef}>
            <div className="neo-blur rounded-lg w-full h-full overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%]">
                  <div
                    className={cn(
                      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full transition-all duration-700",
                      "bg-pandr-violet/20 shadow-glow"
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl font-display font-bold text-white">Pandr.</div>
                    </div>
                  </div>

                  {[0, 1, 2, 3].map((step) => {
                    const totalSteps = 4;
                    const baseAngle = (step * (Math.PI * 2)) / totalSteps;
                    const rotation = activeStep * (Math.PI * 2) / totalSteps;
                    const angle = baseAngle + rotation;
                    const radius = 140;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div
                        key={step}
                        className={cn(
                          "absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700",
                          activeStep === step ? "bg-pandr-accent/30 border border-pandr-accent shadow-glow text-white" : "bg-pandr-darkGray/30 border border-pandr-violet/20 text-gray-500"
                        )}
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`
                        }}
                      >
                        <div className="text-lg font-bold">
                          {step + 1}
                        </div>
                      </div>
                    );
                  })}

                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                    {[0, 1, 2, 3].map((step) => {
                      const totalSteps = 4;
                      const baseAngle = (step * (Math.PI * 2)) / totalSteps;
                      const rotation = activeStep * (Math.PI * 2) / totalSteps;
                      const angle = baseAngle + rotation;
                      const radius = 140;
                      const x2 = Math.cos(angle) * radius + 200;
                      const y2 = Math.sin(angle) * radius + 200;

                      return (
                        <line
                          key={step}
                          x1="200"
                          y1="200"
                          x2={x2}
                          y2={y2}
                          className={cn(
                            "transition-all duration-700",
                            activeStep >= step ? "stroke-pandr-accent/50" : "stroke-pandr-violet/20"
                          )}
                          strokeWidth="2"
                          strokeDasharray={activeStep >= step ? "0" : "5,5"}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="text-base font-semibold text-white">
                  {activeStep === 0 && "Setting up your perfect environment"}
                  {activeStep === 1 && "Streamlining your first commit"}
                  {activeStep === 2 && "Entering deep focus with Zen Mode"}
                  {activeStep === 3 && "Shipping with complete confidence"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

