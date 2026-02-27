import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [200, -1000]);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-[#121212] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              Who<br/>Am I?
            </h2>
            <div className="w-24 h-2 bg-indigo-500 mb-10" />
            
            <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              <p>
                I'm not just a coder. I'm a digital architect obsessed with structure, motion, and the raw beauty of code.
              </p>
              <p>
                My work bridges the gap between <span className="bg-white text-black px-1 font-bold">brutalist aesthetics</span> and <span className="bg-white text-black px-1 font-bold">seamless functionality</span>. I don't just build websites; I create memorable digital environments.
              </p>
              <p>
                Based in the digital void, available worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="relative mt-8 md:mt-0">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto">
              {/* Photo Frame/Border Effect */}
              <div className="absolute inset-0 border-2 border-white translate-x-4 translate-y-4 z-0"></div>
              
              {/* Image Container */}
              <div className="relative h-full w-full bg-gray-800 overflow-hidden border-2 border-white z-10 grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src="https://avatars.githubusercontent.com/u/226010537?s=400&u=5b8460e62a352fd014b17faa3558a6ab1ea5027c&v=4" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-mono text-sm uppercase tracking-widest">
                    Alex Developer
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    Full Stack Engineer
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-500 rounded-full mix-blend-screen animate-bounce-slow"></div>
              <div className="absolute -bottom-8 -left-8 text-8xl font-black text-transparent stroke-text opacity-20 select-none pointer-events-none" 
                   style={{ WebkitTextStroke: '1px white' }}>
                01
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Text */}
      <div className="relative w-full overflow-hidden py-8 border-y-2 border-white bg-indigo-600 mt-12">
        <motion.div style={{ x }} className="whitespace-nowrap flex gap-12 text-white">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-4xl md:text-8xl font-black uppercase tracking-tighter">
              Frontend • Backend • Design • Engineering •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
