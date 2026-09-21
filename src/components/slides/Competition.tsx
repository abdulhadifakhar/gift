import React from 'react';
import { Target, Search, Heart, RefreshCcw, Sparkles } from 'lucide-react';

export const Competition: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Big Players */}
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="font-display font-bold text-3xl text-white mb-6 text-center border-b border-white/10 pb-4">Big Players</h3>
          
          <div className="space-y-6 text-lg">
            <div className="flex flex-col">
              <span className="font-bold text-white">Etsy Gift Mode</span>
              <span className="text-sm text-cream/70">AI quiz, 200+ personas, TV ads</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white">Amazon & Walmart</span>
              <span className="text-sm text-cream/70">Adding generative-AI assistants</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white">Uncommon Goods</span>
              <span className="text-sm text-cream/70">25+ years, curated, B Corp</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white">Not On The High Street</span>
              <span className="text-sm text-cream/70">5,000+ UK creative businesses</span>
            </div>
          </div>
        </div>

        {/* Us */}
        <div className="bg-gold text-midnight p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/20 rounded-full"></div>
          <h3 className="font-display font-bold text-3xl mb-6 text-center border-b border-midnight/10 pb-4">Us (The Curated One)</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-midnight/10 p-2 rounded-lg"><Search size={24} /></div>
              <span className="text-lg font-medium">Small curated catalog.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-midnight/10 p-2 rounded-lg"><Heart size={24} /></div>
              <span className="text-lg font-medium">Promise to both giver and receiver.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-midnight/10 p-2 rounded-lg"><Sparkles size={24} /></div>
              <span className="text-lg font-medium">Personalized and engraved items.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-midnight/10 p-2 rounded-lg"><Target size={24} /></div>
              <span className="text-lg font-medium">One occasion first (Christmas), then expand.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-midnight/10 p-2 rounded-lg"><RefreshCcw size={24} /></div>
              <span className="text-lg font-medium">Fast to change: drop what doesn't sell weekly.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
