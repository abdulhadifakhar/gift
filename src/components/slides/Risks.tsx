import React from 'react';
import { AlertTriangle, Clock, XOctagon } from 'lucide-react';

export const Risks: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-5xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card p-8 rounded-2xl border-t-4 border-t-crimson flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 text-white/10"><Clock size={48} /></div>
            <h3 className="font-display font-bold text-2xl text-white mb-4 relative z-10">Shipping Delays</h3>
            <p className="text-cream/80 mb-6 relative z-10 flex-grow">
              Dropshipping from China during Q4 can be unpredictable. Late gifts destroy trust.
            </p>
            <div className="bg-white/10 p-4 rounded-xl mt-auto relative z-10">
              <span className="font-bold text-gold text-sm block mb-1">Mitigation:</span>
              <span className="text-sm text-white">Conservative order-by dates. Stop ads 5 days earlier than supplier promises.</span>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border-t-4 border-t-caution flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 text-white/10"><XOctagon size={48} /></div>
            <h3 className="font-display font-bold text-2xl text-white mb-4 relative z-10">Ad Account Bans</h3>
            <p className="text-cream/80 mb-6 relative z-10 flex-grow">
              Meta frequently flags dropshippers or new accounts, especially during BFCM.
            </p>
            <div className="bg-white/10 p-4 rounded-xl mt-auto relative z-10">
              <span className="font-bold text-gold text-sm block mb-1">Mitigation:</span>
              <span className="text-sm text-white">Warm up account slowly. Follow policies strictly. Have a backup TikTok account ready.</span>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border-t-4 border-t-pine flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 text-white/10"><AlertTriangle size={48} /></div>
            <h3 className="font-display font-bold text-2xl text-white mb-4 relative z-10">Cost Per Click Spike</h3>
            <p className="text-cream/80 mb-6 relative z-10 flex-grow">
              Ad costs skyrocket in November as big brands enter the auction.
            </p>
            <div className="bg-white/10 p-4 rounded-xl mt-auto relative z-10">
              <span className="font-bold text-gold text-sm block mb-1">Mitigation:</span>
              <span className="text-sm text-white">Rely on organic/UGC to lower CPA. If paid CPA &gt; $25, pause campaigns and rely on email capture.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
