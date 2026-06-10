import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a spring physics wrapper for smooth transitions
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 origin-left z-50 shadow-sm"
      role="progressbar"
      aria-label="Scroll Progress"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};

export default ScrollProgress;
