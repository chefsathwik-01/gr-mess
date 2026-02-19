
import React, { useState } from 'react';
import { REVIEWS } from '../constants.tsx';

const Reviews: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-red-50 text-primary font-heading-sc text-sm rounded-full mb-4">⭐ Reviews</span>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-secondary mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our 3000+ happy customers who keep coming back for more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative reveal">
          <div className="relative min-h-[300px] flex items-center justify-center">
            {REVIEWS.map((review, idx) => (
              <div
                key={review.id}
                className={`absolute inset-0 transition-all duration-700 p-8 rounded-[2rem] bg-cream flex flex-col justify-center items-center text-center ${
                  idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 -z-0'
                }`}
              >
                <div className="text-amber-400 text-xl mb-6">
                  {Array(review.stars).fill('⭐').join('')}
                </div>
                <p className="text-xl italic font-heading text-secondary mb-8 leading-relaxed max-w-2xl">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 text-left">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-secondary">{review.author}</div>
                    <div className="text-xs text-gray-400 font-bold">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              ←
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
