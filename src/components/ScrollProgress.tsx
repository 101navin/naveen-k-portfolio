import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressBarRef.current) return;

    const anim = gsap.fromTo(
      progressBarRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3, // smooth scroll response mimicking spring physics
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={progressBarRef}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 origin-left z-50 shadow-sm"
      role="progressbar"
      aria-label="Scroll Progress"
      style={{ transformOrigin: "left" }}
    />
  );
};

export default ScrollProgress;
