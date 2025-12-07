import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Award, ChevronRight } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-white -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
       {/* Parallax Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-[30rem] h-[30rem] rounded-full bg-sand-200 top-[-5rem] left-[-5rem] mix-blend-multiply opacity-50 blur-[80px]"
        ></div>
        <div
          className="absolute w-[40rem] h-[40rem] rounded-full bg-mint-200 bottom-0 right-[-10rem] mix-blend-multiply opacity-50 blur-[80px]"
        ></div>
        <div
          className="absolute w-[25rem] h-[25rem] rounded-full bg-blue-100 top-[40%] left-[30%] mix-blend-multiply opacity-30 blur-[80px]"
        ></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 sm:py-20 py-12 items-center min-h-[90vh]">
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start max-w-xl"
        >
          {/* Status Badge */}
          <div
            className="inline-flex gap-2 hover:bg-white/60 transition-colors cursor-default text-xs font-medium text-neutral-600 bg-white/40 border-white/60 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur-sm items-center"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand-400 opacity-75"
              ></span>
              <span
                className="relative inline-flex rounded-full h-2 w-2 bg-sand-500"
              ></span>
            </span>
            Status: Open to Work
          </div>

          <h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-bold text-neutral-900 tracking-tight font-serif mb-6">
            IT Student.<br />
            Tech Enthusiast.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 to-sand-600">
              Future Pro.
            </span>
          </h1>
          
          <p className="text-lg text-neutral-500 font-medium mb-10 leading-relaxed max-w-md">
            Bachelor of Science in Information Technology – 3rd Year at PLV. Dedicated to IT operations, system maintenance, and support.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
            <a href="#about" className="shiny-cta group no-underline inline-block">
              <span>
                View Profile
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a href="#contact" className="text-sm font-semibold text-neutral-600 hover:text-black transition-colors">
                Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Tilt Image */}
        <div
            className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
              ref={heroVisualRef}
              className="relative w-full h-full flex items-center justify-center tilt-card cursor-pointer group"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-10 bg-gradient-to-tr from-sand-200 via-white to-mint-200 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition duration-1000"
              ></div>

              {/* Main Glass Card */}
              <div
                className="glass flex flex-col transition-all duration-300 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] w-[320px] sm:w-[380px] h-[460px] sm:h-[520px] border-white/60 border rounded-[2.5rem] p-4 relative shadow-2xl items-center justify-between"
              >
                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                  <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-[10px] font-bold tracking-widest uppercase text-neutral-900 shadow-sm border border-white/50">
                    OJT 2024
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm text-sand-500">
                     <span className="font-serif font-bold italic">S</span>
                  </div>
                </div>

                {/* Main Image */}
                <div className="absolute inset-2 rounded-[2rem] overflow-hidden">
                  <div className="bg-gradient-to-t from-sand-900/40 via-transparent to-transparent absolute inset-0 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Samantha Jana Medina"
                    className="transform group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover scale-105"
                  />
                  
                  {/* Name overlay on image */}
                   <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <p className="font-serif text-xl">Samantha Medina</p>
                      <p className="text-xs text-white/80 font-medium tracking-wide">STUDENT NO. 22-2928</p>
                   </div>
                </div>

                {/* Floating Card 1: IT Role */}
                <div className="absolute -right-8 sm:-right-12 top-24 glass p-3 rounded-2xl flex items-center gap-3 w-52 sm:w-56 transition-transform duration-300 group-hover:translate-x-2 shadow-lg animate-float">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shrink-0 border border-neutral-100">
                    <Server className="w-5 h-5 sm:w-6 sm:h-6 text-sand-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">System Admin</p>
                    <p className="text-[10px] text-neutral-500">Network & Hardware</p>
                  </div>
                </div>

                {/* Floating Card 2: Status */}
                <div className="absolute -left-8 sm:-left-12 bottom-24 sm:bottom-32 glass flex gap-3 transition-transform duration-300 group-hover:-translate-x-2 animate-float-delayed rounded-2xl p-3 shadow-lg items-center">
                  <div className="flex -space-x-2">
                    <div className="flex text-[10px] font-bold text-neutral-700 w-8 h-8 bg-sand-100 border-white border-2 rounded-full items-center justify-center">
                       <Award className="w-4 h-4 text-sand-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Dean's Lister</p>
                    <div className="flex gap-1 items-center mt-0.5">
                       <div className="h-1 w-12 bg-sand-200 rounded-full overflow-hidden">
                          <div className="h-full w-[90%] bg-sand-500 rounded-full"></div>
                       </div>
                       <span className="text-[9px] text-sand-600 font-bold">1.25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Floating Service Rail - Hidden on Mobile/Tablet (lg:flex) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-2xl"
      >
          <div className="bg-black h-16 flex items-center justify-between shadow-2xl rounded-sm">
             <a href="#internship" className="flex-1 h-full flex items-center justify-center text-white font-medium text-sm hover:text-white/70 transition-colors">Internship</a>
             <div className="w-[1px] h-4 bg-white/25"></div>
             <a href="#outputs" className="flex-1 h-full flex items-center justify-center text-white font-medium text-sm hover:text-white/70 transition-colors">Outputs</a>
             <div className="w-[1px] h-4 bg-white/25"></div>
             <a href="#contact" className="flex-1 h-full flex items-center justify-center text-white font-medium text-sm hover:text-white/70 transition-colors">Contact</a>
          </div>
      </motion.div>
    </section>
  );
};

export default Hero;