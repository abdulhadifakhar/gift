import React, { useState, useEffect } from 'react';

export const ProfitCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState(100);
  const [cpa, setCpa] = useState(15);
  
  // Base fixed assumptions
  const aov = 45;
  const productCost = 15;
  const shippingCost = 5;
  const processingFeePct = 0.035;
  const refundsPct = 0.05;

  const [metrics, setMetrics] = useState({
    orders: 0,
    revenue: 0,
    cogs: 0,
    fees: 0,
    refunds: 0,
    totalCosts: 0,
    netProfit: 0,
    margin: 0
  });

  useEffect(() => {
    // Prevent division by zero
    const effectiveCpa = cpa > 0 ? cpa : 1;
    
    const orders = Math.floor(adSpend / effectiveCpa);
    const revenue = orders * aov;
    
    const cogs = orders * (productCost + shippingCost);
    const fees = revenue * processingFeePct;
    const refunds = revenue * refundsPct;
    
    const totalCosts = cogs + fees + refunds + adSpend;
    const netProfit = revenue - totalCosts;
    const margin = revenue > 0 ? (netProfit / revenue) * 100 : 0;

    setMetrics({
      orders, revenue, cogs, fees, refunds, totalCosts, netProfit, margin
    });
  }, [adSpend, cpa]);

  return (
    <div className="glass-card rounded-3xl p-8 max-w-4xl w-full mx-auto flex flex-col md:flex-row gap-8">
      
      {/* Inputs */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <label className="block text-sm font-bold text-white mb-2 flex justify-between">
            Daily Ad Spend 
            <span className="text-gold tabular-nums">${adSpend.toLocaleString()}</span>
          </label>
          <input 
            type="range" 
            min="10" 
            max="1000" 
            step="10"
            value={adSpend} 
            onChange={e => setAdSpend(Number(e.target.value))}
            className="w-full accent-crimson h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-white mb-2 flex justify-between">
            Cost Per Acquisition (CPA)
            <span className="text-gold tabular-nums">${cpa}</span>
          </label>
          <input 
            type="range" 
            min="5" 
            max="40" 
            step="1"
            value={cpa} 
            onChange={e => setCpa(Number(e.target.value))}
            className="w-full accent-crimson h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-white/50 mt-1">
            <span>Cheap</span>
            <span>Target ($15)</span>
            <span>Expensive</span>
          </div>
        </div>

        <div className="bg-white/10 p-4 rounded-xl border border-white/10 mt-auto">
          <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Fixed Assumptions</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-cream/80">
            <div className="flex justify-between"><span>AOV:</span> <span className="text-white">${aov}</span></div>
            <div className="flex justify-between"><span>Product:</span> <span className="text-white">${productCost}</span></div>
            <div className="flex justify-between"><span>Shipping:</span> <span className="text-white">${shippingCost}</span></div>
            <div className="flex justify-between"><span>Refunds:</span> <span className="text-white">5%</span></div>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 bg-midnight rounded-2xl p-6 border border-white/20 text-cream flex flex-col shadow-inner">
        <h4 className="font-bold text-lg mb-4 text-white">Daily Projection</h4>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex justify-between">
            <span className="text-white/70">Orders generated</span>
            <span className="font-mono text-white">{metrics.orders}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Gross Revenue</span>
            <span className="font-mono text-gold">${metrics.revenue.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
          </div>
          <div className="h-px bg-white/10 my-2"></div>
          <div className="flex justify-between text-sm">
            <span className="text-white/50">COGS & Shipping</span>
            <span className="font-mono text-white/50">-${metrics.cogs.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Ad Spend</span>
            <span className="font-mono text-white/50">-${adSpend.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Fees & Refunds</span>
            <span className="font-mono text-white/50">-${(metrics.fees + metrics.refunds).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
          </div>
        </div>

        <div className={`p-4 rounded-xl flex items-center justify-between ${metrics.netProfit >= 0 ? 'bg-pine text-white' : 'bg-crimson/20 text-white border border-crimson/50'}`}>
          <div>
            <div className="text-sm opacity-80">Net Profit</div>
            <div className="text-xs mt-1 opacity-60">{metrics.margin.toFixed(1)}% margin</div>
          </div>
          <div className="text-3xl font-bold tabular-nums">
            ${metrics.netProfit.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
          </div>
        </div>
      </div>

    </div>
  );
};
