import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, GitCommit, Maximize, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

// Tipado para Step
interface StepProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
}

// Paso individual
const Step = ({ number, title, description, isActive }: StepProps) => (
  <div
    className={cn(
      'relative pl-6 border-l-2 py-6 transition-all duration-300',
      isActive ? 'border-pandr-accent' : 'border-white/10 opacity-50'
    )}>
    <div
      className={cn(
        'absolute -left-[10px] w-4 h-4 rounded-full',
        isActive ? 'bg-pandr-accent shadow-glow' : 'bg-pandr-darkGray border border-white/10'
      )}
    />
    <h4 className='text-sm text-pandr-lavender font-mono mb-2'>{number}</h4>
    <h3 className={cn('text-2xl font-display font-bold mb-2', isActive ? 'text-white' : 'text-white/50')}>{title}</h3>
    <p className={cn('text-base', isActive ? 'text-gray-300' : 'text-gray-500')}>{description}</p>
  </div>
);

const previewContent = [
  <>
    <h4 className='text-white text-lg font-semibold mb-4 flex items-center gap-2'>
      <Settings className='w-4 h-4 text-pandr-accent' />
      Environment Configuration
    </h4>
    <ul className='text-sm text-gray-300 space-y-2'>
      <li>- Theme: Cosmic Violet</li>
      <li>- Font: JetBrains Mono</li>
      <li>- Extensions: AI Assistant, Git Tools</li>
      <li>- Layout: Split Terminal</li>
    </ul>
  </>,
  <>
    <h4 className='text-white text-lg font-semibold mb-4 flex items-center gap-2'>
      <GitCommit className='w-4 h-4 text-pandr-accent' />
      Git Commit Preview
    </h4>
    <div className='font-mono text-xs text-green-400 bg-black/30 p-3 rounded'>
      <div>+ const handleCommit = async () =&gt; &#123;</div>
      <div className='pl-4'>
        + await git.add('.')
        <br />+ await git.commit('feat: add new feature')
      </div>
      <div>&#125;</div>
    </div>
    <div className='mt-4 bg-black/20 text-gray-400 p-3 rounded'>
      Running Git Commit...
      <br />
      [main 5f43cba] feat: add new feature
      <br />2 files changed, 48 insertions(+), 12 deletions(-)
    </div>
  </>,
  <>
    <h4 className='text-white text-lg font-semibold mb-4 flex items-center gap-2'>
      <Maximize className='w-4 h-4 text-pandr-accent' />
      Zen Mode Activated
    </h4>
    <p className='text-gray-400 text-sm'>Distraction-free coding environment enabled.</p>
  </>,
  <>
    <h4 className='text-white text-lg font-semibold mb-4 flex items-center gap-2'>
      <Rocket className='w-4 h-4 text-pandr-accent' />
      Deployment Status
    </h4>
    <p className='text-sm text-green-400'>
      ✓ CI/CD passed
      <br />✓ All tests green
      <br />✓ Ready to ship
    </p>
  </>
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      const stepHeight = height / previewContent.length;

      const scrolled = Math.min(Math.max(-top + window.innerHeight / 2, 0), height);
      const step = Math.floor(scrolled / stepHeight);
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className='relative py-32 bg-pandr-black text-white overflow-hidden'>
      <div className='container max-w-6xl mx-auto'>
        <h2 className='section-title mb-12 text-center'>
          Our <span className='text-gradient'>4-Step</span> Focus Process
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 relative'>
          {/* Steps */}
          <div>
            <Step
              number='STEP 01'
              title='Environment Setup'
              description='Customize your perfect environment with our AI assistant.'
              isActive={activeStep === 0}
            />
            <Step
              number='STEP 02'
              title='First Commit'
              description='Streamlined git operations with smart suggestions.'
              isActive={activeStep === 1}
            />
            <Step
              number='STEP 03'
              title='Zen Mode Focus'
              description='Eliminate distractions with Zen Mode.'
              isActive={activeStep === 2}
            />
            <Step
              number='STEP 04'
              title='Ship with Confidence'
              description='Testing and CI/CD workflows for production-ready code.'
              isActive={activeStep === 3}
            />
          </div>

          {/* Sticky Preview ajustado más abajo */}
          <div className='relative'>
            <div className='sticky top-[65%] -translate-y-1/2 transition-all duration-300'>
              <div className='neo-blur rounded-xl p-6 border border-white/5 bg-black/30'>
                {previewContent[activeStep]}
                <div className='mt-4 text-center text-sm text-pandr-lavender'>
                  {activeStep === 0 && 'Setting up your perfect environment'}
                  {activeStep === 1 && 'Streamlining your first commit'}
                  {activeStep === 2 && 'Entering deep focus mode'}
                  {activeStep === 3 && 'Ready to deploy with confidence'}
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
