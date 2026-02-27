import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden bg-[#F0F0F0]">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full" 
           style={{ 
             backgroundImage: 'linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="relative z-10 max-w-[100vw]">
        <motion.h1 
          className="text-[10vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter text-black mix-blend-multiply"
          style={{ y: y1 }}
        >
          Creative
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ml-[2vw]">
          <motion.h1 
            className="text-[10vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '1px black', y: y2 }}
          >
            Developer
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-16 ml-auto max-w-md text-right"
        >
          <p className="text-lg md:text-xl font-medium leading-tight">
            I build digital experiences that <span className="bg-black text-white px-2">defy expectations</span>. 
            Full-stack engineering meets radical design.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-12">
        <div className="animate-spin-slow w-20 h-20 rounded-full border border-black flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}
