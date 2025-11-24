
import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 lg:pt-0 bg-surface overflow-hidden scroll-mt-20">
      <div className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-8 fade-in-up z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-primary text-xs font-bold uppercase tracking-widest shadow-sm">
                <Star size={12} className="text-accent fill-accent" />
                <span>Voted #1 in San Francisco</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-medium text-primary leading-[1.1]">
                Precision Care for <br/>
                <span className="italic font-light text-textMuted">Lasting Smiles</span>
              </h1>
              
              <p className="text-lg text-textMuted max-w-lg leading-relaxed font-light border-l-2 border-accent pl-6">
                Experience the synergy of advanced technology and compassionate care. From routine hygiene to complex restoration, your health is our priority.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-primary rounded-sm hover:bg-primaryLight shadow-lg hover:shadow-xl uppercase tracking-wider">
                  Request Appointment
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-primary transition-all bg-transparent border border-primary rounded-sm hover:bg-slate-50 uppercase tracking-wider group">
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-6 text-textMuted text-sm">
                 <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Accepting New Patients</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Same-Day Emergency</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>0% Financing Available</span>
                 </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative lg:h-screen min-h-[500px] w-full flex items-center">
               {/* Background abstract shapes */}
               <div className="absolute inset-0 bg-primary/5 lg:bg-transparent -z-10 lg:-right-full lg:w-[200%]"></div>
               <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
               
               <div className="relative w-full max-w-lg lg:max-w-none h-[500px] lg:h-[75vh] mt-10 lg:mt-0">
                  
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                    alt="Modern Dental Technology" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl lg:rounded-none lg:rounded-bl-[5rem] animate-[float_6s_ease-in-out_infinite]"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 lg:bottom-20 lg:-left-12 bg-white p-6 shadow-xl rounded-lg max-w-xs border-l-4 border-accent hidden sm:block animate-[float_8s_ease-in-out_infinite_reverse]">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                       <p className="font-bold text-xs uppercase tracking-wider text-primary">Live Availability</p>
                    </div>
                    <p className="font-serif text-lg text-primary">Next opening: <span className="italic">Today at 2:00 PM</span></p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Affiliations Strip */}
      <div className="border-t border-slate-200 bg-white py-6 z-20 relative">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 opacity-40 hover:opacity-80 transition-opacity cursor-default select-none">
            <span className="font-serif font-bold text-xl text-primary tracking-widest">ADA</span>
            <span className="font-serif font-bold text-xl text-primary tracking-widest">CDA</span>
            <span className="font-serif font-bold text-xl text-primary tracking-widest">AACD</span>
            <span className="font-serif font-bold text-xl text-primary tracking-widest">Invisalign<span className="text-xs align-top">®</span></span>
            <span className="font-serif font-bold text-xl text-primary tracking-widest">Pankey Institute</span>
         </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};
