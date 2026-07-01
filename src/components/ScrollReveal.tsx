import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  amount = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Check for user reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: once,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        }
      );
      return;
    }

    // Define initial states based on direction
    const initialProps: gsap.TweenVars = { opacity: 0 };
    switch (direction) {
      case "up":
        initialProps.y = 40;
        break;
      case "down":
        initialProps.y = -40;
        break;
      case "left":
        initialProps.x = 40;
        break;
      case "right":
        initialProps.x = -40;
        break;
      case "scale":
        initialProps.scale = 0.92;
        break;
      case "fade":
      default:
        break;
    }

    // Determine viewport trigger point based on the 'amount' prop
    let triggerStart = "top 85%";
    if (amount === "all" || amount === 1) {
      triggerStart = "top 70%";
    }

    gsap.fromTo(
      containerRef.current,
      initialProps,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          once: once,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      }
    );
  }, { scope: containerRef, dependencies: [direction, delay, duration, once, amount] });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
