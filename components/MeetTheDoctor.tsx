import React from 'react';
import { Award, Scroll, Stethoscope } from 'lucide-react';

export const MeetTheDoctor: React.FC = () => {
  return (
    <section id="doctor" className="py-24 bg-surface relative overflow-hidden scroll-mt-20">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Dr. Isabella Vance" 
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              {/* Name Overlay for Mobile */}
              <div className="absolute bottom-0 left-0 p-6 lg:hidden text-white">
                 <h3 className="text-2xl font-serif">Dr. Isabella Vance</h3>
                 <p className="text-sm opacity-90">D.D.S., F.A.G.D.</p>
              </div>
            </div>
            
            {/* Floating Stats Card - Desktop Only */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded shadow-xl max-w-[200px] hidden lg:block border-t-4 border-accent animate-bounce-slow">
               <p className="font-serif text-4xl text-primary">15+</p>
               <p className="text-xs text-textMuted uppercase tracking-wide mt-1">Years of Clinical Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-8 lg:pl-12 order-1 lg:order-2">
            <div>
               <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Meet The Director</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                 Dr. Isabella Vance, <span className="text-slate-400 italic text-3xl block sm:inline mt-2 sm:mt-0">D.D.S., F.A.G.D.</span>
               </h3>
            </div>

            <p className="text-textMuted text-lg leading-relaxed font-light border-l-2 border-accent pl-6">
              "Dentistry is the perfect intersection of medicine and artistry. My mission is to provide care that not only improves health but restores the confidence to smile without hesitation."
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-6">
               <div className="flex gap-4 items-start group">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Award size={24} strokeWidth={1.5} />
                 </div>
                 <div>
                    <h4 className="font-serif font-medium text-primary text-lg">Board Certified</h4>
                    <p className="text-sm text-textMuted leading-snug mt-1">Diplomate of the American Board of Aesthetic Dentistry.</p>
                 </div>
               </div>
               
               <div className="flex gap-4 items-start group">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Scroll size={24} strokeWidth={1.5} />
                 </div>
                 <div>
                    <h4 className="font-serif font-medium text-primary text-lg">Guest Lecturer</h4>
                    <p className="text-sm text-textMuted leading-snug mt-1">Visiting faculty at UCSF School of Dentistry.</p>
                 </div>
               </div>
               
               <div className="flex gap-4 items-start group">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Stethoscope size={24} strokeWidth={1.5} />
                 </div>
                 <div>
                    <h4 className="font-serif font-medium text-primary text-lg">Holistic Approach</h4>
                    <p className="text-sm text-textMuted leading-snug mt-1">Focusing on the connection between oral health and total body wellness.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};