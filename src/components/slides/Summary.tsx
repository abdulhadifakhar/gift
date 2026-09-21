import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

export const Summary: React.FC = () => {
  const points = [
    "Gift shopping is stressful. We fix it.",
    "Christmas is the biggest window, and it is open now.",
    "Twelve months of occasions keep it going.",
    "Products are sourced and price-checked.",
    "Launch marketing needs about $5,000. We manage globally with a US/UK company.",
    "Year 1: pay for itself and build the customer list. Year 2: profit."
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="max-w-4xl w-full glass-card p-12 rounded-3xl">
        
        <div className="space-y-6 mb-12">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 text-gold">
                <CheckCircle size={24} />
              </div>
              <p className="text-xl md:text-2xl font-body text-cream/90 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="/store-preview" 
            target="_blank"
            className="flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-crimson/90 transition-colors shadow-lg"
          >
            Back to the store preview <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
