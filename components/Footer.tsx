
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🍛</span>
              <span className="text-2xl font-heading font-black text-white">
                G R <span className="text-primary">Mess</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Shimoga's most loved home-style South Indian mess. Serving fresh, delicious meals every day since years.
            </p>
            <div className="flex gap-4">
              {[ '💬', '📞', '📍' ].map((icon, i) => (
                <div key={i} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#menu" className="hover:text-primary">Menu</a></li>
              <li><a href="#plans" className="hover:text-primary">Meal Plans</a></li>
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#reviews" className="hover:text-primary">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6">Our Branches</h4>
            <ul className="space-y-3 text-sm">
              <li>📍 Garden Area Branch</li>
              <li>📍 Tilak Nagar Branch</li>
              <li>📞 +91 90357 33264</li>
              <li>🕐 7:30 AM – 11:30 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6">Today's Timing</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span>🌅 Breakfast:</span> <span className="text-cream">7:30 – 10:30 AM</span></li>
              <li className="flex justify-between"><span>☀️ Lunch:</span> <span className="text-cream">12:00 – 3:30 PM</span></li>
              <li className="flex justify-between"><span>🌙 Dinner:</span> <span className="text-cream">7:00 – 11:30 PM</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-center text-xs text-gray-600">
          <p>© 2026 G R Mess, Shimoga. All rights reserved. Made with ❤️ for our customers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
