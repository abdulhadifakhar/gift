import React from 'react';
import { H1, SourceLine } from './Typography';
import type { SlideData } from '../content/deck';
import { motion } from 'framer-motion';

interface SlideBaseProps {
  slide: SlideData;
  children: React.ReactNode;
  theme: 'christmas' | 'evergreen';
}

export const SlideBase: React.FC<SlideBaseProps> = ({ slide, children, theme }) => {
  // Snow effect array
  const snowflakes = Array.from({ length: 18 });

  return (
    <section id={slide.id} className="flex flex-col min-h-[80vh] w-full p-8 md:p-12 md:py-24 max-w-6xl mx-auto relative z-10 border-b border-white/5 justify-center">
      
      {/* Optional Snow Effect */}
      {theme === 'christmas' && (
        <div className="snow-container">
          {snowflakes.map((_, i) => (
            <div key={i} className="snowflake"></div>
          ))}
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col"
      >
        {/* Header */}
        <div className="mb-12 relative z-10">
          {slide.subtitle && (
            <div className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
              {slide.subtitle}
            </div>
          )}
          <H1 className="mb-6">{slide.title}</H1>
          {slide.supportingText && slide.supportingText.map((text, idx) => (
            <p key={idx} className="text-xl md:text-2xl text-cream/70 max-w-3xl font-light mb-2">
              {text}
            </p>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col justify-center relative min-h-[400px] z-10">
          {children}
        </div>

        {/* Footer Area */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 relative z-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col items-end text-right ml-auto">
              {slide.source && <SourceLine>{slide.source}</SourceLine>}
              <SourceLine className="mt-1 opacity-50">Planning estimates, not guarantees. Not financial advice.</SourceLine>
            </div>
          </div>

          {/* Drawer Content */}
          {slide.drawer && (
            <div className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-cream shadow-inner">
              <p className="font-body text-lg font-light">{slide.drawer}</p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
