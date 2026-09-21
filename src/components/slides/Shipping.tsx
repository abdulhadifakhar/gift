import React from 'react';
import { founder } from '../../content/founder';
import { Chip } from '../Chips';
import { Map, Clock, CalendarDays } from 'lucide-react';

export const Shipping: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-5xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
              <Map size={24} />
            </div>
            <p className="font-bold text-cream/90">Use in-region warehouses (US/UK/EU).</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
              <Clock size={24} />
            </div>
            <p className="font-bold text-cream/90">Order and time-test samples to each country this week.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
              <CalendarDays size={24} />
            </div>
            <p className="font-bold text-cream/90">Publish a real "order by" banner. Do not guess dates.</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead className="bg-white/10 text-white font-bold text-sm uppercase tracking-widest border-b border-white/20">
              <tr>
                <th className="p-4">Supplier</th>
                <th className="p-4">Coverage</th>
                <th className="p-4">Typical Delivery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-gold">CJdropshipping</td>
                <td className="p-4 text-cream/80">US, UK, DE, FR, IT, CA, AU</td>
                <td className="p-4 text-cream/80">~1–2 weeks in-region</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-gold">Spocket</td>
                <td className="p-4 text-cream/80">US, EU, CA, AU</td>
                <td className="p-4 text-cream/80">2–7 days domestic</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-gold">Zendrop</td>
                <td className="p-4 text-cream/80">Mainly US</td>
                <td className="p-4 text-cream/80">3–7 days (US only)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-6">
          <div className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-xl flex items-center gap-4">
            <span className="font-bold text-white">US Order-by date</span>
            <Chip variant={founder.orderByDates.US ? 'verified' : 'toconfirm'}>
              {founder.orderByDates.US || 'To confirm after sample test'}
            </Chip>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-xl flex items-center gap-4">
            <span className="font-bold text-white">UK Order-by date</span>
            <Chip variant={founder.orderByDates.UK ? 'verified' : 'toconfirm'}>
              {founder.orderByDates.UK || 'To confirm'}
            </Chip>
          </div>
        </div>

      </div>
    </div>
  );
};
