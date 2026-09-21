import React from 'react';
import { Chip } from '../Chips';
import { Play } from 'lucide-react';

export const Cover: React.FC = () => {
  const xmas = new Date('2026-12-25T00:00:00');
  const now = new Date('2026-09-19T15:35:39'); 
  const diffTime = Math.abs(xmas.getTime() - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        <Chip variant="default">UK + USA</Chip>
        <Chip variant="default">Launching Christmas 2026</Chip>
        <Chip variant="default">Investor briefing, Sept 2026</Chip>
      </div>

      <div className="relative mb-12 transform hover:scale-105 transition-transform duration-500">
        <div className="glass-card p-12 rounded-3xl rounded-tr-none relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full"></div>
          <div className="text-8xl font-display font-bold tabular-nums mb-2 text-gold drop-shadow-md">{diffDays}</div>
          <div className="text-xl font-bold uppercase tracking-widest text-white/80">Days to Christmas</div>
        </div>
      </div>


    </div>
  );
};
