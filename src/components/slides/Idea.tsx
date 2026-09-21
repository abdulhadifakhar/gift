import React from 'react';
import { Search, Package, Heart } from 'lucide-react';

export const Idea: React.FC = () => {
  const steps = [
    { icon: Search, title: "Find", desc: "60-second quiz" },
    { icon: Package, title: "Ship", desc: "From local warehouses" },
    { icon: Heart, title: "Delight", desc: "Right gift, first time" }
  ];

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 glass-card rounded-full flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <step.icon size={48} />
              </div>
              <h3 className="font-display font-bold text-3xl mb-2 text-white">{step.title}</h3>
              <p className="text-cream/90 font-body text-xl">{step.desc}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden md:block w-16 h-1 bg-white/20 rounded-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
