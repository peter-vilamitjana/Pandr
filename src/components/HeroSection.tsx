import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SignupModal from './SignupModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.getElementById('hero-content');
      const orbElement = document.getElementById('hero-orb');
      const gridElement = document.getElementById('hero-grid');

      if (heroElement) {
        heroElement.style.transform = `translateY(${scrollY * 0.2}px)`;
      }

      if (orbElement) {
        orbElement.style.transform = `translateY(${scrollY * 0.1}px)`;
      }

      if (gridElement) {
        gridElement.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className='relative min-h-screen pt-28 pb-32 flex flex-col items-center overflow-hidden hero-gradient'>
      <div
        id='hero-orb'
        className='absolute -right-[10%] top-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pandr-ultraviolet/20 to-pandr-accent/10 blur-[100px]'
      />

      <div id='hero-grid' className='absolute inset-0 grid-bg z-0 opacity-20' />

      <div className='absolute inset-0 z-0'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full bg-pandr-violet/30'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 6 + 3}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className='container relative z-10'>
        <div id='hero-content' className='max-w-3xl mx-auto text-center'>
          <div className='inline-block mb-8 animate-float'>
            <span className='py-1 px-4 rounded-full text-sm border border-pandr-violet/30 bg-pandr-darkGray/50 text-pandr-lavender flex items-center gap-2'>
              <span className='inline-block w-2 h-2 rounded-full bg-pandr-accent animate-pulse' />
              Now in Public Beta 2.0
            </span>
          </div>

          <h1 className='section-title mb-4 animate-slide-up opacity-0' style={{ animationDelay: '0.2s' }}>
            Code with clarity.
            <br />
            Ship with <span className='text-gradient'>confidence.</span>
          </h1>

          <p className='section-subtitle mx-auto animate-slide-up opacity-0' style={{ animationDelay: '0.4s' }}>
            Meet Pandr. The IDE that removes friction, boosts focus, and gives you control. Designed for developers who
            demand both power and elegance.
          </p>

          <div
            className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0'
            style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={openModal}
              className='bg-gradient-to-r from-pandr-ultraviolet to-pandr-accent hover:shadow-glow text-white px-6 py-6 text-lg w-full sm:w-auto'>
              Get Started Free
            </Button>
            <Button
              variant='outline'
              className='border-pandr-violet/30 text-pandr-lavender hover:text-white hover:bg-pandr-darkGray/50 px-6 py-6 text-lg w-full sm:w-auto'>
              See the Demo
              <ArrowRight size={16} className='ml-2' />
            </Button>
          </div>

          {/* Code Preview */}
          <div
            className='mt-16 w-[90%] max-w-5xl mx-auto glassmorphism rounded-lg border-t border-pandr-violet/20 shadow-glow animate-slide-up opacity-0'
            style={{ animationDelay: '0.8s' }}>
            {/* Tab Bar */}
            <div className='py-3 px-4 border-b border-pandr-violet/10 flex items-center justify-between bg-pandr-darkGray/70'>
              <div className='flex items-center'>
                <div className='flex items-center gap-1.5 mr-4'>
                  <div className='w-3 h-3 rounded-full bg-red-500 opacity-80' />
                  <div className='w-3 h-3 rounded-full bg-yellow-500 opacity-80' />
                  <div className='w-3 h-3 rounded-full bg-green-500 opacity-80' />
                </div>
                <div className='flex space-x-1'>
                  <div className='px-3 py-1 rounded-t bg-pandr-violet/20 text-xs text-pandr-lavender'>
                    PandrEditor.jsx
                  </div>
                  <div className='px-3 py-1 rounded-t bg-pandr-darkGray/50 text-xs text-gray-400'>theme.ts</div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 rounded-full bg-white/5 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-sm bg-pandr-lavender/40' />
                </div>
                <div className='w-4 h-4 rounded-full bg-white/5 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-sm bg-pandr-lavender/40' />
                </div>
              </div>
            </div>

            <div className='flex h-[270px] overflow-hidden'>
              <div className='w-12 bg-pandr-mediumGray/30 border-r border-pandr-violet/5 flex flex-col items-center py-3 gap-4'>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className='w-6 h-6 rounded bg-white/5 flex items-center justify-center'>
                    <div className={`w-3 h-3 ${i === 0 ? 'bg-pandr-violet/60' : 'bg-pandr-violet/40'} rounded-sm`} />
                  </div>
                ))}
              </div>
              <div className='flex-1 p-4 text-left overflow-hidden'>
                <pre className='text-xs sm:text-sm font-mono text-left text-pandr-lavender'>
                  <code>
                    <span className='text-blue-400'>import</span> &#123;{' '}
                    <span className='text-cyan-300'>useState, useEffect</span> &#125;{' '}
                    <span className='text-blue-400'>from</span> <span className='text-green-400'>"react"</span>;
                    <br />
                    <br />
                    <span className='text-blue-400'>const</span> <span className='text-yellow-300'>PandrEditor</span> =
                    () =&gt; &#123;
                    <br />
                    &nbsp;&nbsp;<span className='text-blue-400'>const</span> [code, setCode] ={' '}
                    <span className='text-cyan-300'>useState</span>(<span className='text-green-400'>""</span>);
                    <br />
                    &nbsp;&nbsp;<span className='text-blue-400'>const</span> [theme, setTheme] ={' '}
                    <span className='text-cyan-300'>useState</span>(
                    <span className='text-green-400'>"cosmic-violet"</span>);
                    <br />
                    <br />
                    &nbsp;&nbsp;<span className='text-cyan-300'>useEffect</span>(() =&gt; &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-blue-400'>const</span> pandr ={' '}
                    <span className='text-blue-400'>new</span> <span className='text-yellow-300'>PandrEngine</span>
                    (&#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoComplete: <span className='text-purple-400'>true</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zenMode: <span className='text-purple-400'>true</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;);
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;pandr.init();
                    <br />
                    &nbsp;&nbsp;&#125;, [theme]);
                    <br />
                    &#125;;
                  </code>
                </pre>
              </div>
              <div className='w-64 bg-pandr-mediumGray/30 border-l border-pandr-violet/5 p-4 overflow-hidden'>
                <div className='text-xs font-semibold text-pandr-lavender mb-3'>AI Suggestions</div>
                <div className='space-y-3'>
                  <div className='p-2 rounded bg-pandr-darkGray/50 border border-pandr-violet/10'>
                    <div className='text-xs text-cyan-300 mb-1'>Import optimization</div>
                    <div className='h-2 w-3/4 bg-white/10 rounded mb-1.5' />
                    <div className='h-2 w-1/2 bg-white/10 rounded' />
                  </div>
                  <div className='p-2 rounded bg-pandr-darkGray/50 border border-pandr-violet/10'>
                    <div className='text-xs text-green-400 mb-1'>Type inference</div>
                    <div className='h-2 w-4/5 bg-white/10 rounded mb-1.5' />
                    <div className='h-2 w-2/3 bg-white/10 rounded' />
                  </div>
                  <div className='p-2 rounded bg-pandr-darkGray/50 border border-pandr-violet/10 border-l-2 border-l-pandr-accent'>
                    <div className='text-xs text-pandr-accent mb-1'>Performance suggestion</div>
                    <div className='h-2 w-3/5 bg-white/10 rounded mb-1.5' />
                    <div className='h-2 w-4/5 bg-white/10 rounded' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroSection;
