import React from 'react';

export const AppendixSources: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="glass-card p-8 rounded-2xl max-w-4xl w-full mx-auto">
        <ul className="space-y-4 text-sm text-cream/80">
          <li><strong>Slide 3 (Problem):</strong> Epsilon, "The Power of Me: The impact of personalization on marketing performance" (2018). NRF, "Consumer Holiday Anxiety" (2022).</li>
          <li><strong>Slide 5 (Christmas Timing):</strong> eMarketer, "US Holiday Retail Sales" (2025/2026). NRF holiday spending forecasts. UK retail forecasts via ONS and Retail Economics.</li>
          <li><strong>Slide 6 (Black Friday):</strong> Shopify, "Black Friday Cyber Monday 2024 results" press release.</li>
          <li><strong>Slide 8 & 21 (Market Size / Year Round):</strong> Grand View Research, "Personalized Gifts Market Size" (2023). NRF seasonal spending reports for Valentine's, Mother's Day, Father's Day.</li>
          <li><strong>Slide 23 (Unit Economics):</strong> Stripe/Shopify standard payment processing fees (2.9% + 30c). Dropshipping average return rates (industry standard ~3-5%).</li>
        </ul>
      </div>
    </div>
  );
};

export const AppendixAssumptions: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="glass-card p-8 rounded-2xl max-w-4xl w-full mx-auto">
        <ul className="space-y-4 text-sm text-cream/80 list-disc pl-4">
          <li><strong>Average Order Value (AOV):</strong> Estimated at $45-50 based on planned product catalog pricing.</li>
          <li><strong>Cost of Goods Sold (COGS):</strong> Estimated at 40-45% of retail price including shipping from supplier to customer.</li>
          <li><strong>Conversion Rate:</strong> Assumed 1.5% to 2.5% for paid traffic to a new store.</li>
          <li><strong>Cost Per Acquisition (CPA):</strong> Target $15-20, though Q4 costs may drive this higher. Profitability requires CPA &lt; $24.</li>
          <li><strong>Refund Rate:</strong> Budgeted at 3-5%, though personalized/engraved products typically see lower return rates (often under 2%) due to non-resellable nature.</li>
        </ul>
      </div>
    </div>
  );
};

export const AppendixDisclaimer: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center text-center">
      <div className="glass-card p-12 rounded-2xl max-w-4xl w-full mx-auto border-dashed border-2 border-white/20">
        <h3 className="font-display font-bold text-2xl text-white mb-6">Forward-Looking Statements</h3>
        <p className="text-cream/70 mb-4 leading-relaxed">
          This presentation contains forward-looking statements involving risks and uncertainties. These statements may include projections of financial performance, operational plans, and market estimates. Actual results may differ materially from those anticipated due to various factors including, but not limited to, market conditions, supply chain disruptions, ad platform volatility, and competition.
        </p>
        <p className="text-cream/70 leading-relaxed text-sm">
          All financial figures, unless marked as "Verified", represent planning estimates and goals rather than historical data or guarantees. This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or investments.
        </p>
      </div>
    </div>
  );
};
