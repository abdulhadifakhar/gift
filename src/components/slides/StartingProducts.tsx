import React, { useState } from 'react';
import { products } from '../../content/deck';
import { founder } from '../../content/founder';
import { ExternalLink, Filter } from 'lucide-react';

export const StartingProducts: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const people = ['All', ...Array.from(new Set(products.map(p => p.person.split(' (')[0].split(' / ')[0])))];

  const filtered = filter === 'All' ? products : products.filter(p => p.person.includes(filter));

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
          <Filter size={16} className="text-white/50" />
          {people.map(p => (
            <button 
              key={p} 
              onClick={() => setFilter(p)}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${filter === p ? 'bg-gold text-midnight' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}
            >
              {p}
            </button>
          ))}
        </div>
        <a 
          href={founder.sheetUrl} 
          target="_blank"
          className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg font-bold text-sm hover:bg-white/20 transition-colors whitespace-nowrap"
        >
          See sourcing sheet <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 overflow-y-auto pr-2 pb-4 hide-scrollbar max-w-6xl mx-auto w-full">
        {filtered.map(p => (
          <div key={p.id} className="glass-card p-3 rounded-xl flex flex-col">
            <div className="aspect-square bg-white/5 rounded-lg mb-3 flex items-center justify-center">
               <span className="text-white/30 text-xs font-bold uppercase">Image {p.id}</span>
            </div>
            <h4 className="font-bold text-xs leading-tight mb-2 flex-grow text-white">{p.name}</h4>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gold font-bold">{p.price}</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/80 border border-white/20">{p.margin}</span>
            </div>
            <div className="mt-auto">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded w-full block text-center ${
                p.verdict.includes('Strong') ? 'bg-pine text-cream' : 
                p.verdict.includes('Solid') ? 'bg-white/20 text-white' : 
                'bg-black/30 text-white/50'
              }`}>
                {p.verdict}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
