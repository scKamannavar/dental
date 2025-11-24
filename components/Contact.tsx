
import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Visit Us</h2>
            <h3 className="text-4xl font-serif text-primary">Start Your Journey</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 shadow-2xl shadow-slate-200 rounded-lg overflow-hidden">
          
          {/* Info Side */}
          <div className="bg-primary text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div>
                <h2 className="text-3xl font-serif mb-2 relative z-10">Studio Information</h2>
                <p className="text-slate-300 font-light mb-12 relative z-10">Experience dentistry reimagined in our state-of-the-art facility.</p>
                
                <div className="space-y-10 relative z-10">
                <div className="flex gap-6">
                    <MapPin className="text-accent shrink-0 mt-1" size={20} />
                    <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Location</h3>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=123+Smile+Boulevard+San+Francisco" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-300 leading-relaxed font-light hover:text-accent transition-colors block"
                    >
                      123 Smile Boulevard, Suite 400<br/>San Francisco, CA 94105
                    </a>
                    </div>
                </div>

                <div className="flex gap-6">
                    <Phone className="text-accent shrink-0 mt-1" size={20} />
                    <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Contact</h3>
                    <div className="text-slate-300 leading-relaxed font-light flex flex-col">
                        <a href="tel:+14155550123" className="hover:text-accent transition-colors">(415) 555-0123</a>
                        <a href="mailto:concierge@luminadental.com" className="hover:text-accent transition-colors">concierge@luminadental.com</a>
                    </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <Clock className="text-accent shrink-0 mt-1" size={20} />
                    <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Hours</h3>
                    <div className="text-slate-300 text-sm grid grid-cols-1 gap-1 font-light">
                        <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Map Visual Placeholder - Now Clickable */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=123+Smile+Boulevard+San+Francisco" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 relative rounded-md overflow-hidden h-48 w-full border border-white/10 group cursor-pointer block"
            >
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Map Location" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg group-hover:bg-accent group-hover:text-primary transition-colors text-white">
                        Get Directions <ArrowUpRight size={14} />
                    </div>
                </div>
            </a>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 lg:p-16">
            <h3 className="text-2xl font-serif text-primary mb-8">Request Consultation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-textMuted tracking-wider">First Name</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-textMuted tracking-wider">Last Name</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-textMuted tracking-wider">Email Address</label>
                <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-textMuted tracking-wider">Phone</label>
                <input type="tel" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-textMuted tracking-wider">Service Interest</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-textMain appearance-none cursor-pointer">
                  <option>General Consultation</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Invisalign / Orthodontics</option>
                  <option>Implant Restoration</option>
                  <option>Hygiene / Cleaning</option>
                </select>
              </div>

              <button type="submit" className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primaryLight transition-colors mt-4 shadow-lg hover:shadow-xl">
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
