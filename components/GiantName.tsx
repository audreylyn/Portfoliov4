import React from 'react';
import { motion } from 'framer-motion';
import { SparklesText } from './ui/sparkles-text';

const GiantName: React.FC = () => {
  return (
    <section className="relative sm:py-12 lg:py-16 pt-10 pb-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute right-1 sm:right-2 -top-3 sm:-top-1 z-10">
          <SparklesText 
            text="OJT PORTFOLIO" 
            className="sm:text-6xl text-4xl font-semibold tracking-tight text-black/10 sm:text-black"
            colors={{ first: '#fa70fa', second: '#9E7AFF' }}
            sparklesCount={8}
          />
        </div>

        <div className="overflow-hidden">
          <h2 
            className="leading-[0.9] select-none font-semibold tracking-tight text-center"
            style={{ fontSize: 'clamp(40px, 12vw, 180px)' }}
          >
            SAMANTHA
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default GiantName;