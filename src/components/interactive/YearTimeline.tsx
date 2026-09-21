import React from 'react';

const events = [
  { date: 'Oct 31', name: 'Halloween', uk: true, us: true, size: 'sm' },
  { date: 'Nov 8', name: 'Diwali', uk: true, us: true, size: 'sm' },
  { date: 'Nov 26', name: 'Thanksgiving', uk: false, us: true, size: 'md' },
  { date: 'Nov 27', name: 'Black Friday', uk: true, us: true, size: 'lg', highlight: true },
  { date: 'Dec 25', name: 'Christmas', uk: true, us: true, size: 'xl', highlight: true },
  { date: 'Jan', name: 'New Year', uk: true, us: true, size: 'sm' },
  { date: 'Feb 14', name: 'Valentine\'s Day', uk: true, us: true, size: 'lg', val: '$29.1B US' },
  { date: 'Mar 7', name: 'UK Mothering Sunday', uk: true, us: false, size: 'lg' },
  { date: 'Mar 28', name: 'Easter', uk: true, us: true, size: 'md' },
  { date: 'May 9', name: 'US Mother\'s Day', uk: false, us: true, size: 'lg', val: '~$38B US' },
  { date: 'May/Jun', name: 'Graduations', uk: true, us: true, size: 'md' },
  { date: 'Jun 20', name: 'Father\'s Day', uk: true, us: true, size: 'lg', val: '$27.9B US' },
  { date: 'Aug', name: 'Back to School', uk: true, us: true, size: 'md' },
];

export const YearTimeline: React.FC = () => {
  return (
    <div className="w-full glass-card rounded-2xl p-6 overflow-hidden">
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="min-w-[800px] relative">
          
          {/* Always on strip */}
          <div className="absolute bottom-0 left-0 w-full bg-white/10 py-2 px-4 rounded-lg flex items-center justify-center gap-4 text-sm font-bold text-white/90 uppercase tracking-widest border border-white/20">
            <span>Birthdays</span> • <span>Anniversaries</span> • <span>Weddings</span> • <span>Housewarming</span> • <span>Thank You</span>
          </div>

          {/* Timeline tracks */}
          <div className="mt-8 mb-16 relative">
            <div className="absolute top-8 left-0 w-full h-px bg-white/20"></div>
            <div className="absolute top-24 left-0 w-full h-px bg-white/20"></div>
            
            {/* Labels */}
            <div className="absolute left-0 top-6 -translate-y-1/2 text-xs font-bold text-white/50 uppercase tracking-widest">USA</div>
            <div className="absolute left-0 top-24 -translate-y-1/2 text-xs font-bold text-white/50 uppercase tracking-widest">UK</div>

            <div className="flex justify-between pl-12 pr-4 relative">
              {events.map((ev, i) => {
                const sizeMap = { sm: 12, md: 16, lg: 24, xl: 32 };
                const size = sizeMap[ev.size as keyof typeof sizeMap];
                
                return (
                  <div key={i} className="flex flex-col items-center relative group w-16 cursor-pointer">
                    <div className="text-xs font-bold text-white/70 mb-2 whitespace-nowrap absolute -top-8">{ev.date}</div>
                    
                    {/* US Node */}
                    <div className="h-16 flex items-center justify-center relative w-full">
                      {ev.us && (
                        <div 
                          className={`rounded-full shadow-sm transition-transform group-hover:scale-125 ${ev.highlight ? 'bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)]' : 'bg-gold'}`}
                          style={{ width: size, height: size }}
                        />
                      )}
                    </div>
                    
                    {/* UK Node */}
                    <div className="h-16 flex items-center justify-center relative w-full">
                      {ev.uk && (
                        <div 
                          className={`rounded-full shadow-sm transition-transform group-hover:scale-125 ${ev.highlight ? 'bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)]' : 'bg-gold'}`}
                          style={{ width: size, height: size }}
                        />
                      )}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white text-midnight text-xs p-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      <div className="font-bold">{ev.name}</div>
                      {ev.val && <div className="text-pine font-bold">{ev.val}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
