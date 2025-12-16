import React from 'react';
import { motion } from 'framer-motion';

const VideoIntroduction: React.FC = () => {
  return (
    <section className="sm:py-24 pt-16 pb-16 border-t border-black/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="mb-6">
          <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
            <span>INTRODUCTION</span>
            <span>VIDEO</span>
          </div>
          <div className="mt-2 h-px w-full bg-black"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
          <div className="lg:col-span-7">
            <h3 className="text-[32px] text-pink-500 sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">
              Video Intro.
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">
              A brief video introduction showcasing my background, communication skills, and passion for Information Technology.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video ring-1 ring-black/10 group"
      >
        <div className="absolute inset-0 z-0">
             {/* Replace the src below with your actual Vimeo embed URL */}
             <iframe 
                src="https://player.vimeo.com/video/1133695763?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                className="absolute top-0 left-0 w-full h-full"
                title="Introduction Video"
             ></iframe>
        </div>
        
        {/* Decorative overlay usually hidden when playing, but useful for style */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
      </motion.div>
      
      <script src="https://player.vimeo.com/api/player.js"></script>
    </section>
  );
};

export default VideoIntroduction;