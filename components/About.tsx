
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl grid grid-cols-3 gap-4">
              {[ '👩‍🍳', '🍛', '❤️', '🍚', '🥘', '🌿', '🫓', '☕', '😋' ].map((emoji, i) => (
                <div key={i} className="aspect-square bg-cream rounded-2xl flex items-center justify-center text-4xl shadow-inner hover:scale-110 hover:-rotate-6 transition-all cursor-default">
                  {emoji}
                </div>
              ))}
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">🏆</div>
                <div>
                  <div className="text-sm font-heading font-bold text-secondary">Shimoga's #1</div>
                  <div className="text-[10px] font-bold text-gray-400">Most Loved Mess</div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary/10 rounded-3xl -z-0" />
          </div>

          <div className="reveal">
            <span className="inline-block px-4 py-1 bg-red-50 text-primary font-heading-sc text-sm rounded-full mb-6 uppercase tracking-widest">🏪 Our Story</span>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-6">
              A Taste of <span className="text-primary">Home</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              G R Mess has been Shimoga's favorite destination for authentic, home-style South Indian meals. What started as a small kitchen with a simple mission — to serve food that tastes like home — has grown into the city's most trusted mess.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every dish is prepared fresh daily using locally sourced, quality ingredients. Our cooks bring decades of experience and genuine passion for South Indian cooking.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <div className="text-3xl font-heading font-black text-primary">3000+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-primary">500+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Daily Thalis</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-primary">2</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Branches</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[ '🌿 Fresh Ingredients', '👨‍👩‍👧 Family Friendly', '💰 Budget Prices', '🚚 Home Delivery' ].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-500 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
