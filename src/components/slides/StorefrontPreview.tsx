import React from 'react';
import { ExternalLink, ShoppingCart, User, Search, Gift } from 'lucide-react';
import { products } from '../../content/deck';

export const StorefrontPreview: React.FC = () => {
  const showcaseProducts = products.slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      
      {/* Browser Mockup */}
      <div className="w-full max-w-5xl glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col">
        
        {/* Browser Chrome */}
        <div className="bg-white/10 px-4 py-3 flex items-center gap-4 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-crimson/50"></div>
            <div className="w-3 h-3 rounded-full bg-gold/50"></div>
            <div className="w-3 h-3 rounded-full bg-pine/50"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-black/20 text-cream/70 text-xs px-4 py-1 rounded-full flex items-center gap-2">
              <span>neverthewronggift.com</span>
            </div>
          </div>
          <a href="/store" target="_blank" className="text-white/50 hover:text-white transition-colors">
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Store Content */}
        <div className="bg-[#fcfaf8] text-ink flex-1 overflow-hidden relative" style={{ height: '500px' }}>
          
          {/* Announcement Bar */}
          <div className="bg-pine text-cream text-xs text-center py-1 font-bold">
            Guaranteed delivery by Dec 22 if ordered today.
          </div>

          {/* Header */}
          <header className="px-8 py-4 border-b border-pine/10 flex justify-between items-center bg-white/80 backdrop-blur sticky top-0 z-20">
            <div className="font-display font-bold text-xl text-pine">Never the Wrong Gift.</div>
            <div className="hidden md:flex gap-6 text-sm font-bold text-ink/70">
              <span className="text-pine">Gift Quiz</span>
              <span>For Her</span>
              <span>For Him</span>
              <span>Under $50</span>
            </div>
            <div className="flex gap-4 text-pine">
              <Search size={20} />
              <User size={20} />
              <ShoppingCart size={20} />
            </div>
          </header>

          {/* Hero */}
          <div className="bg-soft-sage px-8 py-12 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute right-10 bottom-0 opacity-10"><Gift size={200} /></div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-pine mb-4 max-w-2xl relative z-10">
              The gift they'll actually use.
            </h1>
            <p className="text-lg text-ink/80 mb-8 max-w-lg relative z-10">
              Take the 60-second quiz. We'll show you 3 perfect, guaranteed-to-delight options.
            </p>
            <button className="bg-crimson text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-crimson/90 transition-colors shadow-lg relative z-10">
              Take the Gift Quiz
            </button>
          </div>

          {/* Featured Grid Mockup */}
          <div className="px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {showcaseProducts.map((p, i) => (
                <div key={i} className="flex flex-col group">
                  <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
                    <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <h4 className="font-bold text-sm leading-tight mb-1">{p.name}</h4>
                  <p className="text-pine font-bold text-sm">{p.price}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Fade out bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fcfaf8] to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};
