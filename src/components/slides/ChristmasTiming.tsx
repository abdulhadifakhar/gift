import React from 'react';
import { BigNumber } from '../Typography';
import { Chip } from '../Chips';

export const ChristmasTiming: React.FC = () => {
  const xmas = new Date('2026-12-25T00:00:00');
  const now = new Date('2026-09-19T15:35:39'); 
  const diffTime = Math.abs(xmas.getTime() - now.getTime());
  const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
        <div className="glass-card p-6 rounded-2xl text-center">
          <BigNumber className="text-5xl md:text-6xl mb-2">$1T+</BigNumber>
          <p className="font-bold text-white mb-1">US Nov–Dec '25 Retail Sales</p>
          <p className="text-sm text-cream/70 mb-3">First time ever</p>
          <Chip variant="verified">Verified</Chip>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center scale-105 border-gold ring-2 ring-gold/20 shadow-gold/10">
          <BigNumber className="text-5xl md:text-6xl mb-2">$1.70T</BigNumber>
          <p className="font-bold text-white mb-1">Forecast Nov '26–Jan '27</p>
          <p className="text-sm text-cream/70 mb-3">Holiday retail</p>
          <Chip variant="verified">Verified</Chip>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center">
          <BigNumber className="text-5xl md:text-6xl mb-2">$316B</BigNumber>
          <p className="font-bold text-white mb-1">Forecast Online Sales</p>
          <p className="text-sm text-cream/70 mb-3">E-commerce share</p>
          <Chip variant="verified">Verified</Chip>
        </div>
      </div>

      {/* UK Strip */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur border border-white/20 text-white rounded-xl p-4 flex flex-col md:flex-row items-center justify-between shadow-lg mb-12">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span className="text-2xl">🇬🇧</span>
          <span className="font-bold text-lg">UK Christmas Spend</span>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <div className="font-display font-bold text-2xl text-gold">£24.6bn</div>
            <div className="text-xs text-cream/70 uppercase tracking-widest">Forecast total</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-2xl text-gold">£26.9bn</div>
            <div className="text-xs text-cream/70 uppercase tracking-widest">Online (Record)</div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-5xl relative mt-8">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 rounded"></div>
        <div className="absolute top-1/2 left-0 h-1 bg-gold -translate-y-1/2 rounded transition-all shadow-[0_0_10px_rgba(212,175,55,0.5)]" style={{ width: '10%' }}></div>
        
        <div className="flex justify-between relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-gold rounded-full mb-2 ring-4 ring-midnight shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
            <div className="font-bold text-white">Today</div>
            <div className="text-sm text-cream/70">Sept 19</div>
          </div>
          
          <div className="flex flex-col items-center opacity-60">
            <div className="w-4 h-4 bg-white/50 rounded-full mb-2 ring-4 ring-midnight"></div>
            <div className="font-bold text-white">Black Friday</div>
            <div className="text-sm text-cream/70">Nov 27</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-crimson rounded-full mb-2 ring-4 ring-midnight shadow-[0_0_15px_rgba(220,20,60,0.8)]"></div>
            <div className="font-bold text-crimson drop-shadow-md">Christmas</div>
            <div className="text-sm text-crimson/80">Dec 25</div>
          </div>
        </div>
        
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur px-4 py-1 rounded-full shadow-lg text-sm font-bold text-gold border border-white/20">
          {diffWeeks} weeks to build & sell
        </div>
      </div>
    </div>
  );
};
