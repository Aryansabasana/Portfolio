import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Swaminarayan University",
    year: "2025 — 2029",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with First Class Honors. Lead Developer of the University Tech Club."
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "NIB School Of Science",
    year: "2023-2024",
    description: "Intensive 12-week program focused on MERN stack development, cloud architecture, and agile methodologies."
  },
  {
    id: 3,
    degree: "Primary Education",
    institution: "M.M.Mehta English Medium School",
    year: "2010 — 2022",
    description: "Major in Science with focus on Mathematics and Physics. Won the Regional Coding Championship."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-[#F0F0F0] text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
         <div className="flex items-end justify-between mb-20 border-b-2 border-black pb-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
            Education<br/>Journey
          </h2>
          <GraduationCap size={48} className="text-black hidden md:block" strokeWidth={1.5} />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-black/20 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-white border-2 border-black flex items-center justify-center z-10 md:-translate-x-1/2 shadow-sm">
                    <div className="w-3 h-3 bg-indigo-600"></div>
                </div>

                {/* Content Half */}
                <div className="pl-16 md:pl-0 md:w-1/2 md:px-12">
                   <div className={`bg-white p-6 md:p-8 border-2 border-black shadow-hard hover:shadow-hard-hover transition-all duration-300 group relative`}>
                      {/* Connector Line for Desktop */}
                      <div className={`hidden md:block absolute top-5 w-12 h-0.5 bg-black/20 ${index % 2 === 0 ? '-left-12' : '-right-12'}`}></div>

                      <span className="inline-block px-3 py-1 bg-black text-white text-xs font-mono mb-4 uppercase tracking-widest">
                        {item.year}
                      </span>
                      <h3 className="text-xl md:text-3xl font-bold uppercase mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                        {item.degree}
                      </h3>
                      <h4 className="text-base md:text-lg font-mono text-gray-500 mb-4 border-b border-gray-100 pb-4">
                        {item.institution}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                   </div>
                </div>

                {/* Empty Half for layout balance */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
