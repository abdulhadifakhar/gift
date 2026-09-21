import React from 'react';
import { ProfitCalculator } from '../interactive/ProfitCalculator';

export const YearRoundPlan: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <ProfitCalculator />
    </div>
  );
};
