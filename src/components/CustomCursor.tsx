import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [dotSize] = useState(8);
  const [circleSize, setCircleSize] = useState(40);

  useEffect(() => {
    const updateCircleSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCircleSize(30);
      } else {
        setCircleSize(40);
      }
    };
    updateCircleSize();
    window.addEventListener('resize', updateCircleSize);
    return () => window.removeEventListener('resize', updateCircleSize);
  }, []);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block bg-indigo-500 border border-white z-[9999] rounded-full fixed top-0 left-0 pointer-events-none"
        style={{ width: dotSize, height: dotSize }}
        animate={{ 
          x: mousePosition.x - dotSize / 2, 
          y: mousePosition.y - dotSize / 2,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <motion.div
        className="cursor-outline hidden md:block border-2 border-indigo-500 z-[9998] rounded-full fixed top-0 left-0 pointer-events-none"
        style={{ width: circleSize, height: circleSize }}
        animate={{ 
          x: mousePosition.x - circleSize / 2, 
          y: mousePosition.y - circleSize / 2,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  );
}
