import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Odoo X Adani University Hackathon",
    issuer: "Adani University",
    date: "2025",
    image: "https://res.cloudinary.com/dcxu5wckd/image/upload/v1772165645/f325ebd1-71b6-4274-9ed7-ec7d4e406298_1__page-0001_w96prt.jpg",
    link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/f325ebd1-71b6-4274-9ed7-ec7d4e406298.pdf"
  },
  {
    id: 2,
    title: "Dev Heat Hackathon",
    issuer: "Institute of Information Technology, Surat",
    date: "2026",
    image: "https://res.cloudinary.com/dcxu5wckd/image/upload/v1772165576/37bcdcb2-dcc2-4f79-ae08-9a41e2b4636a_page-0001_bus3bp.jpg",
    link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/37bcdcb2-dcc2-4f79-ae08-9a41e2b4636a.pdf"
  },
  {
    id: 3,
    title: "Google UX Design Professional",
    issuer: "Google",
    date: "2022",
    image: "https://picsum.photos/seed/google/600/400",
    link: "#"
  },
 
];

export default function Certificates() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b-2 border-black pb-6">
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter">
            Certifications<br/>& Awards
          </h2>
          <Award size={48} className="text-black hidden md:block" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between py-8 md:py-10 border-b border-gray-200 hover:border-black transition-colors duration-300"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div className="flex items-baseline gap-4 md:gap-12 z-10 mix-blend-multiply text-black group-hover:text-indigo-600 transition-colors">
                <span className="text-base md:text-lg font-mono text-gray-400 group-hover:text-indigo-600">0{index + 1}</span>
                <div>
                  <h3 className="text-xl md:text-4xl font-bold uppercase tracking-tight mb-1">{cert.title}</h3>
                  <p className="text-xs md:text-sm font-mono text-gray-500 uppercase">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 z-10">
                <ExternalLink size={24} className="transform group-hover:rotate-45 transition-transform duration-300 text-gray-400 group-hover:text-black" />
              </div>

              {/* Hover Image Reveal */}
              <motion.div
                className="absolute right-0 md:right-32 top-1/2 -translate-y-1/2 w-[240px] h-[160px] md:w-[320px] md:h-[220px] overflow-hidden border-2 border-black bg-white z-20 pointer-events-none shadow-hard"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ 
                  opacity: hoveredCert === index ? 1 : 0,
                  scale: hoveredCert === index ? 1 : 0.8,
                  rotate: hoveredCert === index ? 0 : 5,
                  x: hoveredCert === index ? 0 : 50
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
