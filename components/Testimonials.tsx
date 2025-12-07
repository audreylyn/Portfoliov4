import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, BookOpen } from 'lucide-react';

const LearningJourney: React.FC = () => {
  return (
    <section className="sm:py-24 pt-16 pb-16">
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
              <span>JOURNEY</span>
              <span>(04)</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
            <div className="lg:col-span-7">
              <h3 className="text-[32px] text-pink-500 sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">
                Learning Experience. 
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">
                A structured timeline of activities and learning outcomes achieved throughout the internship program.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10">
        {/* Card 1: Learning Aims */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden text-white bg-black p-8"
        >
          <Target className="w-8 h-8 text-brand-accent mb-6" />
          <h4 className="text-xl font-semibold mb-4 text-white">Learning Aims</h4>
          <ul className="space-y-3 text-white/80 text-sm list-disc pl-4">
             <li>Develop strong technical skills in hardware diagnostics.</li>
             <li>Understand IT asset inventory procedures.</li>
             <li>Enhance problem-solving through real technical issues.</li>
             <li>Gain experience in network infrastructure mapping.</li>
          </ul>
        </motion.div>

        {/* Card 2: Opportunities */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden text-black bg-white p-8"
        >
           <Lightbulb className="w-8 h-8 text-black mb-6" />
           <h4 className="text-xl font-semibold mb-4">Opportunities</h4>
           <ul className="space-y-3 text-black/70 text-sm list-disc pl-4">
             <li>Maintain and upgrade laboratory computer systems.</li>
             <li>Participate in PLV’s computer asset monitoring project.</li>
             <li>Engage in cloning and imaging tasks.</li>
             <li>Support troubleshooting across different buildings.</li>
          </ul>
        </motion.div>

        {/* Card 3: Experience Range */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="relative overflow-hidden text-white bg-black p-8"
        >
          <BookOpen className="w-8 h-8 text-brand-accent mb-6" />
          <h4 className="text-xl font-semibold mb-4">Structure</h4>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Direct supervision by IT staff and Site Internship Supervisor with hands-on mentoring and guidance.
          </p>
          <div className="text-xs uppercase tracking-wider font-semibold text-brand-accent">
            Progressive Skill Development
          </div>
        </motion.div>

        {/* Timeline Row */}
        <div className="lg:col-span-3 border-t border-black/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {[
              { time: "Week 1–2", label: "Orientation & Inventory" },
              { time: "Week 3–6", label: "Diagnostics & Networking" },
              { time: "Week 7–10", label: "System Imaging & Finalization" }
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className={`p-6 bg-black text-white ${i < 2 ? 'sm:border-r border-white/10' : ''}`}
              >
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 text-brand-accent">{metric.time}</div>
                <div className="text-sm text-white/70">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;