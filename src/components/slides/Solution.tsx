import React, { useState } from 'react';
import { products } from '../../content/deck';
import { Gift, RefreshCcw } from 'lucide-react';

const questions = [
  { id: 'who', q: "Who is it for?", options: ["Mum", "Dad", "Partner", "Friend", "Colleague", "Teacher", "Kid"] },
  { id: 'occasion', q: "Occasion?", options: ["Christmas", "Birthday", "Valentine's", "Housewarming", "Thank you", "Just because"] },
  { id: 'budget', q: "Budget?", options: ["Under $30", "$30–50", "$50–75", "$75+"] },
  { id: 'vibe', q: "Their vibe?", options: ["Homebody", "Desk-decorator", "Sentimental", "Practical", "Impossible to shop for"] },
  { id: 'personal', q: "Add a personal touch?", options: ["Yes (Engraved/monogram)", "No"] }
];

export const GiftQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any[] | null>(null);

  const handleSelect = (opt: string) => {
    const newAnswers = { ...answers, [questions[step].id]: opt };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const vibe = newAnswers['vibe'];
      let matches = products.filter(p => p.person.includes(vibe) || p.verdict.includes("Strong pick"));
      if (matches.length < 3) {
        matches = [...matches, ...products].slice(0, 3);
      } else {
        matches = matches.slice(0, 3);
      }
      setResult(matches);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="glass-card rounded-3xl p-8 max-w-4xl w-full mx-auto">
        <h3 className="font-display text-3xl font-bold text-white mb-6 text-center">We found the perfect gifts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {result.map((p, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4 flex flex-col relative border border-white/10">
              {i === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-crimson text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Top Pick
                </div>
              )}
              <div className="aspect-square bg-white/5 rounded-lg mb-4 flex items-center justify-center text-white/30">
                <Gift size={48} />
              </div>
              <h4 className="font-bold text-lg mb-1 flex-grow text-white">{p.name}</h4>
              <p className="text-gold font-bold text-xl mb-3">{p.price}</p>
              <div className="bg-white/5 text-white/90 text-sm p-2 rounded">
                <span className="font-bold block text-xs uppercase tracking-wider mb-1 text-gold">Both-sides promise</span>
                "Gift they'll actually use."
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/5 p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 justify-between border border-white/10">
          <div>
            <h4 className="font-bold text-white">Send these to my email</h4>
            <p className="text-sm text-cream/70">Save your results and get a 10% discount code.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="Email address" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 flex-grow md:w-64 text-white placeholder-white/50" />
            <button className="bg-crimson text-white px-6 py-2 rounded-lg font-bold">Save</button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button onClick={reset} className="text-white hover:text-gold font-bold flex items-center gap-2 mx-auto transition-colors">
            <RefreshCcw size={16} /> Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[step];

  return (
    <div className="glass-card rounded-3xl p-8 max-w-2xl w-full mx-auto">
      <div className="flex justify-center gap-2 mb-8">
        {questions.map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i <= step ? 'bg-gold w-8' : 'bg-white/20 w-4'}`} />
        ))}
      </div>
      
      <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-sm">
        {currentQ.q}
      </h3>
      
      <div className="flex flex-wrap gap-4 justify-center">
        {currentQ.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(opt)}
            className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-lg font-bold text-white transition-all transform hover:scale-105 shadow-sm"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export const Solution: React.FC = () => {
  return (
    <div className="w-full py-4">
      <GiftQuiz />
    </div>
  );
};
