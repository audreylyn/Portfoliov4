import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Internship', href: '#internship' },
    { label: 'Outputs', href: '#outputs' },
    { label: 'Contact', href: '#contact' },
  ];

  const navLinks = [
    { label: 'Internship', href: '#internship' },
    { label: 'Outputs', href: '#outputs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-6 sm:pt-8 relative z-50"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <div className="flex flex-col z-50 relative">
            <span className={`text-base font-bold tracking-tight uppercase transition-colors duration-300 ${isMenuOpen ? 'text-black' : 'text-black'}`}>
              Samantha Jana Medina
            </span>
            <span className="text-[10px] text-black/60 uppercase tracking-widest hidden sm:block">
              IT Student & OJT Intern
            </span>
          </div>

          {/* Desktop Info (Hidden on mobile/tablet) */}
          <div className="hidden lg:flex flex-col items-end text-right">
             <span className="text-xs font-semibold tracking-tight">Valenzuela City</span>
             <span className="text-[13px] text-black/70">IT Student & OJT Intern</span>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-black hover:bg-black/5 rounded-full transition-colors z-50 relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Full Width Navigation Bar - Desktop */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:block fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="bg-[#0a0a1a] flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="flex-1 py-5 text-center text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors relative"
            >
              {link.label}
              {index < navLinks.length - 1 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-white/20"></span>
              )}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 pb-8"
          >
            {/* Menu Links */}
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                  className="text-4xl sm:text-5xl font-bold tracking-tighter text-black hover:text-black/50 transition-colors flex items-center gap-4 group w-fit"
                >
                  {item.label}
                  <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-brand-accent" />
                </motion.a>
              ))}
            </nav>

            {/* Footer Info inside Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto"
            >
               <div className="w-full h-px bg-black/10 mb-8"></div>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-black/40 mb-2">Location</span>
                    <div className="flex items-center gap-2 text-sm font-medium">
                       <MapPin className="w-4 h-4" />
                       Valenzuela City
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-black/40 mb-2">Availability</span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-200">
                       <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                       OPEN TO WORK
                    </span>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;