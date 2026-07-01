import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spotlightRef.current) return;

    // Create quickTo animations for butter-smooth cursor tracking
    const xTo = gsap.quickTo(spotlightRef.current, "left", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(spotlightRef.current, "top", { duration: 0.5, ease: "power3.out" });

    // Set initial offscreen & transparent values
    gsap.set(spotlightRef.current, { xPercent: -50, yPercent: -50, opacity: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      // Fade in the spotlight when cursor enters page
      gsap.to(spotlightRef.current, { opacity: 1, duration: 0.6 });
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeave = () => {
      gsap.to(spotlightRef.current, { opacity: 0, duration: 0.6 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full blur-[100px]"
      style={{
        background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
        mixBlendMode: "screen",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CursorSpotlight;
