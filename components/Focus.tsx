import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Activity, Server, Shield, Wifi, Database, X, ZoomIn } from 'lucide-react';

const highlights = [
  {
    year: "2024",
    title: "Network Operations Center",
    category: "Infrastructure",
    description: "Monitoring and maintaining university-wide network connectivity and server health.",
    features: [
      { icon: Wifi, label: "Connectivity" },
      { icon: Shield, label: "Security" },
      { icon: Activity, label: "Monitoring" }
    ],
    tags: ["Network Map", "Cabling", "VLANs"],
    images: [
      "https://cdn.midjourney.com/97f0525e-4b5b-46e1-a1ed-8ceb2043154b/0_0.png?w=800&q=80",
      "https://cdn.midjourney.com/35fb956a-cd8d-47f0-bc6e-414eedfef338/0_0.png?w=800&q=80",
      "https://cdn.midjourney.com/700e1a9e-8f1b-4d83-b511-21677612b8a6/0_0.png?w=800&q=80",
      "https://cdn.midjourney.com/700e1a9e-8f1b-4d83-b511-21677612b8a6/0_0.png?w=800&q=80"
      
    ]
  },
  {
    year: "2024",
    title: "System Administration",
    category: "Maintenance",
    description: "Hardware diagnostics, system imaging, and automated deployment for laboratory units.",
    features: [
      { icon: Server, label: "Deployment" },
      { icon: Database, label: "Assets" },
      { icon: Activity, label: "Performance" }
    ],
    tags: ["Hardware", "Imaging", "Support"],
    images: [
      "https://cdn.midjourney.com/05ee647a-401b-40dd-985c-f81f5fcc0ac4/0_0.png?w=800&q=80",
      "https://cdn.midjourney.com/7519434b-08d7-48f3-baf1-6ee3ec8ab7b0/0_0.png?w=800&q=80",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    ]
  }
];

interface HighlightCardProps {
  item: typeof highlights[0];
  onImageClick: (img: string) => void;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ item, onImageClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.6;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-gray-50 border-black/5 border rounded-3xl p-4"
    >
      {/* Info Card */}
      <div className="group relative overflow-hidden p-5 sm:p-6 bg-white border-black/5 border rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 1px)`, backgroundSize: '12px 12px' }}>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 px-2.5 py-1 text-xs font-medium text-black/70">
              {item.year}
            </span>
            <p className="text-sm text-black/60 font-medium">{item.category}</p>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-black/60 mb-6 leading-relaxed">
            {item.description}
          </p>
          
          <ul className="grid grid-cols-1 gap-3 mb-6">
            {item.features.map((feat, i) => (
              <li key={i} className="inline-flex items-center gap-3 text-sm text-black/70">
                <span className="inline-flex w-6 h-6 items-center justify-center ring-1 ring-black/10 bg-black/5 rounded-full text-black/60">
                  <feat.icon size={12} />
                </span>
                {feat.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tags.map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2.5 py-1 text-xs text-black/60 ring-1 ring-black/10 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery Slider */}
      <div className="lg:col-span-3 relative group/slider overflow-hidden rounded-2xl bg-white border border-black/5">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory h-full p-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {item.images.map((img, idx) => (
            <div 
              key={idx} 
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[calc(33.333%-11px)] relative snap-center h-64 lg:h-auto rounded-xl overflow-hidden bg-gray-100 cursor-pointer group/image"
              onClick={() => onImageClick(img)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover/image:opacity-100 duration-300">
                <div className="bg-white/90 rounded-full p-2 shadow-lg transform scale-90 group-hover/image:scale-100 transition-transform">
                  <ZoomIn className="text-black w-5 h-5" />
                </div>
              </div>
              <img 
                src={img} 
                alt={`${item.title} ${idx + 1}`} 
                className="w-full h-full object-cover opacity-90 group-hover/image:opacity-100 transition duration-500 group-hover/image:scale-105" 
              />
            </div>
          ))}
        </div>
        
        {/* Controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/slider:opacity-100 transition duration-300 z-20">
          <button 
            onClick={() => scroll('left')}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-black/10 flex items-center justify-center text-black shadow-lg hover:bg-white transition hover:scale-105"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-black/10 flex items-center justify-center text-black shadow-lg hover:bg-white transition hover:scale-105"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const InternshipHighlights: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="sm:py-24 pt-16 pb-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="mb-6">
          <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
            <span>GALLERY</span>
            <span>(05)</span>
          </div>
          <div className="mt-2 h-px w-full bg-black"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
          <div className="lg:col-span-7">
            <h3 className="text-[32px] text-pink-500 sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] font-semibold tracking-tight uppercase">
              Internship Highlights.
            </h3>
          </div>

          <div className="lg:col-span-5">
            <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto ml-0 mb-6">
              Visual snapshots representing the technical environment, tools used, and key outputs delivered during the internship.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 space-y-8">
        {highlights.map((item, index) => (
          <HighlightCard 
            key={index} 
            item={item} 
            onImageClick={setSelectedImage}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
                onClick={(e) => {
                   e.stopPropagation();
                   setSelectedImage(null);
                }}
            >
                <X size={24} />
            </motion.button>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage} 
              alt="Highlight full view" 
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InternshipHighlights;