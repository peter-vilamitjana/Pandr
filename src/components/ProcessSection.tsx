
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Settings, GitCommit, Maximize, Rocket } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  icon: React.ReactNode;
  subline?: string;
}

const ProcessStep = ({ number, title, description, isActive, icon, subline }: ProcessStepProps) => {
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
      <div className='text-sm text-pandr-lavender mb-2 flex items-center gap-2'>
        <span>{number}</span>
        <span className={cn('transition-opacity duration-300', isActive ? 'opacity-100' : 'opacity-50')}>{icon}</span>
      </div>
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
      {subline && (
        <p className={cn('text-sm mt-2 transition-all duration-300', isActive ? 'text-pandr-lavender' : 'text-gray-600')}>
          {subline}
        </p>
      )}
    </motion.div>
  );
};

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stepsRef.current || !sectionRef.current) return;

      const container = containerRef.current;
      const steps = stepsRef.current;
      const section = sectionRef.current;
      
      const sectionTop = section.getBoundingClientRect().top;
      const stepsTop = steps.getBoundingClientRect().top;
      const stepsHeight = steps.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate vertical position for sticky element
      if (stickyRef.current) {
        const sectionRect = section.getBoundingClientRect();
        const sectionVisible = sectionRect.top < windowHeight && sectionRect.bottom > 0;
        
        if (sectionVisible) {
          stickyRef.current.style.opacity = '1';
        } else {
          stickyRef.current.style.opacity = '0';
        }
      }
      
      // Calculate relative scroll position within the steps container
      const scrollPosition = -stepsTop + windowHeight * 0.5;
      
      // Calculate step height (total height divided by number of steps)
      const stepHeight = stepsHeight / 4; // 4 steps
      
      // Determine active step based on scroll position
      const newActiveStep = Math.min(3, Math.max(0, Math.floor(scrollPosition / stepHeight)));
      
      setActiveStep(newActiveStep);
      
      // Add subtle parallax effect to the content inside the preview box
      if (stickyRef.current) {
        const scrollProgress = Math.min(1, Math.max(0, (windowHeight - sectionTop) / windowHeight));
        const parallaxElements = stickyRef.current.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach((elem, index) => {
          const element = elem as HTMLElement;
          const factor = 1 + (index * 0.1);
          const translateY = scrollProgress * 10 * factor;
          element.style.transform = `translateY(${translateY}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className='w-full h-full flex items-center justify-center'>
            <div className='neo-blur rounded-lg p-6 w-[80%]'>
              <div className='mb-3 flex items-center parallax-element'>
                <div className='w-6 h-6 rounded-full bg-pandr-accent/20 flex items-center justify-center mr-2'>
                  <Settings className='w-3 h-3 text-pandr-accent' />
                </div>
                <div className='text-pandr-lavender font-semibold'>Environment Configuration</div>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center parallax-element'>
                  <div className='w-4 h-4 rounded bg-pandr-accent/30 flex items-center justify-center mr-2'>
                    <div className='w-2 h-2 rounded-full bg-pandr-accent' />
                  </div>
                  <div className='text-gray-300 text-sm'>Theme: Cosmic Violet</div>
                </div>
                <div className='flex items-center parallax-element'>
                  <div className='w-4 h-4 rounded bg-pandr-accent/30 flex items-center justify-center mr-2'>
                    <div className='w-2 h-2 rounded-full bg-pandr-accent' />
                  </div>
                  <div className='text-gray-300 text-sm'>Font: JetBrains Mono</div>
                </div>
                <div className='flex items-center parallax-element'>
                  <div className='w-4 h-4 rounded bg-pandr-accent/30 flex items-center justify-center mr-2'>
                    <div className='w-2 h-2 rounded-full bg-pandr-accent' />
                  </div>
                  <div className='text-gray-300 text-sm'>Extensions: AI Assistant, Git Tools</div>
                </div>
                <div className='flex items-center parallax-element'>
                  <div className='w-4 h-4 rounded bg-pandr-accent/30 flex items-center justify-center mr-2'>
                    <div className='w-2 h-2 rounded-full bg-pandr-accent' />
                  </div>
                  <div className='text-gray-300 text-sm'>Layout: Split Terminal</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className='w-full h-full flex items-center justify-center'>
            <div className='neo-blur rounded-lg p-6 w-[80%]'>
              <div className='mb-3 flex items-center parallax-element'>
                <div className='w-6 h-6 rounded-full bg-pandr-accent/20 flex items-center justify-center mr-2'>
                  <GitCommit className='w-3 h-3 text-pandr-accent' />
                </div>
                <div className='text-pandr-lavender font-semibold'>Git Commit Preview</div>
              </div>
              <div className='space-y-3'>
                <div className='p-2 rounded bg-pandr-darkGray/50 border border-pandr-violet/10 parallax-element'>
                  <div className='flex items-start'>
                    <div className='text-green-400 mr-2'>+</div>
                    <div className='text-gray-300 text-xs font-mono'>
                      const handleCommit = async () =&gt; &#123;
                    </div>
                  </div>
                  <div className='flex items-start pl-4'>
                    <div className='text-green-400 mr-2'>+</div>
                    <div className='text-gray-300 text-xs font-mono'>
                      await git.add('.');
                    </div>
                  </div>
                  <div className='flex items-start pl-4'>
                    <div className='text-green-400 mr-2'>+</div>
                    <div className='text-gray-300 text-xs font-mono'>
                      await git.commit('feat: add new feature');
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='text-green-400 mr-2'>+</div>
                    <div className='text-gray-300 text-xs font-mono'>&#125;</div>
                  </div>
                </div>
                <div className='mt-4 bg-pandr-darkGray/30 rounded-lg p-3 border border-pandr-violet/10 parallax-element'>
                  <div className='text-xs text-gray-400 font-mono'>
                    <div className='text-pandr-lavender mb-1'>
                      Running Git Commit...
                    </div>
                    <div>
                      [main 5f43cba] feat: add new feature
                      <br />
                      2 files changed, 48 insertions(+), 12 deletions(-)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='w-full h-full flex items-center justify-center'>
            <div className='neo-blur rounded-lg p-6 w-[80%]'>
              <div className='mb-3 flex items-center parallax-element'>
                <div className='w-6 h-6 rounded-full bg-pandr-accent/20 flex items-center justify-center mr-2'>
                  <Maximize className='w-3 h-3 text-pandr-accent' />
                </div>
                <div className='text-pandr-lavender font-semibold'>Zen Mode Activated</div>
              </div>
              <div className='h-[200px] bg-gradient-to-b from-pandr-darkGray/40 to-black/70 rounded-lg flex items-center justify-center border border-pandr-violet/10 parallax-element'>
                <div className='text-center'>
                  <div className='text-lg font-display font-light text-white/70 mb-2'>Focused Coding</div>
                  <div className='text-xs text-pandr-lavender opacity-70'>
                    Minimized UI • Zero Distractions • Enhanced Focus
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='w-full h-full flex items-center justify-center'>
            <div className='neo-blur rounded-lg p-6 w-[80%]'>
              <div className='mb-3 flex items-center parallax-element'>
                <div className='w-6 h-6 rounded-full bg-pandr-accent/20 flex items-center justify-center mr-2'>
                  <Rocket className='w-3 h-3 text-pandr-accent' />
                </div>
                <div className='text-pandr-lavender font-semibold'>Deployment Status</div>
              </div>
              <div className='space-y-3'>
                <div className='bg-pandr-darkGray/30 rounded-lg p-3 border border-pandr-violet/10 parallax-element'>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='text-xs text-white font-medium'>CI/CD Pipeline</div>
                    <div className='px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs'>Passed</div>
                  </div>
                  <div className='w-full h-2 bg-pandr-darkGray rounded-full overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-green-500 to-emerald-400 w-full'></div>
                  </div>
                </div>
                <div className='flex items-center justify-between py-2 parallax-element'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 rounded-full bg-green-500 mr-2'></div>
                    <div className='text-xs text-gray-300'>Unit Tests</div>
                  </div>
                  <div className='text-xs text-gray-400'>124/124 ✓</div>
                </div>
                <div className='flex items-center justify-between py-2 parallax-element'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 rounded-full bg-green-500 mr-2'></div>
                    <div className='text-xs text-gray-300'>Integration Tests</div>
                  </div>
                  <div className='text-xs text-gray-400'>36/36 ✓</div>
                </div>
                <div className='flex items-center justify-between py-2 parallax-element'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 rounded-full bg-green-500 mr-2'></div>
                    <div className='text-xs text-gray-300'>Deployment</div>
                  </div>
                  <div className='text-xs text-gray-400'>Successful</div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id='process' className='py-32 relative overflow-hidden hero-gradient' ref={sectionRef}>
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

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16' ref={containerRef}>
            <div ref={stepsRef} className='relative px-4 min-h-[600px]'>
              {/* Process Steps */}
              <ProcessStep
                number='STEP 01'
                title='Environment Setup'
                description='Customize your perfect environment with our AI assistant.'
                subline='Configure once, code anywhere'
                isActive={activeStep === 0}
                icon={<Settings className="w-4 h-4 text-pandr-lavender" />}
              />
              <ProcessStep
                number='STEP 02'
                title='First Commit'
                description='Streamlined git operations with smart suggestions.'
                subline='Version control made simple'
                isActive={activeStep === 1}
                icon={<GitCommit className="w-4 h-4 text-pandr-lavender" />}
              />
              <ProcessStep
                number='STEP 03'
                title='Zen Mode Focus'
                description='Eliminate distractions with Zen Mode.'
                subline='Achieve deep work state'
                isActive={activeStep === 2}
                icon={<Maximize className="w-4 h-4 text-pandr-lavender" />}
              />
              <ProcessStep
                number='STEP 04'
                title='Ship with Confidence'
                description='Testing and CI/CD workflows for production-ready code.'
                subline='Deploy without fear'
                isActive={activeStep === 3}
                icon={<Rocket className="w-4 h-4 text-pandr-lavender" />}
              />
            </div>

            {/* Enhanced Sticky Visualization - Made to stay centered vertically */}
            <div 
              ref={stickyRef}
              className='sticky top-1/2 -translate-y-1/2 h-[600px] hidden lg:block transition-opacity duration-300'
              style={{ height: 'calc(100vh - 200px)' }}
            >
              <div className='neo-blur rounded-lg w-full h-full overflow-hidden relative flex items-center justify-center'>
                {getStepContent()}

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
            
            {/* Mobile version (non-sticky) */}
            <div className='lg:hidden h-[400px] mt-8'>
              <div className='neo-blur rounded-lg w-full h-full overflow-hidden relative'>
                {getStepContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
