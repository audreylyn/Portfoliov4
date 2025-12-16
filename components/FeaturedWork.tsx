import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, X, Calendar, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  details?: string[];
}

const projects: Project[] = [
  {
    title: "Asset Inventory & Documentation",
    category: "Management",
    description: "Conducted comprehensive inventory of university computer and monitor assets, including photo documentation and asset coding.",
    tags: ["Asset Management", "Documentation", "Excel", "Inventory"],
    image: "/images/img1.jpg",
    details: [
      "Cataloged over 200+ IT assets across campus departments",
      "Standardized naming conventions for easier tracking",
      "Created digital backup records in cloud storage",
      "Identified and reported obsolete equipment for disposal"
    ]
  },
  {
    title: "Hardware Diagnostics",
    category: "Maintenance",
    description: "Performed rigorous testing on hardware components including RAM modules, monitors, and motherboards to isolate faulty units.",
    tags: ["Hardware Repair", "Diagnostics", "System Testing"],
    image: "/images/img2.jpg",
    details: [
      "Diagnosed failure points in 50+ laboratory workstations",
      "Replaced faulty RAM modules and power supply units",
      "Documented diagnostic results for maintenance logs",
      "Optimized hardware configurations for better performance"
    ]
  },
  {
    title: "Network Infrastructure Mapping",
    category: "Infrastructure",
    description: "Mapped and documented network outlets across PLV buildings to support future troubleshooting and maintenance operations.",
    tags: ["Networking", "Cabling", "Infrastructure", "Mapping"],
    image: "/images/img3.jpg",
    details: [
      "Traced ethernet cabling routes in 3 main buildings",
      "Labelled wall ports and patch panels for consistency",
      "Created visual network maps using diagramming tools",
      "Assisted in identifying dead ports for repair"
    ]
  },
  {
    title: "System Imaging & Deployment",
    category: "Deployment",
    description: "Executed system backup, cloning, and re-imaging processes for laboratory computers to ensure consistent software environments.",
    tags: ["System Cloning", "Imaging", "Backup", "Software"],
    image: "/images/img4.jpg",
    details: [
      "Deployed standard OS image to 40+ computer lab units",
      "Configured user accounts and security policies",
      "Installed essential development software (VS Code, NetBeans)",
      "Verified network connectivity post-deployment"
    ]
  }
];

const FeaturedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="outputs" className="sm:py-24 pt-16 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="mb-6">
          <div className="flex text-[13px] sm:text-sm uppercase font-medium text-black tracking-tight items-center justify-between">
            <span>OUTPUTS</span>
            <span>(02)</span>
          </div>
          <div className="mt-2 h-px w-full bg-black"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
          <div className="lg:col-span-7">
            <h3 className="text-[32px]  text-pink-500 sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">
              INTERNSHIP OUTPUTS.
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="sm:text-lg text-black/60 max-w-3xl mb-6">
              A curated set of key tasks and outputs delivered during the internship period. Note: Confidential details have been omitted.
            </p>
            <div className="flex justify-start">
                <a href="#contact" className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-white pl-2 pr-6 py-2 transition-all duration-300 ring-1 ring-black/10 hover:ring-black/30 hover:shadow-lg">
                    <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 group-hover:bg-white group-hover:scale-90">
                       <ArrowRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-black" />
                    </span>
                    <span className="relative z-10 ml-3 text-sm font-medium text-black transition-colors duration-300 group-hover:text-white">Get Started</span>
                </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {projects.map((project, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="w-full bg-gray-50 overflow-hidden relative pt-[60%]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="p-6 flex flex-col h-full">
              <span className="inline-block self-start px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">
                {project.category}
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                {project.title}
              </h4>
              <p className="text-black/70 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs rounded bg-black/5 text-black/60 font-medium">{tag}</span>
                ))}
              </div>
              <button 
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium hover:text-brand-accent transition-colors group-hover:translate-x-1 duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
              >
                View Details
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors backdrop-blur-sm" 
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="h-64 sm:h-72 relative shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20 mb-3 backdrop-blur-md">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{selectedProject.title}</h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto">
                 <div className="mb-8">
                   <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-3">Description</h4>
                   <p className="text-lg text-gray-700 leading-relaxed">{selectedProject.description}</p>
                 </div>

                 {selectedProject.details && (
                   <div className="mb-8">
                     <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Key Achievements</h4>
                     <ul className="grid grid-cols-1 gap-3">
                       {selectedProject.details.map((detail, i) => (
                         <li key={i} className="flex items-start gap-3 text-gray-700">
                           <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                           <span>{detail}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
                 
                 <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-md text-sm font-medium">
                            {tag}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center shrink-0">
                 <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2024 Internship Output</span>
                 </div>
                 <button 
                   onClick={() => setSelectedProject(null)}
                   className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                 >
                   Close
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedWork;