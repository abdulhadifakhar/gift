import React from 'react';
import { Package, Truck, Laptop, CheckCircle2 } from 'lucide-react';
import { Chip } from '../Chips';

export const Operations: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        
        {/* Step 1 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center relative group">
          <div className="absolute top-4 right-4 text-white/20 group-hover:text-gold transition-colors">
            <CheckCircle2 />
          </div>
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-gold group-hover:text-midnight transition-colors shadow-lg">
            <Package size={32} />
          </div>
          <h3 className="font-display font-bold text-2xl mb-4 text-white">Sourcing</h3>
          <p className="text-cream/80 text-lg mb-4 flex-grow">Use Zendrop and CJdropshipping for vetted suppliers with US/UK warehouses.</p>
          <Chip variant="verified">US/UK Selected</Chip>
        </div>

        {/* Step 2 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center relative group">
          <div className="absolute top-4 right-4 text-white/20 group-hover:text-gold transition-colors">
            <CheckCircle2 />
          </div>
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-gold group-hover:text-midnight transition-colors shadow-lg">
            <Truck size={32} />
          </div>
          <h3 className="font-display font-bold text-2xl mb-4 text-white">Fulfillment</h3>
          <p className="text-cream/80 text-lg mb-4 flex-grow">Orders route automatically from Shopify to supplier. No touching inventory.</p>
          <Chip variant="verified">Automated</Chip>
        </div>

        {/* Step 3 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center relative group border border-white/20 bg-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <div className="w-20 h-20 bg-white text-midnight rounded-full flex items-center justify-center mb-6 shadow-xl">
            <Laptop size={32} />
          </div>
          <h3 className="font-display font-bold text-2xl mb-4 text-white">Management</h3>
          <p className="text-cream/80 text-lg mb-4 flex-grow">Run entirely from a laptop. Customer support handled via Gorgias.</p>
          <Chip variant="estimate">Ready</Chip>
        </div>

      </div>
    </div>
  );
};
