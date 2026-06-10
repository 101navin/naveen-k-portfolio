import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  margin = "-50px",
  amount = 0.5, // Animates when 50% of element is in viewport
}) => {
  const shouldReduce = useReducedMotion();

  const getVariants = (): Variants => {
    if (shouldReduce) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const getTransition = () => {
    if (shouldReduce) {
      return { duration: 0.1 };
    }
    return {
      duration,
      delay,
      ease: [0.21, 1.02, 0.43, 1.01],
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin, amount }}
      variants={getVariants()}
      transition={getTransition()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
