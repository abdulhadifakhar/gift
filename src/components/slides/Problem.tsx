import React from 'react';
import { BigNumber } from '../Typography';
import { Chip } from '../Chips';

export const Problem: React.FC = () => {
  const stats = [
    { num: "2 in 3", text: "struggle to find the right gift" },
    { num: "71%", text: "felt real anxiety about gift shopping" },
    { num: "85%", text: "abandon a cart from frustration or indecision" },
    { num: "39%", text: "are anxious about finding the \"right\" gift" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl mx-auto py-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
          <BigNumber className="mb-4">{stat.num}</BigNumber>
          <p className="text-xl font-body text-white mb-4">{stat.text}</p>
          <Chip variant="verified">Verified</Chip>
        </div>
      ))}
    </div>
  );
};
