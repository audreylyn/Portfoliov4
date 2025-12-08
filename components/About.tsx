import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

// Resolve PDF asset path via import.meta so Vite/bundler rewrites it correctly
const resumeUrl = new URL('../lib/resume.pdf', import.meta.url).href;

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="sm:py-24 pt-16 pb-16">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-12"
      >
        <div className="text-center mb-12">
          {/* Top meta row */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
              <span>PROFILE</span>
              <span>(01)</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          {/* Header layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <h3 className="text-[40px]  text-pink-500 sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] font-semibold tracking-tight uppercase">
                About Me.
              </h3>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-black/70">
                <p>
                  Hello! I’m Samantha Jana Medina, an IT student from Pamantasan ng Lungsod ng Valenzuela. I’m dedicated to applying my technical knowledge to real-world IT operations, system maintenance, and computer laboratory support. 
                </p>
                <p>
                  This portfolio showcases my OJT experience under the PLV IT Department, highlighting my tasks, learning journey, and actual outputs.
                </p>
              </div>
              
                <div className="mt-8 flex gap-4">
                  <a
                   href={resumeUrl}
                   download
                   aria-label="Download resume PDF"
                   className="group inline-flex items-center font-medium text-[17px] px-[1.5em] py-[0.8em] pl-[1.2em] text-white bg-black border-2 border-black rounded-full shadow-[0_0_0_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white hover:shadow-[0_0.5em_1.5em_-0.5em_rgba(0,0,0,0.5)] active:shadow-[0_0.3em_1em_-0.5em_rgba(0,0,0,0.5)] active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2 w-5 h-5 fill-current" aria-hidden>
                     <path fill="none" d="M0 0h24v24H0z"></path>
                     <path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
                    </svg>
                    <span>Download Resume</span>
                  </a>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-5">
               <div className="bg-gray-50 rounded-2xl p-8 ring-1 ring-black/5">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5" /> Skills Summary
                  </h4>
                  
                  <div className="space-y-8">
                    <div>
                      <h5 className="font-semibold text-sm uppercase tracking-wide text-brand-accent mb-3">Soft Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Communication', 'Problem-solving', 'Adaptability', 'Collaboration', 'Documentation', 'Task management'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-white border border-black/10 rounded-full text-sm">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-sm uppercase tracking-wide text-brand-accent mb-3">Technical Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Hardware diagnostics', 'Software installation', 'System cloning & imaging', 'Backup & restoration', 'IT asset inventory', 'Network mapping', 'SQL', 'Java', 'C#', 'HTML/CSS', 'Unity', 'Figma', 'MS Office'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-white border border-black/10 rounded-full text-sm">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;