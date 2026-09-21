import React from 'react';
import { founder } from '../../content/founder';
import { Chip } from '../Chips';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Box, Megaphone, CalendarDays, FileText, PiggyBank } from 'lucide-react';

export const TheAsk: React.FC = () => {
  const funds = [
    { name: 'Q4 Marketing', value: 5000, color: '#D4AF37', icon: Megaphone },
    { name: 'Feb-Jun Marketing', value: 2500, color: '#DC143C', icon: CalendarDays },
    { name: 'Company & Legal', value: 1200, color: '#0F3D2E', icon: FileText },
    { name: 'Samples & Ops', value: 600, color: '#FFFFFF', icon: Box },
    { name: 'Buffer', value: 700, color: '#888888', icon: PiggyBank },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      
      <div className="text-center mb-12 relative">
        <div className="text-7xl md:text-8xl font-display font-bold text-gold tabular-nums leading-none mb-4 drop-shadow-lg">
          {founder.raiseAmount ? `$${founder.raiseAmount.toLocaleString()}` : '$10,000'}
        </div>
        {!founder.raiseAmount && (
          <div className="absolute -top-6 right-0 translate-x-1/4">
            <Chip variant="toconfirm">To confirm (Example)</Chip>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
        
        {/* Use of funds */}
        <div className="glass-card rounded-2xl p-8 flex flex-col relative">
          <div className="absolute top-4 right-4"><Chip variant="estimate">Estimate</Chip></div>
          <h3 className="font-display font-bold text-2xl text-white mb-6 text-center">Use of Funds</h3>
          
          <div className="h-48 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={funds} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
                  {funds.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip 
                  formatter={(value: any) => `$${value}`}
                  contentStyle={{ backgroundColor: '#0B132B', border: '1px solid rgba(255,255,255,0.2)', color: '#FBF6EC', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            {funds.map((f, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }}></div>
                  <span className="font-bold text-cream/90">{f.name}</span>
                </div>
                <div className="font-mono text-white/80">${f.value.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Unlocks */}
        <div>
          <h3 className="font-display font-bold text-2xl text-white mb-6">What this unlocks</h3>
          <div className="space-y-4">
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <div className="bg-white/10 p-2 rounded-lg text-gold shadow-sm"><Box size={20} /></div>
              <p className="font-bold text-cream/90">More sample runs, sooner.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <div className="bg-white/10 p-2 rounded-lg text-gold shadow-sm"><Megaphone size={20} /></div>
              <p className="font-bold text-cream/90">A real Q4 ad budget.</p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <div className="bg-white/10 p-2 rounded-lg text-gold shadow-sm"><FileText size={20} /></div>
              <p className="font-bold text-cream/90">Paid, professional creators.</p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <div className="bg-white/10 p-2 rounded-lg text-gold shadow-sm"><CalendarDays size={20} /></div>
              <p className="font-bold text-cream/90">More quiz and creative tests at once.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
