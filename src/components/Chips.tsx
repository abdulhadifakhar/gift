import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface ChipProps {
  children: React.ReactNode;
  variant?: 'verified' | 'estimate' | 'toconfirm' | 'default';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ children, variant = 'default', className }) => {
  const baseStyles = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap";
  
  const variants = {
    verified: "bg-pine text-cream",
    estimate: "bg-white/10 text-cream border border-white/30",
    toconfirm: "bg-caution text-ink border-2 border-dashed border-ink", // dashed outline added
    default: "bg-white/10 text-white"
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};
