import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Resume from './Resume';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { scrollY } = useScroll();

  // Parallax offsets for background decorative circles
  const circle1Y = useTransform(scrollY, [0, 1000], [0, -200]);
  const circle2Y = useTransform(scrollY, [0, 1000], [0, 100]);
  const textY = useTransform(scrollY, [0, 500], [0, 50]);

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

  // Framer Motion container & item variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.02, 0.43, 1.01],
      },
    },
  };

  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:naveenknaveenk189@gmail.com", label: "Email" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/naveenk1011", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/101navin", label: "GitHub" },
  ];

  return (
    <>
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
      >
        {/* Decorative Parallax Background Spheres */}
        <motion.div 
          style={{ y: circle1Y }}
          className="absolute top-[15%] left-[8%] w-24 h-24 md:w-36 md:h-36 bg-gradient-to-tr from-primary/30 to-blue-500/20 rounded-full blur-xl opacity-60 dark:opacity-40"
        />
        <motion.div 
          style={{ y: circle2Y }}
          className="absolute bottom-[20%] right-[10%] w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-2xl opacity-60 dark:opacity-30"
        />

        {/* Ambient Gradient Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background to-background pointer-events-none" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            {/* Tagline Badge */}
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm mb-6 uppercase tracking-wider"
            >
              🚀 Welcome to my digital space
            </motion.span>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6"
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">Naveen K</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium text-foreground dark:text-slate-200 mb-4 max-w-2xl"
            >
              Future Data Analytics Engineer & AI Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Passionate about Machine Learning, Data Analytics, and engineering modern, scalable solutions.
            </motion.p>

            {/* Social Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 mb-10"
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
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
            >
              <Button 
                size="lg" 
                className="text-base px-8 py-6 rounded-full w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/95 hover:to-blue-600/95 shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
                onClick={scrollToContact}
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 rounded-full w-full sm:w-auto border-2 hover:bg-muted/80 backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300"
                onClick={() => setIsResumeOpen(true)}
              >
                View Resume
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              variants={itemVariants}
              className="mt-16"
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Hero;
