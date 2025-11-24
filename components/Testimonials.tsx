import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: "Sarah Jenkins",
    text: "The level of care is simply unmatched. Dr. Smith explained every step of my veneer procedure, and the results are absolutely flawless.",
    role: "Architect",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    id: '2',
    name: "James Wilson",
    text: "I appreciate the punctuality and professionalism. This is a practice that respects your time and delivers executive-level dental care.",
    role: "Financial Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    id: '3',
    name: "Emily Rodriguez",
    text: "Lumina has transformed my perception of dentistry. The environment is calming, and the staff treats you with genuine warmth and dignity.",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Patient Stories</h2>
          <h3 className="text-4xl font-serif text-primary">
            Trusted by the community
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-8 right-8 text-slate-100 fill-slate-50" size={48} />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                    />
                    <div>
                        <p className="font-serif text-lg text-primary">{t.name}</p>
                        <p className="text-xs font-bold text-textMuted uppercase tracking-wider">{t.role}</p>
                    </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic font-light">"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};