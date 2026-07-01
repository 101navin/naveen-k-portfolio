import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Resume from './Resume';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Custom ScrambleText component matching GSAP's ScrambleTextPlugin behavior
const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  useEffect(() => {
    let isMounted = true;
    const totalDuration = 1500; // ms
    const frameRate = 30; // ms per frame
    const totalFrames = totalDuration / frameRate;
    
    const startTimer = setTimeout(() => {
      let frame = 0;
      
      const interval = setInterval(() => {
        if (!isMounted) return;
        
        frame++;
        const progress = frame / totalFrames;
        const resolvedLetters = Math.floor(progress * text.length);
        
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (i < resolvedLetters) {
            result += text[i];
          } else if (text[i] === " ") {
            result += " ";
          } else {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        
        setDisplayText(result);
        
        if (frame >= totalFrames) {
          setDisplayText(text);
          clearInterval(interval);
        }
      }, frameRate);
      
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => {
      isMounted = false;
      clearTimeout(startTimer);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useGSAP(() => {
    // 1. Entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial values to prevent FOUC
    gsap.set(".hero-tagline", { opacity: 0, y: 20 });
    gsap.set(".hero-char", { opacity: 0, y: -150 });
    gsap.set([".hero-desc", ".hero-socials", ".hero-ctas", ".hero-scroll"], { opacity: 0, y: 25 });

    tl.to(".hero-tagline", { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
    
    // Stagger character physics drop
    tl.to(".hero-char", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.04,
      ease: "bounce.out"
    }, "-=0.2");

    // Fade-in trailing content
    tl.to([".hero-desc", ".hero-socials", ".hero-ctas", ".hero-scroll"], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15
    }, "-=0.4");

    // 2. Parallax scroll-linked effects
    if (circle1Ref.current) {
      gsap.to(circle1Ref.current, {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    if (circle2Ref.current) {
      gsap.to(circle2Ref.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }
  }, { scope: containerRef });

  const onButtonEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      y: -6,
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.25), 0 8px 10px -6px rgba(147, 51, 234, 0.2)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const onButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      boxShadow: "none",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:naveenknaveenk189@gmail.com", label: "Email" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/naveenk1011", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/101navin", label: "GitHub" },
  ];

  // Character split arrays for the physics drop
  const titlePart1 = "Hi, I am ";
  const titlePart2 = "Naveen K";

  const splitPart1 = titlePart1.split("").map((char, idx) => (
    <span key={`p1-${idx}`} className="hero-char inline-block" style={{ whiteSpace: 'pre' }}>
      {char}
    </span>
  ));

  const splitPart2 = titlePart2.split("").map((char, idx) => (
    <span key={`p2-${idx}`} className="hero-char inline-block bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent" style={{ whiteSpace: 'pre' }}>
      {char}
    </span>
  ));

  return (
    <>
      <section
        ref={containerRef}
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden bg-transparent"
      >
        {/* Ambient Background Glow Spheres (behind glass) */}
        <div
          ref={circle1Ref}
          className="absolute top-[10%] left-[5%] w-64 h-64 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-primary/25 to-blue-500/15 rounded-full blur-[100px] opacity-70 dark:opacity-40 pointer-events-none"
        />
        <div
          ref={circle2Ref}
          className="absolute bottom-[10%] right-[5%] w-80 h-80 md:w-[600px] md:h-[600px] bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-[120px] opacity-70 dark:opacity-30 pointer-events-none"
        />

        {/* Glassmorphic Backdrop Blur Layer */}
        <div className="absolute inset-0 bg-black/[0.06] dark:bg-background/40 backdrop-blur-[70px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div
            ref={contentRef}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            {/* Tagline Badge */}
            <span
              className="hero-tagline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm mb-6 uppercase tracking-wider"
            >
              Welcome to my digital space
            </span>

            {/* Title */}
            <h1
              className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6"
            >
              {splitPart1}
              <span className="inline-block whitespace-nowrap">
                {splitPart2}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-2xl md:text-3xl font-medium text-foreground dark:text-slate-200 mb-4 max-w-2xl"
            >
              <ScrambleText text="Future Web Developer & AI Enthusiast" delay={1.2} />
            </p>

            {/* Description */}
            <p
              className="hero-desc text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Passionate about Web Development, AI and engineering modern, scalable solutions.
            </p>

            {/* Social Icons */}
            <div
              className="hero-socials flex gap-4 mb-10"
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full border border-border bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="hero-ctas flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
            >
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/95 hover:to-blue-600/95 shadow-md shadow-primary/20 active:scale-95 transition-transform duration-300"
                onMouseEnter={onButtonEnter}
                onMouseLeave={onButtonLeave}
                onClick={scrollToContact}
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-full w-full sm:w-auto border-2 hover:bg-muted/80 backdrop-blur-sm active:scale-95 transition-transform duration-300"
                onMouseEnter={onButtonEnter}
                onMouseLeave={onButtonLeave}
                onClick={() => setIsResumeOpen(true)}
              >
                View Resume
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div
              className="hero-scroll mt-16"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full animate-bounce hover:bg-transparent"
                onClick={scrollToAbout}
                aria-label="Scroll down to About section"
              >
                <ArrowDown size={22} className="text-muted-foreground hover:text-primary transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Hero;
