import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className='py-32 relative overflow-hidden hero-gradient'>
      {/* Floating particles */}
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
            This is not just another IDE.
            <br />
            This is <span className='text-gradient'>Pandr</span>.
          </h2>

          <p className='section-subtitle mx-auto mb-10'>
            Join thousands of developers who have transformed their coding experience with the most immersive IDE ever
            created.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button className='bg-gradient-to-r from-pandr-ultraviolet to-pandr-accent hover:shadow-glow text-white px-8 py-7 text-lg w-full sm:w-auto'>
              Start Your Free Trial Today
            </Button>

            <div className='text-sm text-gray-400'>No credit card required • 14-day free trial</div>
          </div>

          {/* Logos */}
          <div className='mt-20'>
            <p className='text-sm text-white/60 mb-6'>Trusted by teams at:</p>
            <div className='flex flex-wrap justify-center gap-6'>
              {/* Google */}
              <div className='bg-white/5 backdrop-blur-sm rounded-xl px-8 py-5 flex items-center justify-center'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
                  alt='Google'
                  className='h-8 w-auto grayscale'
                />
              </div>
              {/* Meta */}
              <div className='bg-white/5 backdrop-blur-sm rounded-xl px-8 py-5 flex items-center justify-center'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
                  alt='Meta'
                  className='h-8 w-auto grayscale'
                />
              </div>
              {/* GitHub (white version) */}
              <div className='bg-white/5 backdrop-blur-sm rounded-xl px-8 py-5 flex items-center justify-center'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
                  alt='GitHub'
                  className='h-8 w-auto grayscale invert'
                />
              </div>
              {/* Spotify */}
              <div className='bg-white/5 backdrop-blur-sm rounded-xl px-8 py-5 flex items-center justify-center'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'
                  alt='Spotify'
                  className='h-8 w-auto grayscale'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
