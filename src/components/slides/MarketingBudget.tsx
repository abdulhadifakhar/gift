import React from 'react';
import { BudgetSwitcher } from '../interactive/BudgetSwitcher';

export const MarketingBudget: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <BudgetSwitcher />
    </div>
  );
};
