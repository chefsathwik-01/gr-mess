
import React, { useState } from 'react';
import { getChefRecommendation } from '../services/gemini';

const ChefBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState<{ text: string, sources: any[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await getChefRecommendation(mood);
    setResponse(result);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-[100] w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all ring-4 ring-white"
        title="Ask our Chef"
      >
        <span className="text-2xl">{isOpen ? '✕' : '👩‍🍳'}</span>
      </button>

      <div className={`fixed bottom-24 left-8 z-[100] w-80 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100 flex flex-col ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="bg-gradient-to-r from-accent to-warm-clay p-4 text-white flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🍳</div>
          <div>
            <h4 className="font-heading font-bold text-sm">Chef's Advice</h4>
            <p className="text-[10px] text-white/70">Powered by Gemini Real-time</p>
          </div>
        </div>

        <div className="p-4 max-h-96 overflow-y-auto min-h-[150px] bg-white">
          {response ? (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-cream p-4 rounded-2xl text-sm text-secondary italic leading-relaxed border border-accent/10">
                "{response.text}"
              </div>
              
              {response.sources.length > 0 && (
                <div className="mt-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Sources & Local Info:</p>
                  <div className="flex flex-wrap gap-2">
                    {response.sources.slice(0, 2).map((source, i) => (
                      <a 
                        key={i} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-gray-50 hover:bg-gray-100 text-primary underline px-2 py-1 rounded-md truncate max-w-[120px]"
                      >
                        {source.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-xs text-gray-400 mb-2">"Is it raining in Shimoga? What should I eat?"</p>
              <p className="text-xs text-gray-400">"Feeling tired after a long day..."</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mb-2" />
              <p className="text-[10px] text-gray-400 animate-pulse">Checking Shimoga weather & menu...</p>
            </div>
          )}
        </div>

        <form onSubmit={handleAsk} className="p-3 bg-gray-50 border-t border-gray-100 flex gap-2">
          <input 
            type="text" 
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Ask anything..." 
            className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center disabled:opacity-50 shadow-md"
          >
            →
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default ChefBot;
