
import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Send, Phone, MapPin, Clock, Info } from 'lucide-react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SmileGallery } from './components/SmileGallery';
import { MeetTheDoctor } from './components/MeetTheDoctor';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { DentalAssistant } from './components/DentalAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Remove the '#' to get the ID
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset for the fixed header (Nav + Ticker approx 120px)
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Optional: Update URL without jump
      window.history.pushState({}, '', href);
    }
  };

  const navLinks = [
    { name: 'Practice', href: '#home' },
    { name: 'Treatments', href: '#services' },
    { name: 'Director', href: '#doctor' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Stories', href: '#testimonials' },
    { name: 'Visit Us', href: '#contact' },
  ];

  const footerQuickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Treatments', href: '#services' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Our Director', href: '#doctor' },
    { name: 'Book Now', href: '#contact' },
  ];

  const footerTreatmentLinks = [
    { name: 'Cosmetic Dentistry', href: '#services' },
    { name: 'Dental Implants', href: '#services' },
    { name: 'Invisalign®', href: '#services' },
    { name: 'General Hygiene', href: '#services' },
    { name: 'Emergency Care', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Top News Ticker */}
      <div className="fixed top-0 left-0 w-full h-10 bg-primary z-[60] flex items-center overflow-hidden border-b border-white/10 shadow-md">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 text-white text-xs font-medium tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            <span>Concierge: (415) 555-0123</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            <span>123 Smile Blvd, San Francisco, CA 94105</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-accent" />
            <span>Mon-Fri 8am-6pm • Sat 9am-2pm</span>
          </div>
          <div className="flex items-center gap-2">
            <Info size={14} className="text-accent" />
            <span>Accepting New Patients for {new Date().getFullYear()}</span>
          </div>
           <div className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            <span>Concierge: (415) 555-0123</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            <span>123 Smile Blvd, San Francisco, CA 94105</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-accent" />
            <span>Mon-Fri 8am-6pm • Sat 9am-2pm</span>
          </div>
          <div className="flex items-center gap-2">
            <Info size={14} className="text-accent" />
            <span>Accepting New Patients for {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 top-10 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-4' : 'bg-white py-6 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm transition-transform group-hover:rotate-45 duration-500">
               <span className="text-accent font-serif text-xl font-bold transition-transform group-hover:-rotate-45 duration-500">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-primary leading-none tracking-wide">Lumina</span>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-textMuted font-semibold group-hover:text-accent transition-colors">Dental Studio</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-bold text-textMain hover:text-primary hover:text-accent transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-3 bg-primary text-white text-xs font-bold rounded-sm hover:bg-primaryLight transition-colors shadow-lg shadow-primary/20 uppercase tracking-widest"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-primary p-2 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`xl:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          <div className="flex flex-col p-6 space-y-4 h-screen">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-serif font-medium text-primary py-3 border-b border-slate-50 flex justify-between items-center group"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            ))}
             <a 
              href="#contact"
              className="mt-8 w-full text-center px-5 py-4 bg-primary text-white text-base font-bold rounded-sm uppercase tracking-widest"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <MeetTheDoctor />
        <SmileGallery />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden">
        {/* "Smile Curve" Top Border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-4">
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="flex items-center gap-2 group mb-6"
                >
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:rotate-12">
                        <span className="text-primary font-serif text-3xl font-bold">L</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-3xl font-bold text-white leading-none tracking-wide">Lumina</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold group-hover:text-accent transition-colors">Dental Studio</span>
                    </div>
                </a>
               <p className="mt-6 text-slate-300 leading-relaxed text-base font-light pr-8">
                 Crafting confident smiles through the convergence of art, science, and technology. Experience dentistry that puts you first.
               </p>
               
               {/* Social Icons */}
               <div className="flex gap-4 mt-8">
                   {socialLinks.map((social, i) => (
                     <a 
                        key={i} 
                        href={social.href}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:border-accent hover:text-primary hover:-translate-y-1 transition-all duration-300 group"
                     >
                       <social.icon size={20} />
                     </a>
                   ))}
               </div>
            </div>
            
            {/* Links Column 1 */}
            <div className="lg:col-span-2">
              <h4 className="font-serif text-xl mb-8 text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-accent"></span>
              </h4>
              <ul className="space-y-4 text-slate-300 text-base font-light">
                {footerQuickLinks.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="group flex items-center gap-2 hover:text-accent transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100">→</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Links Column 2 */}
            <div className="lg:col-span-3">
              <h4 className="font-serif text-xl mb-8 text-white relative inline-block">
                Treatments
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-accent"></span>
              </h4>
              <ul className="space-y-4 text-slate-300 text-base font-light">
                {footerTreatmentLinks.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="group flex items-center gap-2 hover:text-accent transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100">→</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3">
              <h4 className="font-serif text-xl mb-8 text-white relative inline-block">
                Join Our Community
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-accent"></span>
              </h4>
              <p className="text-base text-slate-300 font-light mb-6">
                Subscribe for oral health tips and exclusive aesthetic offers.
              </p>
              <form className="relative mb-8" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-base text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 bottom-1 bg-accent text-primary p-2 rounded-sm hover:bg-white transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
              
              {/* Interactive Smile Strip */}
              <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="group/tooth relative cursor-pointer transform transition-transform hover:-translate-y-2 duration-300">
                    <div className="text-2xl grayscale opacity-70 group-hover/tooth:grayscale-0 group-hover/tooth:opacity-100 transition-all duration-300 transform group-hover/tooth:scale-125 filter drop-shadow-lg">
                        🦷
                    </div>
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover/tooth:opacity-100 transition-opacity duration-300 delay-75">
                       <div className="w-1 h-1 bg-accent rounded-full animate-ping"></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2 italic">Tap a tooth to make it smile!</p>

            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-light">
            <p>© {new Date().getFullYear()} Lumina Dental Studio. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-8">
                <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors relative group cursor-pointer">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors relative group cursor-pointer">
                  Terms of Service
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors relative group cursor-pointer">
                  Accessibility
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                </button>
            </div>
          </div>
        </div>
      </footer>

      <DentalAssistant />
    </div>
  );
};

export default App;
