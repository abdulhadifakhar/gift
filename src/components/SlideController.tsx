import React, { useState } from 'react';
import { deck } from '../content/deck';
import { Navigation } from './Navigation';
import { SlideBase } from './SlideBase';
import * as Slides from './slides/index';

export const SlideController: React.FC = () => {
  const [theme, setTheme] = useState<'christmas' | 'evergreen'>('christmas');

  return (
    <div className={`min-h-screen w-full bg-midnight text-cream overflow-x-hidden`}>
      <Navigation 
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Landing Page Flow */}
      <main className="w-full flex flex-col">
        {deck.map((slideData) => {
          // @ts-ignore
          const SlideContent = Slides[slideData.componentId] || Slides.DefaultSlide;
          
          return (
            <SlideBase key={slideData.id} slide={slideData} theme={theme}>
              <SlideContent />
            </SlideBase>
          );
        })}
      </main>
    </div>
  );
};
