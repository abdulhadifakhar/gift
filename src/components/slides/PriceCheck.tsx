import React from 'react';
import { ArrowRight, Tag, Search, DollarSign } from 'lucide-react';
import { Chip } from '../Chips';

export const PriceCheck: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-5xl relative">
        
        {/* Connection Lines (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-white/10 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
              <Tag size={32} />
            </div>
            <div className="w-8 h-8 rounded-full bg-midnight border border-white/20 text-gold font-bold flex items-center justify-center mb-4 absolute -top-4 -left-4">1</div>
            <h4 className="font-display font-bold text-2xl text-white mb-2">Sourced Cost</h4>
            <p className="text-cream/80">Identify supplier base cost and shipping.</p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
              <Search size={32} />
            </div>
            <div className="w-8 h-8 rounded-full bg-midnight border border-white/20 text-gold font-bold flex items-center justify-center mb-4 absolute -top-4 -left-4">2</div>
            <h4 className="font-display font-bold text-2xl text-white mb-2">Compared</h4>
            <p className="text-cream/80">Similar listings on eBay, Etsy, major retailers.</p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-b-4 border-b-crimson">
            <div className="w-20 h-20 bg-gold text-midnight rounded-full flex items-center justify-center mb-6 shadow-lg">
              <DollarSign size={32} />
            </div>
            <div className="w-8 h-8 rounded-full bg-midnight border border-white/20 text-gold font-bold flex items-center justify-center mb-4 absolute -top-4 -left-4">3</div>
            <h4 className="font-display font-bold text-2xl text-white mb-2">Set Price</h4>
            <p className="text-cream/80">Targeting 2–3x cost (55–60% gross margin).</p>
          </div>

        </div>
      </div>

      <div className="mt-12 max-w-3xl w-full flex flex-col gap-4">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
          <span className="font-bold text-lg text-white">Price check status</span>
          <Chip variant="verified">Done</Chip>
        </div>
        <div className="flex items-center justify-between bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
          <span className="font-bold text-lg text-white">Sales-history check (eBay)</span>
          <Chip variant="estimate">In progress</Chip>
        </div>
      </div>
    </div>
  );
};
