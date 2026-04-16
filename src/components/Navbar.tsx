import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Index',      to: '/' },
  { name: 'About',      to: '/about' },
  { name: 'Education',  to: '/education' },
  { name: 'Skills',     to: '/skills' },
  { name: 'Works',      to: '/works' },
  { name: 'Hackathons', to: '/hackathons' },
  { name: 'Awards',     to: '/awards' },
  { name: 'Contact',    to: '/contact' },
  { name: 'Resume',     to: '/resume.pdf', external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl font-bold tracking-tighter uppercase font-display cursor-pointer bg-transparent border-none"
        >
          Aryan<span className="text-indigo-500">.</span>Dev
        </button>

        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.to}
                className={`relative transition-colors duration-300 uppercase tracking-wider ${
                  isActive(link.to) 
                    ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-indigo-500' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex flex-col gap-1.5 cursor-pointer md:hidden"
        >
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`text-4xl md:text-6xl font-black text-transparent stroke-text hover:text-white transition-colors duration-300 uppercase font-display tracking-tighter block ${
                      isActive(link.to) ? 'text-indigo-500' : ''
                    }`}
                    style={{ WebkitTextStroke: '1px white' }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}