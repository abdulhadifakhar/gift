import React from 'react';
import { Camera, Mic, Edit3, TrendingUp } from 'lucide-react';
import { Chip } from '../Chips';

export const AdCreation: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-5xl relative">
        
        {/* Connection Lines (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-white/10 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
          
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
              <Camera size={24} />
            </div>
            <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-white mb-2 uppercase tracking-widest">Internal</div>
            <p className="text-sm text-cream/90">Film the product yourself when samples arrive.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
              <Mic size={24} />
            </div>
            <div className="flex gap-2 mb-2">
              <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-widest">UK</div>
              <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-widest">US</div>
            </div>
            <p className="text-sm text-cream/90">Creators record voice/face UGC videos.</p>
            <div className="text-xs text-white/50 mt-1 font-mono">$35–150/video</div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
              <Edit3 size={24} />
            </div>
            <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-white mb-2 uppercase tracking-widest">Internal</div>
            <p className="text-sm text-cream/90">Editors cut, caption, and resize for all platforms.</p>
            <div className="text-xs text-white/50 mt-1 font-mono flex flex-col items-center gap-1">
              $10–40/video 
              <Chip variant="estimate" className="scale-75 origin-center">EST</Chip>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center border-gold bg-gold/10">
            <div className="w-16 h-16 bg-gold text-midnight rounded-full flex items-center justify-center mb-4 shadow-lg">
              <TrendingUp size={24} />
            </div>
            <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-bold mb-2 uppercase tracking-widest">Global</div>
            <p className="text-sm text-cream/90">Test 3 hooks × 3 angles. Keep the winners.</p>
          </div>

        </div>
      </div>

      {/* Payment Box */}
      <div className="mt-8 max-w-4xl w-full bg-white/10 backdrop-blur p-6 rounded-2xl border border-caution shadow-sm flex flex-col md:flex-row items-center gap-6">
        <div className="text-4xl">💳</div>
        <div className="flex-1">
          <h4 className="font-bold text-caution mb-1">Paying for Ads</h4>
          <p className="text-sm text-cream/90 font-body">
            International bank cards are often declined by Meta. Use the company's US/UK bank card, or a Payoneer Mastercard. Keep 2 weeks of ad money loaded. Failed payments can restrict the ad account.
          </p>
        </div>
      </div>

      <div className="mt-4 max-w-4xl w-full text-center">
        <p className="text-xs font-bold text-white/60 uppercase tracking-widest bg-white/10 inline-block px-4 py-2 rounded-full border border-white/20 shadow-sm backdrop-blur">
          Creators must clearly say #ad. No fake reviews. No fake countdowns.
        </p>
      </div>
    </div>
  );
};
