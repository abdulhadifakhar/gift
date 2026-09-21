import React from 'react';
import { YearTimeline } from '../interactive/YearTimeline';
import { Chip } from '../Chips';
import { BigNumber } from '../Typography';

export const YearRound: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-5xl mb-8">
        <YearTimeline />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-4">
        <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center">
          <BigNumber className="text-3xl md:text-4xl mb-2">$29.1B</BigNumber>
          <div className="font-bold text-white text-sm mb-2">US Valentine's 2026</div>
          <div><Chip variant="verified">Verified</Chip></div>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center">
          <BigNumber className="text-3xl md:text-4xl mb-2">~$38B</BigNumber>
          <div className="font-bold text-white text-sm mb-2">US Mother's Day 2026</div>
          <div><Chip variant="verified">Verified</Chip></div>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center">
          <BigNumber className="text-3xl md:text-4xl mb-2">$27.9B</BigNumber>
          <div className="font-bold text-white text-sm mb-2">US Father's Day 2026</div>
          <div><Chip variant="verified">Verified</Chip></div>
        </div>
      </div>
    </div>
  );
};
