import React from 'react';
import { Chip } from '../Chips';

export const Roadmap: React.FC = () => {
  const steps = [
    { time: "Right Now", title: "Setup & Sourcing", desc: "Company formation, bank, Shopify setup. Order samples to test delivery times.", status: "Done" },
    { time: "Next 2 Weeks", title: "Creative & Pre-launch", desc: "Film initial UGC and organic content. Build out the 3 initial product pages and quiz.", status: "In progress" },
    { time: "October", title: "Testing Phase", desc: "Run $20-30/day ad tests to find winning angles. Build organic following.", status: "To do" },
    { time: "Nov - Dec", title: "Scale & Sell", desc: "Push winning ads. Constant inventory checks. Hard stop on ads at shipping cut-off.", status: "To do" },
    { time: "Jan 2027", title: "Review & Pivot", desc: "Analyze data. Swap out losing products. Prepare Valentine's Day creative.", status: "To do" }
  ];

  return (
    <div className="w-full flex flex-col h-full justify-center">
      <div className="max-w-4xl w-full mx-auto relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
        
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 mt-2 md:mt-0 ring-4 ring-midnight shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
              
              <div className={`w-full md:w-1/2 flex ${i % 2 === 0 ? 'justify-start pl-16 md:pl-8' : 'justify-start pl-16 md:pl-0 md:justify-end md:pr-8'}`}>
                <div className="glass-card p-6 rounded-2xl w-full max-w-sm text-left">
                  <div className="text-gold font-bold text-sm mb-2 uppercase tracking-widest">{step.time}</div>
                  <h4 className="font-display font-bold text-xl text-white mb-2">{step.title}</h4>
                  <p className="text-cream/80 text-sm mb-4">{step.desc}</p>
                  <Chip variant={step.status === 'Done' ? 'verified' : step.status === 'In progress' ? 'estimate' : 'default'}>{step.status}</Chip>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
