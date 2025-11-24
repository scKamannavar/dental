import React from 'react';
import { ArrowRight, MoveHorizontal } from 'lucide-react';

interface Transformation {
  id: string;
  patient: string;
  procedure: string;
  beforeImg: string;
  afterImg: string;
}

const transformations: Transformation[] = [
  {
    id: '1',
    patient: 'Michael R.',
    procedure: 'Full Mouth Reconstruction',
    beforeImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    patient: 'Sarah L.',
    procedure: 'Porcelain Veneers',
    beforeImg: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    patient: 'David K.',
    procedure: 'Invisalign® Therapy',
    beforeImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
  }
];

export const SmileGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Real Results</h2>
            <p className="text-4xl font-serif text-primary">
              The Art of Transformation
            </p>
            <p className="mt-4 text-textMuted font-light max-w-lg">
              Hover over the portraits to see the post-treatment results. We believe every smile tells a story of confidence restored.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all">
            VIEW FULL GALLERY <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item) => (
            <div key={item.id} className="group relative h-[450px] overflow-hidden rounded-lg cursor-pointer shadow-lg ring-1 ring-slate-100">
              
              {/* After Image (Bottom Layer) - Initially visible for fallback, but covered by Before */}
              <div className="absolute inset-0">
                <img 
                  src={item.afterImg} 
                  alt={`${item.patient} After`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-sm z-20 shadow-lg">
                  <span className="text-xs font-bold tracking-wider">AFTER</span>
                </div>
              </div>

              {/* Before Image (Top Layer) - Fades out on hover */}
              <div className="absolute inset-0 transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10 bg-white">
                <img 
                  src={item.beforeImg} 
                  alt={`${item.patient} Before`} 
                  className="w-full h-full object-cover grayscale opacity-90" 
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm shadow-sm">
                  <span className="text-xs font-bold text-primary tracking-wider">BEFORE</span>
                </div>

                {/* Interaction Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   {/* This div is just a spacer, real effect is the fade */}
                </div>
                
                <div className="absolute bottom-24 left-0 w-full flex justify-center pointer-events-none">
                    <div className="bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs uppercase tracking-widest">
                        <MoveHorizontal size={14} />
                        Hover to Reveal
                    </div>
                </div>
              </div>

              {/* Content Overlay (Always on top) */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-white mb-1">{item.patient}</h3>
                <p className="text-slate-300 text-sm font-light">{item.procedure}</p>
              </div>
            </div>
          ))}
        </div>
        
         <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-sm font-bold text-primary border-b border-primary pb-1">
            VIEW FULL GALLERY <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};