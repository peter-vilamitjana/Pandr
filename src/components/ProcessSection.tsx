import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
}

const ProcessStep = ({ number, title, description, isActive }: ProcessStepProps) => {
  return (
    <motion.div
      className={cn(
        'border-l-2 pl-6 py-8 transition-all duration-500',
        isActive ? 'border-pandr-accent' : 'border-pandr-violet/20'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}>
      <div
        className={cn(
          'absolute -left-[9px] w-[18px] h-[18px] rounded-full transition-all duration-500',
          isActive ? 'bg-pandr-accent shadow-glow' : 'bg-pandr-darkGray border border-pandr-violet/30'
        )}
      />
      <div className='text-sm text-pandr-lavender mb-2'>{number}</div>
      <h3
        className={cn(
          'text-2xl font-display font-bold mb-2 transition-all duration-300',
          isActive ? 'text-white' : 'text-gray-400'
        )}>
        {title}
      </h3>
      <p className={cn('text-base transition-all duration-300', isActive ? 'text-gray-300' : 'text-gray-500')}>
        {description}
      </p>
    </motion.div>
  );
};

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = -containerTop + windowHeight * 0.4;

      const stepHeight = containerHeight / 4; // 4 steps
      const newActiveStep = Math.min(3, Math.max(0, Math.floor(scrollPosition / stepHeight)));

      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='process' className='py-32 relative overflow-hidden hero-gradient'>
      <div className='absolute inset-0'>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full bg-white/20'
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

      <div className='container relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='section-title mb-6 glow-text'>
            Our <span className='text-gradient'>4-Step</span> Focus Process
          </h2>
          <p className='section-subtitle mx-auto mb-10'>Maximize developer flow and eliminate friction points</p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            <div ref={containerRef} className='relative px-4'>
              {/* Process Steps */}
              <ProcessStep
                number='STEP 01'
                title='Environment Setup'
                description='Customize your perfect environment with our AI assistant.'
                isActive={activeStep === 0}
              />
              <ProcessStep
                number='STEP 02'
                title='First Commit'
                description='Streamlined git operations with smart suggestions.'
                isActive={activeStep === 1}
              />
              <ProcessStep
                number='STEP 03'
                title='Zen Mode Focus'
                description='Eliminate distractions with Zen Mode.'
                isActive={activeStep === 2}
              />
              <ProcessStep
                number='STEP 04'
                title='Ship with Confidence'
                description='Testing and CI/CD workflows for production-ready code.'
                isActive={activeStep === 3}
              />
            </div>

            {/* Sticky Visualization */}
            <div className='lg:sticky lg:top-24 h-[600px]'>
              <div className='neo-blur rounded-lg w-full h-full overflow-hidden relative'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative w-[80%] h-[80%]'>
                    {/* Central node */}
                    <div
                      className={cn(
                        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full transition-all duration-700',
                        'bg-pandr-violet/20 shadow-glow'
                      )}>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-2xl font-display font-bold text-white'>Pandr.</div>
                      </div>
                    </div>

                    {/* Orbiting nodes */}
                    {[0, 1, 2, 3].map(step => {
                      const totalSteps = 4;
                      const baseAngle = (step * (Math.PI * 2)) / totalSteps;
                      const rotation = (activeStep * (Math.PI * 2)) / totalSteps;
                      const angle = baseAngle + rotation;
                      const radius = 140;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;

                      return (
                        <motion.div
                          key={step}
                          className={cn(
                            'absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700',
                            activeStep === step
                              ? 'bg-pandr-accent/30 border border-pandr-accent'
                              : 'bg-pandr-darkGray/30 border border-pandr-violet/20'
                          )}
                          style={{
                            left: `calc(50% + ${x}px - 24px)`,
                            top: `calc(50% + ${y}px - 24px)`
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: activeStep === step ? 1 : 0.5 }}
                          transition={{ duration: 0.5 }}>
                          <div
                            className={cn('text-lg font-bold', activeStep === step ? 'text-white' : 'text-gray-500')}>
                            {step + 1}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className='absolute bottom-6 left-0 right-0 text-center'>
                  <div className='text-sm text-pandr-lavender'>
                    {activeStep === 0 && 'Setting up your perfect environment'}
                    {activeStep === 1 && 'Streamlining your first commit'}
                    {activeStep === 2 && 'Entering deep focus with Zen Mode'}
                    {activeStep === 3 && 'Shipping with complete confidence'}
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

export default ProcessSection;
