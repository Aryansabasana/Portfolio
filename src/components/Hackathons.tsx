import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, X, ArrowRight } from 'lucide-react';

const hackathons = [
  {
    id: 1,
    title: "Convergence-2026 X Ganpat Uni",
    role: "Full Stack Developer",
    description: `🥈 First Runner-Up at Convergence Hackathon, Ganpat University, built an AI-driven solution for real-world agricultural challenges.
Developed a system using weather, soil, and satellite data to predict crop yield and assist farmers’ decisions.
Demonstrated strong teamwork, problem-solving, and rapid prototyping in a high-pressure 36-hour hackathon environment.`,
    image: "https://res.cloudinary.com/dcxu5wckd/image/upload/v1775886660/678A2160_jcmpcb.jpg",
  },
  {
    id: 2,
    title: "SU Hackathon 2026",
    role: "Frontend Lead",
    description: `🏆 Winner at Sangam University Hackathon for building Kisan Dost, an AI-powered agriculture assistant.
Developed a system to predict crop yield and profitability using weather, soil, and satellite data.
Enabled farmers to make smarter, data-driven decisions with an easy-to-use and impactful solution.`,
    image: "https://res.cloudinary.com/dcxu5wckd/image/upload/v1775886638/WhatsApp_Image_2026-04-09_at_17.18.00_kugmew.jpg",
  }
];

export default function Hackathons() {
  const [selectedHackathon, setSelectedHackathon] = useState<typeof hackathons[0] | null>(null);

  return (
    <section id="hackathons" className="py-24 px-6 md:px-12 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b-2 border-white/20 pb-6 flex justify-between items-end">
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter">
            Hackathons<br />& Events
          </h2>
          <div className="hidden md:flex items-center gap-4">
            <p className="font-mono text-sm max-w-xs text-right">
              Competitive coding, rapid prototyping, and collaborative innovation.
            </p>
            <Trophy size={48} strokeWidth={1.5} className="text-white" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              layoutId={`hackathon-card-${hackathon.id}`}
              key={hackathon.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedHackathon(hackathon)}
              className="cursor-pointer group flex flex-col bg-black border-2 border-white/20 p-4 shadow-hard-sm hover:border-white transition-all duration-300"
            >
              <div className="aspect-video bg-[#121212] mb-6 overflow-hidden relative border-2 border-white/10">
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight group-hover:text-indigo-400 transition-colors mb-4 flex-grow">
                {hackathon.title}
              </h3>

              <button className="flex items-center justify-between w-full border-t border-white/10 pt-4 text-sm font-mono uppercase text-gray-400 group-hover:text-white transition-colors">
                <span>View Details</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedHackathon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedHackathon(null)}
          >
            <motion.div
              layoutId={`hackathon-card-${selectedHackathon.id}`}
              className="bg-[#121212] w-full max-w-6xl h-auto max-h-[90vh] rounded-none border-2 border-white/20 shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedHackathon(null)}
                className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 aspect-video md:aspect-auto">
                <img
                  src={selectedHackathon.image}
                  alt={selectedHackathon.title}
                  className="w-full h-full object-cover border-b-2 md:border-b-0 md:border-r-2 border-white/20"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-black uppercase leading-none text-white">
                    {selectedHackathon.title}
                  </h3>
                </div>

                <h4 className="text-base font-mono text-indigo-400 mb-6 border-b-2 border-white/10 pb-4 uppercase">
                  {selectedHackathon.role}
                </h4>

                <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8 whitespace-pre-line">
                  {selectedHackathon.description}
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center">
                    Hackathon Participation
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
