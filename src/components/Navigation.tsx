import React from 'react';
import { Snowflake, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  theme: 'christmas' | 'evergreen';
  setTheme: (v: 'christmas' | 'evergreen') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  setTheme,
}) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 w-full z-50 flex justify-center pointer-events-none px-4"
    >
      <div className="glass-card pointer-events-auto px-6 py-3 flex items-center justify-between gap-8 rounded-full">
        
        <div className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#B38A1D] text-sm tracking-[0.2em] uppercase whitespace-nowrap">
          Never the Wrong Gift
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-black/20 rounded-full p-1 border border-white/5 shadow-inner">
             <button
              onClick={() => setTheme('christmas')}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                theme === 'christmas' ? 'bg-white/10 text-white shadow-md' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
              title="Christmas Theme"
            >
              <Snowflake size={14} />
            </button>
            <button
              onClick={() => setTheme('evergreen')}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                theme === 'evergreen' ? 'bg-white/10 text-white shadow-md' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
              title="Evergreen Theme"
            >
              <TreePine size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
