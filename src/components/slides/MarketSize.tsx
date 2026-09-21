import React from 'react';
import { BigNumber } from '../Typography';
import { Chip } from '../Chips';

export const MarketSize: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center">
          <BigNumber className="text-4xl md:text-5xl mb-2">$100B–$510B</BigNumber>
          <div className="font-bold text-cream/90 text-sm mb-2">Global gift retail</div>
          <div><Chip variant="verified">Verified</Chip></div>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center border-gold">
          <div className="text-sm font-bold text-white/50 mb-1">$34B</div>
          <BigNumber className="text-4xl md:text-5xl mb-2 text-white">$62B</BigNumber>
          <div className="font-bold text-gold text-sm mb-2">Personalized gifts by 2035</div>
          <div className="text-xs text-white/50 mb-2">6.7% yearly growth</div>
          <div><Chip variant="verified">Verified</Chip></div>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center">
          <BigNumber className="text-4xl md:text-5xl mb-2">70%+</BigNumber>
          <div className="font-bold text-cream/90 text-sm mb-2">Prefer a personalized gift</div>
          <div><Chip variant="verified">Verified</Chip></div>
        </div>
      </div>
    </div>
  );
};
