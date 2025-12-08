import React from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Github, Linkedin, Facebook, ArrowUp, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pt-16 sm:pt-24 pb-8 border-t border-black/5" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24"
      >
        <div className="lg:col-span-5">
          <span className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Get in Touch</span>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Let's work together.</h3>
          <p className="text-lg text-black/60 mb-8 leading-relaxed">
             I am currently available for inquiries or full-time opportunities. If you have a project that needs some creative technical help, I'd love to hear about it.
          </p>
          
          <div className="space-y-4">
             <a href="mailto:medinasamanthajana@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">medinasamanthajana@gmail.com</span>
             </a>
             <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-black">
                    <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">Valenzuela City, Philippines</span>
             </div>
          </div>
        </div>
        
        <div className="lg:col-span-7">
            <form className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-black/5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-black/10 focus:ring-0 transition-all" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-black/10 focus:ring-0 transition-all" placeholder="jane@example.com" />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-black/10 focus:ring-0 transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-black/10 focus:ring-0 transition-all resize-none" placeholder="Tell me about your project..." />
                </div>
                <button className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg overflow-hidden relative group shadow-lg">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                    <span className="relative flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                </button>
            </form>
        </div>
      </motion.div>
      
      {/* Footer */}
      <footer className="pt-16 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 text-center md:text-left">
            <div className="md:col-span-2 md:pr-8">
                 <h4 className="text-xl font-bold tracking-tight mb-4">SAMANTHA JANA MEDINA</h4>
                 <p className="text-black/60 text-sm leading-relaxed md:max-w-sm mb-6">
                    A dedicated Information Technology student with practical experience in network operations, system administration, and technical support. Building the future, one line of code at a time.
                 </p>
                 <div className="flex gap-3 justify-center md:justify-start">
                    {[
                        { icon: Linkedin, href: "https://www.linkedin.com/in/ixvsam" },
                        { icon: Github, href: "https://github.com/ixvsam" },
                        { icon: Facebook, href: "https://www.facebook.com/samantha.medina.357622/" }
                    ].map((social, i) => (
                        <a key={i} href={social.href} target="_blank" rel="noreferrer noopener" aria-label={`Open ${social.href}`} className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                            <social.icon size={18} />
                        </a>
                    ))}
                 </div>
            </div>
            
            <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Sitemap</h4>
                <ul className="space-y-3 text-sm text-black/60">
                    <li><a href="#" className="hover:text-black transition-colors inline-block hover:translate-x-1 duration-200">Home</a></li>
                    <li><a href="#about" className="hover:text-black transition-colors inline-block hover:translate-x-1 duration-200">About Me</a></li>
                    <li><a href="#outputs" className="hover:text-black transition-colors inline-block hover:translate-x-1 duration-200">Featured Outputs</a></li>
                    <li><a href="#internship" className="hover:text-black transition-colors inline-block hover:translate-x-1 duration-200">Internship</a></li>
                </ul>
            </div>

            <div>
                 <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
                 <ul className="space-y-3 text-sm text-black/60">
                    <li>Valenzuela City,<br/>Metro Manila, Philippines</li>
                    <li><a href="mailto:medinasamanthajana@gmail.com" className="hover:text-black transition-colors">medinasamanthajana@gmail.com</a></li>
                 </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-black/40 text-sm font-medium order-2 md:order-1">© 2025 Samantha Jana Medina. All rights reserved.</p>
            <button 
                onClick={scrollToTop} 
                className="group flex items-center gap-2 text-sm font-bold text-black/40 hover:text-black transition-colors px-4 py-2 rounded-full hover:bg-black/5"
            >
                Back to Top 
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
        </div>
      </footer>
    </section>
  );
};

export default Contact;