
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-white text-primary font-heading-sc text-sm rounded-full mb-4 shadow-sm">📍 Visit Us</span>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-secondary mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visit us at either of our two branches in Shimoga or reach out via phone or WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 reveal">
            {[
              { icon: '📍', title: 'Branch 1 — Garden Area', desc: '3rd Cross, Garden Area, near Sanman Hotel, Shimoga, Karnataka 577201' },
              { icon: '📍', title: 'Branch 2 — Tilak Nagar', desc: 'Tilak Nagar, Durgigudi, Shimoga, Karnataka 577201' },
              { icon: '📞', title: 'Phone', desc: '+91 90357 33264' },
              { icon: '🕐', title: 'Operating Hours', desc: 'Monday – Sunday | 7:30 AM – 11:30 PM' },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                <div className="text-3xl shrink-0">{card.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-secondary text-lg mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
            <a 
              href="https://wa.me/919035733264" 
              className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 rounded-2xl font-heading font-bold shadow-lg hover:shadow-green-500/20 transition-all hover:-translate-y-1"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="reveal bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d75.5696592!3d13.9323419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba8d5e52e6f53%3A0xd724074b9e026ca1!2sG%20R%20Mess!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
