import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code, ExternalLink, Youtube, ArrowRight } from 'lucide-react';

type Category = 'All' | 'Games' | 'Clones' | 'Full Stack' | 'Frontend' | 'Figma';

interface Work {
  id: number;
  title: string;
  description: string;
  images: string[];
  tech: string[];
  codeLink: string;
  liveLink: string;
  youtubeLink?: string;
  postmanLink?: string;
  figmaLink?: string;
  category: Category;
}

const works: Work[] = [
{
    id: 1,
    title: "SUSHI TRADING WEBSITE",
    description: "A clone of a Sushi Trading website built with HTML, CSS, and JavaScript that showcases sushi products and enables interactive, user-friendly trading-style browsing.",
    images: [
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776358624/Screenshot_2026-04-16_222522_tp4qhu.png",
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776358624/Screenshot_2026-04-16_222546_xniy8n.png",
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776358625/Screenshot_2026-04-16_222602_iffeqh.png"
    ],
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/Sushi-Clone",
    liveLink: "https://web2clone.netlify.app/clones/sushi-clone/sushi",
    youtubeLink: "https://youtu.be/GPHhNnJs7lo?si=HnVFFXBNVZFTk1v0",
    category: "Clones"
  },
  {
    id: 2,
    title: "ZOHO CLOUD SERVICE",
    description: "A clone of the Zoho Cloud website built using HTML, CSS, and JavaScript, showcasing cloud services with a clean UI and smooth interactive functionality.",
    images: [
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776358962/Screenshot_2026-04-16_223125_fmgl8q.png",
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776358962/Screenshot_2026-04-16_223152_rmutg7.png",
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776358962/Screenshot_2026-04-16_223219_nb0mi7.png"
    ],
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/Zoho-Clone",
    liveLink: "https://web2clone.netlify.app/clones/zoho-clone/zoho",
    youtubeLink: "https://youtu.be/xjK1ZAfoEg0?si=2j_jmfxH-8_svET6",
    category: "Clones"
  },
  {
    id: 3,
    title: "ON CLOUD SPORTSWEAR",
    description: "A clone of the OnCloud Sportswear website built with HTML, CSS, and JavaScript, delivering a modern design and interactive experience to showcase premium athletic apparel.",
    images: [
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776359147/Screenshot_2026-04-16_223421_ew9sh5.png",
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776359147/Screenshot_2026-04-16_223529_r8v0np.png",
      "https://res.cloudinary.com/dcxu5wckd/image/upload/v1776359147/Screenshot_2026-04-16_223452_s6yqmf.png"
    ],
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/Oncloud-clone",
    liveLink: "https://web2clone.netlify.app/clones/oncloud-clone/oncloud",
    youtubeLink: "https://youtu.be/e0USjvpXbSs?si=mG1HfJpOWzmp1_2p",
    category: "Clones"
  },
  {
    id: 4,
    title: "FORMELIFE",
    description: "A clone of the premium FORME fitness equipment website built with HTML, CSS, and JavaScript. Features FORME Studio and FORME Lift products with sleek wall-mounted designs, showcasing smart fitness solutions with immersive training experiences, product features, and a modern layout.",
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop"
    ],
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/FORME-Clone",
    liveLink: "https://web2clone.netlify.app/clones/forme-clone/forme",
    youtubeLink: "https://youtu.be/R5DoLVJkTM8?si=79bcHYlo3UCBw1nc",
    category: "Clones"
  },
  {
    id: 5,
    title: "INDIGO",
    description: "A clone of the IndiGo flight booking website built with HTML, CSS, and JavaScript. Features flight search, hotel bookings, trip planning, and special offers with a clean interface for booking flights, checking tariffs, and accessing various travel services.",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&h=450&fit=crop"
    ],
    tech: ["HTML", "CSS", "Js"],
    codeLink: "https://github.com/Aryansabasana/Diwali-Assignments/tree/main/Clones/Indigo-clone",
    liveLink: "https://web2clone.netlify.app/clones/indigo-clone/indigo",
    youtubeLink: "https://youtu.be/RYPFZE328oY?si=nIFvoPh7aLjk2oJ6",
    category: "Clones"
  },
  {
    id: 6,
    title: "E-COMMERCE DASHBOARD",
    description: "A modern e-commerce dashboard design with dark mode, analytics charts, and responsive layout created in Figma.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop"
    ],
    tech: ["Figma", "UI/UX", "Prototyping"],
    codeLink: "",
    liveLink: "https://www.figma.com/proto/g6vcO3RxGBNPbCPjCL2ftf/Untitled?node-id=167-390",
    figmaLink: "https://www.figma.com/design/g6vcO3RxGBNPbCPjCL2ftf/Untitled?node-id=167-390",
    category: "Figma"
  },
  {
    id: 7,
    title: "PORTFOLIO DESIGN",
    description: "A creative portfolio design with bold typography and interactive elements, designed in Figma.",
    images: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1559028012-481c04fa762d?w=800&h=450&fit=crop"
    ],
    tech: ["Figma", "UI/UX", "Wireframing"],
    codeLink: "",
    liveLink: "https://www.figma.com/proto/g6vcO3RxGBNPbCPjCL2ftf/Untitled?node-id=167-390",
    figmaLink: "https://www.figma.com/design/g6vcO3RxGBNPbCPjCL2ftf/Untitled?node-id=167-390",
    category: "Figma"
  }
];

