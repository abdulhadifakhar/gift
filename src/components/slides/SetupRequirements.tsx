import React from 'react';
import { founder } from '../../content/founder';
import { Chip } from '../Chips';

export const SetupRequirements: React.FC = () => {
  const reqs = [
    { label: "US LLC or UK Ltd company.", key: "company" },
    { label: "Business bank / Wise / Payoneer account.", key: "bank" },
    { label: "Payment gateway on Shopify.", key: "gateway" },
    { label: "Shopify store + legal pages.", key: "store" },
    { label: "Supplier accounts + sample orders.", key: "suppliers" },
    { label: "Ad accounts (Meta business-verified, TikTok).", key: "adAccounts" },
    { label: "Tax setup (UK VAT, US sales tax).", key: "tax" },
    { label: "Legal way to bring profit to HQ.", key: "legalProfit" },
    { label: "Customer support: email + auto-replies.", key: "support" }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-4xl glass-card p-8 rounded-3xl">
        
        <div className="space-y-4">
          {reqs.map((req, i) => {
            const status = founder.setupStatus[req.key] || 'To do';
            const variant = status === 'Done' ? 'verified' : status === 'In progress' ? 'estimate' : 'toconfirm';
            
            return (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-colors border-b border-white/10 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-lg font-body text-cream/90">{req.label}</span>
                </div>
                <Chip variant={variant}>{status}</Chip>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
