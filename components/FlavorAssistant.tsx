
import React, { useState } from 'react';
import { getSpiceRecommendation } from '../services/geminiService';

export const FlavorAssistant: React.FC = () => {
  const [dish, setDish] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!dish.trim()) return;
    setLoading(true);
    const res = await getSpiceRecommendation(dish);
    setRecommendation(res || '');
    setLoading(false);
  };

  return (
    <div className="bg-stone-900 text-white p-8 md:p-12 rounded-3xl mt-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-serif mb-4 italic">What are you cooking today?</h3>
        <p className="text-stone-400 mb-8 max-w-xl">
          Not sure which spice to use? Ask our AI Spice Sommelier for a recommendation based on our upcoming cold-pressed range.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="e.g. A slow-cooked mutton curry or a fresh vegetable stir fry..."
            className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-stone-500"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
          />
          <button
            onClick={handleAsk}
            disabled={loading}
            className="bg-white text-stone-900 px-8 py-3 rounded-xl font-bold hover:bg-amber-500 hover:text-white transition-all disabled:opacity-50"
          >
            {loading ? 'Consulting Experts...' : 'Get Advice'}
          </button>
        </div>

        {recommendation && (
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start gap-4">
              <span className="text-2xl">✨</span>
              <p className="text-stone-200 leading-relaxed italic">
                "{recommendation}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
