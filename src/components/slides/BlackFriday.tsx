import React from 'react';
import { BigNumber } from '../Typography';
import { Chip } from '../Chips';

export const BlackFriday: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        <div className="glass-card p-6 rounded-2xl text-center col-span-2 md:col-span-1">
          <BigNumber className="text-4xl md:text-5xl mb-2">$14.6B</BigNumber>
          <p className="font-bold text-white mb-2">Sales on Shopify stores</p>
          <div className="inline-block bg-white/20 text-white font-bold text-sm px-2 py-1 rounded">+27% YoY</div>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center col-span-2 md:col-span-1">
          <BigNumber className="text-4xl md:text-5xl mb-2">81M+</BigNumber>
          <p className="font-bold text-white mb-2">Customers worldwide</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-6 rounded-2xl shadow-xl text-center col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <BigNumber className="text-5xl md:text-6xl mb-2">15,800+</BigNumber>
          <p className="font-bold text-lg mb-2">Entrepreneurs made their first sale that weekend</p>
          <p className="text-white/70 text-sm">The market is open to new stores</p>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center col-span-2 md:col-span-4 mt-2">
          <p className="text-xl font-bold text-white mb-2">Average cart size: <span className="text-gold font-display text-3xl ml-2">$114.70</span></p>
          <div className="flex justify-center mt-2">
             <Chip variant="verified">Verified Data</Chip>
          </div>
        </div>
      </div>
    </div>
  );
};
