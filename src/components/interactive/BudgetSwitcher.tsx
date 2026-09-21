import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export const BudgetSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'low' | 'high'>('low');

  const lowData = [
    { name: 'Ad Spend', value: 2000, color: '#D4AF37' },
    { name: 'Creators', value: 500, color: '#FFFFFF' },
    { name: 'Samples', value: 200, color: '#1B1B1B' },
    { name: 'Tools', value: 150, color: '#FFFFFF' },
  ];

  const highData = [
    { name: 'Ad Spend', value: 5000, color: '#DC143C' },
    { name: 'Creators', value: 1200, color: '#FFFFFF' },
    { name: 'Samples', value: 400, color: '#1B1B1B' },
    { name: 'Tools', value: 250, color: '#FFFFFF' },
  ];

  const data = activeTab === 'low' ? lowData : highData;
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="glass-card rounded-3xl p-8 max-w-4xl w-full mx-auto">
      
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 p-1 rounded-full flex shadow-inner border border-white/20">
          <button
            onClick={() => setActiveTab('low')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'low' ? 'bg-gold text-midnight shadow-md' : 'text-cream hover:text-white'}`}
          >
            Bootstrapped ($2.8k)
          </button>
          <button
            onClick={() => setActiveTab('high')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'high' ? 'bg-crimson text-white shadow-md' : 'text-cream hover:text-white'}`}
          >
            Aggressive ($6.8k)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#FBF6EC', fontWeight: 'bold' }} width={80} />
              <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#0B132B', border: '1px solid rgba(255,255,255,0.2)', color: '#FBF6EC', borderRadius: '8px' }} itemStyle={{ color: '#FBF6EC', fontWeight: 'bold' }} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color === '#FFFFFF' ? 'rgba(255,255,255,0.8)' : entry.color === '#1B1B1B' ? 'rgba(255,255,255,0.4)' : entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-sm font-bold text-white/50 uppercase tracking-widest mb-2">Total Launch Budget</div>
          <div className="text-6xl font-display font-bold tabular-nums text-white mb-6">
            ${total.toLocaleString()}
          </div>
          <p className="text-cream/80 font-body">
            {activeTab === 'low' 
              ? "Tests 1-2 core products. Heavy reliance on organic social and a few micro-creators. High time investment."
              : "Tests 3-4 products. Dedicated ad budget to find winning creatives fast. Pays for better UGC creators."}
          </p>
        </div>

      </div>
    </div>
  );
};
