import React from 'react';
import { motion } from 'framer-motion';
import { Building2, UserCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';

const jobDescription = [
  "Inventory and documentation of university assets",
  "Photo documentation and asset coding",
  "Testing hardware (RAMs, monitors, motherboards)",
  "System cloning, backup, and imaging",
  "Software installation & verification",
  "Network outlet mapping across campus",
  "IT troubleshooting support",
  "Laboratory computer maintenance"
];

const InternshipInfo: React.FC = () => {
  return (
    <section id="internship" className="sm:py-24 pt-16 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="mb-6">
          <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
            <span>PLACEMENT</span>
            <span>(02)</span>
          </div>
          <div className="mt-2 h-px w-full bg-black"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
          <div className="lg:col-span-7">
            <h3 className="text-[32px] text-pink-500 sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">
              Internship Details.
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">
              My On-the-Job Training placement details, supervision structure, and agreed program of work under the PLV Information Technology Department.
            </p>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left Column: Organization Details */}
        <div className="flex flex-col gap-6">
          <motion.article 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white p-6"
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Building2 className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-semibold">Organization</h3>
            </div>
            
            <div className="space-y-4 text-sm text-black/70">
              <div>
                <strong className="block text-black">Pamantasan ng Lungsod ng Valenzuela</strong>
                <span className="block">Information Technology Department</span>
                <span className="block">Computer Laboratory Maintenance Unit</span>
                <span className="block mt-1 italic">Tongco Street, Maysan Road, Valenzuela City</span>
              </div>
            </div>
          </motion.article>

          <motion.article 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white p-6"
          >
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <UserCheck className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-semibold">Supervision</h3>
            </div>
             <div className="space-y-2 text-sm text-black/70">
                <p><strong className="text-black">Site Supervisor:</strong> Sir Diomil T. Agbayani</p>
                <p>Direct supervision by IT staff with daily briefings and regular output reviews.</p>
             </div>
          </motion.article>
          
           <motion.article 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white p-6"
          >
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Clock className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-semibold">Schedule</h3>
            </div>
             <div className="space-y-2 text-sm text-black/70">
                <p><strong className="text-black">Days:</strong> Monday – Saturday</p>
                <p><strong className="text-black">Time:</strong> 8:00 AM – 5:00 PM</p>
             </div>
          </motion.article>
        </div>

        {/* Middle Column - Job Description List */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-grow bg-white ring-black/10 ring-1 rounded-2xl p-6 lg:col-span-2 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 bg-brand-accent/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
          
          <h4 className="text-2xl font-semibold tracking-tight mb-6 relative z-10">Job Description & Agreed Program of Work</h4>
          <p className="text-black/60 mb-8 max-w-lg relative z-10">
            Primary duties assigned during the internship focused on hardware maintenance, asset management, and technical support.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {jobDescription.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium text-sm">{item}</span>
                </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-black/10 relative z-10">
            <h5 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Site Locations
            </h5>
            <div className="flex gap-4 text-sm text-black/70">
                <span className="bg-gray-100 px-3 py-1 rounded-md">PLV Main</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md">PLV Annex</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md">PLV CPAG Building</span>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default InternshipInfo;