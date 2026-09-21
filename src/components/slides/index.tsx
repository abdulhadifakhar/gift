export { Cover } from './Cover';
export { Idea } from './Idea';
export { Problem } from './Problem';
export { Solution } from './Solution';
export { ChristmasTiming } from './ChristmasTiming';
export { BlackFriday } from './BlackFriday';
export { YearRound } from './YearRound';
export { StorefrontPreview } from './StorefrontPreview';
export { Operations } from './Operations';
export { MarketingBudget } from './MarketingBudget';
export { AdCreation } from './AdCreation';
export { YearRoundPlan } from './YearRoundPlan';
export { TheAsk } from './TheAsk';
export { Summary } from './Summary';

// Full Deck Exports
export { MarketSize } from './MarketSize';
export { StartingProducts } from './StartingProducts';
export { PriceCheck } from './PriceCheck';
export { UnitEconomics } from './UnitEconomics';
export { Competition } from './Competition';
export { SetupRequirements } from './SetupRequirements';
export { Shipping } from './Shipping';
export { AdStrategy } from './AdStrategy';
export { Roadmap } from './Roadmap';
export { Risks } from './Risks';
export { AppendixSources, AppendixAssumptions, AppendixDisclaimer } from './Appendix';

import React from 'react';

export const DefaultSlide: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full border-4 border-dashed border-pine/20 rounded-2xl">
      <p className="text-pine/50 font-bold text-xl">Content Component Missing</p>
    </div>
  );
};
