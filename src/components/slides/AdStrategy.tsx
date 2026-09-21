import React from 'react';
import { Smartphone, Video, MousePointerClick } from 'lucide-react';

export const AdStrategy: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-5xl">
        
        <div className="flex flex-col space-y-6">
          
          <div className="glass-card p-6 rounded-2xl flex items-center gap-6 relative overflow-hidden border-2 border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gold/20 to-transparent pointer-events-none"></div>
            <div className="w-16 h-16 bg-gold text-midnight rounded-xl flex items-center justify-center shrink-0 shadow-lg">
              <Smartphone size={32} />
            </div>
            <div>
              <h4 className="font-display font-bold text-2xl text-gold mb-1">1. Organic (Free, from now)</h4>
              <p className="text-lg text-cream/90">TikTok/Reels/Shorts, 3–5 posts a week.</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 text-white rounded-xl flex items-center justify-center shrink-0">
              <Video size={32} />
            </div>
            <div>
              <h4 className="font-display font-bold text-2xl text-white mb-1">2. Creators</h4>
              <p className="text-lg text-cream/90">5–10 micro-creators get free product for videos.</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 text-white rounded-xl flex items-center justify-center shrink-0">
              <MousePointerClick size={32} />
            </div>
            <div>
              <h4 className="font-display font-bold text-2xl text-white mb-1">3. Paid (Oct-Dec)</h4>
              <p className="text-lg text-cream/90">Meta, TikTok, Pinterest. Start UK and US equally, then move 70% to cheaper market.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