const categories: Category[] = ['All', 'Games', 'Clones', 'Full Stack', 'Frontend', 'Figma'];

function Slideshow({ images, title, currentIndex, onPrev, onNext }: { images: string[]; title: string; currentIndex: number; onPrev: () => void; onNext: () => void }) {
  return (
    <div className="aspect-video bg-black mb-4 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - Slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-black uppercase text-white text-center px-4 leading-tight">
          {title}
        </h3>
      </div>

      <button
        onClick={onPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {}}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-2 right-2 bg-black text-white text-xs font-mono px-2 py-1 uppercase">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

export default function MyWorks() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(work => work.category === activeCategory);

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

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-mono text-sm uppercase border-2 transition-all ${
                activeCategory === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                layoutId={`work-card-${work.id}`}
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white border-2 border-black p-4 shadow-hard-sm hover:shadow-hard transition-all duration-300 flex flex-col"
              >
                <Slideshow 
                    images={work.images} 
                    title={work.title} 
                    currentIndex={currentSlide}
                    onPrev={() => setCurrentSlide((currentSlide - 1 + 3) % 3)}
                    onNext={() => setCurrentSlide((currentSlide + 1) % 3)}
                  />

                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {work.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs font-mono border border-black px-2 py-1 uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedWork(work)}
                  className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 font-bold uppercase text-sm hover:bg-gray-800 transition-colors"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
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
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none border-2 border-white shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono uppercase bg-black text-white px-2 py-1">
                    {selectedWork.category}
                  </span>
                </div>
                
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

                <div className="space-y-3">
                  {selectedWork.category !== 'Figma' && (
                    <div className="grid grid-cols-3 gap-3">
                      <a
                        href={selectedWork.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-black text-white py-3 font-bold uppercase hover:bg-gray-800 transition-colors text-sm"
                      >
                        <Code size={18} /> GitHub
                      </a>
                      <a
                        href={selectedWork.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border-2 border-black text-black py-3 font-bold uppercase hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 transition-colors text-sm"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                      {selectedWork.youtubeLink && (
                        <a
                          href={selectedWork.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 font-bold uppercase hover:bg-red-700 transition-colors text-sm"
                        >
                          <Youtube size={18} /> YouTube
                        </a>
                      )}
                    </div>
                  )}
                  {selectedWork.category === 'Figma' && selectedWork.figmaLink && (
                    <a
                      href={selectedWork.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 font-bold uppercase hover:bg-purple-700 transition-colors text-sm"
                    >
                      <ExternalLink size={18} /> View Figma Design
                    </a>
                  )}
                  {selectedWork.category === 'Figma' && selectedWork.liveLink && (
                    <a
                      href={selectedWork.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border-2 border-black text-black py-3 font-bold uppercase hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 transition-colors text-sm"
                    >
                      <ExternalLink size={18} /> View Prototype
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}