import React from 'react';
import { Shield, Sparkles, Microscope, Activity, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Preventative Care',
    description: 'Comprehensive examinations, 3D scanning, and advanced hygiene protocols to maintain long-term oral health.',
    icon: <Shield strokeWidth={1} size={32} />
  },
  {
    id: '2',
    title: 'Aesthetic Dentistry',
    description: 'Bespoke smile makeovers including porcelain veneers, bonding, and professional whitening systems.',
    icon: <Sparkles strokeWidth={1} size={32} />
  },
  {
    id: '3',
    title: 'Restorative Solutions',
    description: 'Biomimetic fillings, crowns, and bridges designed to replicate the strength and beauty of natural teeth.',
    icon: <Microscope strokeWidth={1} size={32} />
  },
  {
    id: '4',
    title: 'Implantology',
    description: 'Computer-guided dental implants providing permanent, stable, and lifelike solutions for missing teeth.',
    icon: <Activity strokeWidth={1} size={32} />
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Our Expertise</h2>
            <p className="text-4xl font-serif text-primary">
              Comprehensive care tailored to your unique physiology.
            </p>
          </div>
          <a href="#contact" className="hidden md:block text-sm font-bold text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
            VIEW FULL MENU
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-lg border border-slate-100 bg-surface hover:bg-primary hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col"
            >
              {/* Hover accent circle */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>

              <div className="mb-8 text-primary group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif font-medium text-primary group-hover:text-white mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-textMuted group-hover:text-slate-300 leading-relaxed text-sm font-light transition-colors duration-300 mb-8 flex-grow">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="#contact" className="text-sm font-bold text-primary border-b border-primary pb-1">
            VIEW FULL MENU
          </a>
        </div>
      </div>
    </section>
  );
};