import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Award, ChevronRight } from 'lucide-react';
import { SparklesText } from './ui/sparkles-text';

const Hero: React.FC = () => {
  // 3D Tilt Logic
  const heroVisualRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroVisualRef.current) return;
    
    const rect = heroVisualRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (divided by 25 for subtle effect)
    const rotateX = ((y - centerY) / 25) * -1;
    const rotateY = (x - centerX) / 25;
    
    heroVisualRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (heroVisualRef.current) {
      heroVisualRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section className="relative overflow-hidden -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-8 sm:py-12 lg:py-20">
      <div className="relative z-10 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start w-full lg:max-w-xl"
        >
          {/* Status Badge */}
          <div
            className="inline-flex gap-2 hover:bg-white/60 transition-colors cursor-default text-xs sm:text-sm font-medium text-neutral-600 bg-white/40 border-white/60 border rounded-full mb-6 sm:mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur-sm items-center"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"
              ></span>
              <span
                className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"
              ></span>
            </span>
            Status: Open to Work
          </div>

          <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-neutral-900 tracking-tight font-serif mb-4 sm:mb-6">
            <span className=" text-pink-500">IT Student.</span><br />
            Tech Enthusiast.<br />
            <SparklesText 
              text="Future Pro."
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-serif inline-block"
              colors={{ first: '#ff69b4', second: '#ff1493' }}
              sparklesCount={8}
            />
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-500 font-medium mb-8 sm:mb-10 leading-relaxed max-w-md">
            Bachelor of Science in Information Technology – 3rd Year at PLV. Dedicated to IT operations, system maintenance, and support.
          </p>

          <div className="flex flex-col gap-4 mb-8 sm:mb-12 w-full sm:w-auto">
            <a href="#about" className="shiny-cta group no-underline inline-flex justify-center sm:justify-start">
              <span>
                View Profile
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Tilt Image */}
        <div
            className="relative w-full h-[350px] sm:h-[400px] lg:h-[600px] flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
              ref={heroVisualRef}
              className="relative w-full h-full flex items-center justify-center tilt-card cursor-pointer group"
            >
              {/* Glow Effect - Rounded blur */}
              <div
                className="absolute inset-8 sm:inset-6 lg:inset-10 bg-gradient-to-tr from-pink-300/50 via-white/20 to-pink-200/40 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition duration-1000"
              ></div>

              {/* Main Glass Card */}
              <div
                className="glass flex flex-col transition-all duration-300 group-hover:drop-shadow-2xl w-[280px] sm:w-[340px] lg:w-[380px] h-[340px] sm:h-[400px] lg:h-[520px] border-white/60 border rounded-[2.5rem] p-3 sm:p-4 relative items-center justify-between"
              >
                {/* Top Badge */}
                {/* <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-20">
                  <div className="px-2 sm:px-3 py-1 rounded-full bg-white/80 backdrop-blur text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-neutral-900 shadow-sm border border-white/50">
                    OJT 2024
                  </div>
                  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm text-pink-500 text-sm">
                     <span className="font-serif font-bold italic">S</span>
                  </div>
                </div> */}

                {/* Main Image */}
                <div className="absolute inset-2 rounded-[2rem] overflow-hidden">
                  <div className="bg-gradient-to-t from-pink-900/20 via-transparent to-transparent absolute inset-0 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Samantha Jana Medina"
                    className="transform group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover scale-105"
                  />
                  
                  {/* Name overlay on image */}
                   <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 z-20 text-white">
                      <p className="font-serif text-sm sm:text-xl">Samantha Medina</p>
                      <p className="text-xs text-white/80 font-medium tracking-wide">STUDENT NO. 22-2928</p>
                   </div>
                </div>

                {/* Floating Card 2: Status */}
                <div className="absolute -left-6 sm:-left-12 bottom-20 sm:bottom-32 glass flex gap-3 transition-transform duration-300 group-hover:-translate-x-2 animate-float-delayed rounded-2xl p-2 sm:p-3 shadow-lg items-center">
                  <div className="flex -space-x-2">
                    <div className="flex text-[10px] font-bold text-neutral-700 w-7 sm:w-8 h-7 sm:h-8 bg-pink-100 border-white border-2 rounded-full items-center justify-center">
                       <Award className="w-3 sm:w-4 h-3 sm:h-4 text-pink-500" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Dean's Lister</p>
                    <div className="flex gap-1 items-center mt-0.5">
                       <div className="h-1 w-12 bg-pink-200 rounded-full overflow-hidden">
                          <div className="h-full w-[90%] bg-pink-500 rounded-full"></div>
                       </div>
                       <span className="text-[9px] text-pink-500 font-bold">1.25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;