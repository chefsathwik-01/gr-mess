
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants.tsx';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'breakfast' | 'lunch' | 'dinner'>('breakfast');
  const [search, setSearch] = useState('');

  const categories = [
    { id: 'breakfast', label: '🌅 Breakfast' },
    { id: 'lunch', label: '☀️ Lunch' },
    { id: 'dinner', label: '🌙 Dinner' },
  ];

  const filteredItems = MENU_ITEMS.filter(item => 
    item.category === activeTab && 
    (item.name.toLowerCase().includes(search.toLowerCase()) || 
     item.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1 bg-red-50 text-primary font-heading-sc text-sm rounded-full mb-4">🍽️ Our Menu</span>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-secondary mb-4">
            What's Cooking <span className="text-primary">Today</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Fresh meals prepared daily. Filter by category or search for your favorites.
          </p>
        </div>

        {/* Search & Tabs */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative reveal">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search for dishes (e.g. Masala Dosa, Paneer...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-gray-50 bg-gray-50/50 focus:border-primary/20 focus:bg-white transition-all outline-none font-medium shadow-sm"
            />
          </div>

          <div className="flex justify-center gap-2 flex-wrap reveal">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-8 py-3 rounded-full font-heading-sc text-sm transition-all ${
                  activeTab === cat.id 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-cream text-gray-500 hover:text-primary hover:bg-red-100/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto min-h-[400px]">
          {filteredItems.length > 0 ? filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="reveal p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-3xl shrink-0 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-secondary group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    {item.isVeg && <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold">🟢 VEG</span>}
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-heading font-black text-primary">{item.price}</span>
                    {item.tag && (
                      <span className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-bold">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center">
              <span className="text-6xl mb-4 block">🍳</span>
              <p className="text-gray-400 font-medium">Oops! We couldn't find "{search}" on the menu today.</p>
              <button onClick={() => setSearch('')} className="text-primary font-bold mt-2 underline">Clear Search</button>
            </div>
          )}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-sm italic text-gray-400">
            📌 Menu changes daily. Contact us for today's special dishes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
