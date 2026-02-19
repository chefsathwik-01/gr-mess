
import React from 'react';
import { PRICING_PLANS } from '../constants.tsx';

const Pricing: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Decorative grain/pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-white/10 text-cream font-heading-sc text-sm rounded-full mb-4">💰 Meal Plans</span>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Subscribe & <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">Save</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose a monthly meal plan and enjoy delicious home-style food every day without worrying about cooking.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`reveal relative p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 group ${
                plan.isFeatured 
                  ? 'bg-white/5 border-primary shadow-2xl scale-105 z-10' 
                  : 'bg-stone-900/40 border-white/5'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-6 py-1 rounded-full text-xs font-heading-sc font-bold shadow-xl">
                  🔥 Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <span className="text-4xl block mb-2">{plan.icon}</span>
                <h3 className="text-2xl font-heading font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500">{plan.description}</p>
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-2xl font-bold text-accent">₹</span>
                <span className="text-5xl font-heading font-black">{plan.price}</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-green-500 shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
                {plan.excluded.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="text-red-500 shrink-0 opacity-40">✕</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/919035733264?text=Hi! I am interested in the ${plan.name} meal plan.`}
                target="_blank"
                className={`block text-center py-4 rounded-full font-heading font-bold transition-all ${
                  plan.isFeatured 
                    ? 'bg-primary text-white shadow-lg hover:shadow-primary/20' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
