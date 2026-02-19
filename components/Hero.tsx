
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [status, setStatus] = useState<{ open: boolean, message: string }>({ open: false, message: 'Checking...' });

  useEffect(() => {
    const updateStatus = () => {
      // Calculate IST Time (UTC +5:30)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      
      const hours = istTime.getHours();
      const mins = istTime.getMinutes();
      const timeVal = hours + mins/60;

      // Operational Hours: 
      // Breakfast: 7:30 - 10:30
      // Lunch: 12:00 - 15:30
      // Dinner: 19:00 - 23:30
      const isMorning = timeVal >= 7.5 && timeVal <= 10.5;
      const isAfternoon = timeVal >= 12 && timeVal <= 15.5;
      const isNight = timeVal >= 19 && timeVal <= 23.5;

      if (isMorning || isAfternoon || isNight) {
        setStatus({ open: true, message: 'Open Now — Serving Fresh' });
      } else {
        setStatus({ open: false, message: 'Next Meal Soon' });
      }
    };

    updateStatus();
    const timer = setInterval(updateStatus, 30000); // Check every 30s
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-cream via-red-50 to-amber-50">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[ '🍚', '🥘', '🌶️', '🥗', '🍲', '🫓' ].map((emoji, i) => (
          <div 
            key={i} 
            className="absolute text-4xl animate-float"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '6s'
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="reveal active">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-amber-200">
              <span className="text-amber-500">⭐</span>
              <span className="text-sm font-heading-sc font-medium text-amber-700">Shimoga's Choice</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border text-xs font-bold transition-all duration-500 ${status.open ? 'bg-green-50 border-green-200 text-green-600' : 'bg-red-50 border-red-200 text-red-600'}`}>
              <span className={`w-2 h-2 rounded-full ${status.open ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`}></span>
              {status.message}
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-black text-secondary leading-tight mb-6">
            Authentic South<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">Indian Heritage</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Experience the warmth of home-style cooking in the heart of Shimoga. 
            Healthy, hygienic, and heartwarming meals served daily.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#menu" className="bg-primary text-white px-8 py-4 rounded-full font-heading font-bold shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1">
              🍽️ Explore Menu
            </a>
            <a href="#plans" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-heading font-bold hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
              💰 Monthly Plans
            </a>
          </div>

          <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
            <div className="text-center">
              <span className="text-2xl font-bold text-primary">3,000+</span>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Happy Daily</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <span className="text-2xl font-bold text-primary">4.4★</span>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Google Stars</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <span className="text-2xl font-bold text-primary">24/7</span>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Support</p>
            </div>
          </div>
        </div>

        <div className="reveal active flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl relative z-10 text-center border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-[2rem]" />
              
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse scale-125" />
                <div className="relative w-full h-full rounded-full border-4 border-gray-50 bg-white/80 flex items-center justify-center overflow-visible shadow-inner">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-5xl shadow-2xl z-20 animate-bounce-slow">
                    🍛
                  </div>
                  {[
                    { emoji: '🥘', label: 'Sambar', top: '0', left: '50%' },
                    { emoji: '🍚', label: 'Rice', top: '20%', right: '0' },
                    { emoji: '🥗', label: 'Salad', bottom: '20%', right: '0' },
                    { emoji: '🫓', label: 'Roti', bottom: '0', left: '50%' },
                    { emoji: '🍲', label: 'Rasam', bottom: '20%', left: '0' },
                    { emoji: '🥛', label: 'Curd', top: '20%', left: '0' },
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="absolute w-14 h-14 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-amber-50 hover:scale-125 transition-transform cursor-pointer z-30"
                      style={{ 
                        top: item.top, 
                        bottom: item.bottom, 
                        left: item.left, 
                        right: item.right,
                        transform: item.left === '50%' ? 'translateX(-50%)' : 'none'
                      }}
                    >
                      <span className="text-xl">{item.emoji}</span>
                      <span className="text-[0.5rem] font-bold text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-heading font-bold text-secondary">Signature Thali</h3>
                <div className="flex items-center justify-center gap-2 my-2">
                  <span className="text-4xl font-heading font-black text-primary">₹80</span>
                  <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Unlimited Rice</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Available for Lunch & Dinner</p>
              </div>
            </div>
            
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
