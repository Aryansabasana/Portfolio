import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Code, ExternalLink } from 'lucide-react';


const works = [
  {
    id: 1,
    title: "SUSHI TRADING WEBSITE",
    description: "A clean, responsive Sushi Trading website built with HTML, CSS, and JavaScript that showcases sushi products and enables interactive, user-friendly trading-style browsing.",
    video: "https://res.cloudinary.com/dcxu5wckd/video/upload/v1772194977/2025-12-14_17-11-39_dmutrh.mp4",
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/Sushi-Clone",
    liveLink: "https://web2clone.netlify.app/clones/sushi-clone/sushi"
  },
  {
    id: 2,
    title: "ZOHO CLOUD SERVICE",
    description: "A modern Zoho Cloud–inspired website built using HTML, CSS, and JavaScript, showcasing cloud services with a clean UI and smooth interactive functionality.",
    video: "https://res.cloudinary.com/dcxu5wckd/video/upload/v1772197875/2025-12-14_17-02-26_a1lqjm.mp4",
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/Zoho-Clone",
    liveLink: "https://web2clone.netlify.app/clones/zoho-clone/zoho"
  },
  {
    id: 3,
    title: "ON CLOUD SPORTSWEAR",
    description: "A sleek OnCloud Sportswear website built with HTML, CSS, and JavaScript, delivering a modern design and interactive experience to showcase premium athletic apparel.",
    video: "https://res.cloudinary.com/dcxu5wckd/video/upload/v1772192668/2025-10-28_18-22-22_hhlzqs.mp4",
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/Oncloud-clone",
    liveLink: "https://web2clone.netlify.app/clones/oncloud-clone/oncloud"
  }
];

export default function MyWorks() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section id="my-works" className="py-24 px-6 md:px-12 bg-[#F0F0F0] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b-2 border-black pb-6 flex justify-between items-end">
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter">
            My<br />Works
          </h2>
          <p className="hidden md:block font-mono text-sm max-w-xs text-right">
            A collection of projects showcasing code quality and visual impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <motion.div
              key={work.id}
              layoutId={`work-card-${work.id}`}
              onClick={() => setSelectedWork(work)}
              className="group cursor-pointer bg-white border-2 border-black p-4 shadow-hard-sm hover:shadow-hard transition-all duration-300"
            >
              <div className="aspect-video bg-black mb-4 overflow-hidden relative">
                <video
                  src={work.video}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white text-black rounded-full p-3">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold uppercase mb-2">{work.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {work.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-xs font-mono border border-black px-2 py-1 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              layoutId={`work-card-${selectedWork.id}`}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-none border-2 border-white shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="bg-black aspect-video md:aspect-auto md:h-full flex items-center justify-center">
                  <video
                    src={selectedWork.video}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col">
                  <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-none">
                    {selectedWork.title}
                  </h3>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {selectedWork.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-mono uppercase text-sm text-gray-500 mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.tech.map(t => (
                        <span key={t} className="text-sm font-bold border-2 border-black px-3 py-1 uppercase bg-gray-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-4">
                    <a
                      href={selectedWork.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-4 font-bold uppercase hover:bg-gray-800 transition-colors"
                    >
                      <Code size={20} /> View Code
                    </a>
                    <a
                      href={selectedWork.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-black text-black py-4 font-bold uppercase hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
