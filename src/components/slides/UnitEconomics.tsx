import React from 'react';
import { Chip } from '../Chips';

export const UnitEconomics: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-4xl">
        <div className="flex justify-end mb-4"><Chip variant="estimate">Estimate</Chip></div>
        
        {/* Waterfall Chart Representation */}
        <div className="glass-card p-8 rounded-2xl">
          
          <div className="space-y-4">
            
            {/* Base Order */}
            <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
              <span className="font-display text-2xl font-bold text-white">Average Order</span>
              <span className="font-display text-2xl font-bold text-gold tabular-nums">$50.00</span>
            </div>

            {/* Deductions */}
            <div className="pl-8 pr-4 space-y-2">
              <div className="flex justify-between items-center text-cream/70">
                <span>Product cost + shipping (45%)</span>
                <span className="tabular-nums font-mono">−$22.50</span>
              </div>
              <div className="flex justify-between items-center text-cream/70">
                <span>Payment fees (3.5%)</span>
                <span className="tabular-nums font-mono">−$1.75</span>
              </div>
              <div className="flex justify-between items-center text-cream/70">
                <span>Refunds allowance (3%)</span>
                <span className="tabular-nums font-mono">−$1.50</span>
              </div>
            </div>

            <div className="h-px bg-white/20 my-4"></div>

            {/* Contribution Margin */}
            <div className="flex justify-between items-center p-4 bg-gold text-midnight rounded-xl shadow-md">
              <span className="font-display text-2xl font-bold">Contribution (48.5%)</span>
              <span className="font-display text-3xl font-bold tabular-nums">~$24.25</span>
            </div>

          </div>
        </div>

        <div className="mt-8 bg-white/5 border-2 border-gold/50 border-dashed p-6 rounded-xl text-center">
          <p className="text-xl font-bold text-gold mb-2">Rule: Ads must cost less than $24 per order to make money.</p>
          <p className="text-lg text-cream/80">Or: $2 of sales for every $1 of ads.</p>
        </div>

      </div>
    </div>
  );
};
