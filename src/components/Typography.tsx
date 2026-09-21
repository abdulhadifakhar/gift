import React from 'react';
import { cn } from './Chips';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn("text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm", className)}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn("text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-white/95", className)}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn("text-2xl md:text-3xl font-display font-semibold tracking-wide text-white/90 uppercase", className)}>
    {children}
  </h3>
);

export const Body: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn("text-lg md:text-xl font-body leading-relaxed text-cream/80 font-light", className)}>
    {children}
  </p>
);

export const BigNumber: React.FC<TypographyProps> = ({ children, className }) => (
  <div className={cn("text-7xl md:text-[88px] font-display font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-br from-gold to-[#B38A1D] drop-shadow-sm tracking-tighter", className)}>
    {children}
  </div>
);

export const SourceLine: React.FC<TypographyProps> = ({ children, className }) => (
  <div className={cn("text-xs text-cream/50 uppercase tracking-widest font-medium", className)}>
    {children}
  </div>
);
