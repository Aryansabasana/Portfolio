import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Python", "Supabase"]
  },
  {
    title: "Tools & Design",
    skills: ["Git", "Docker", "AWS", "Figma", "Adobe XD", "Blender"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-12 bg-black text-white -mt-2">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-b border-white/20 pb-8">
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter mb-4">
            Technical<br/>Arsenal
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base max-w-xl">
            The tools and technologies I use to bring digital visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-bold uppercase mb-8 text-indigo-500 flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="border-b border-white/10 py-3 flex items-center justify-between group-hover:border-white/30 transition-colors"
                  >
                    <span className="text-lg md:text-xl font-medium tracking-tight">{skill}</span>
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-500">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
