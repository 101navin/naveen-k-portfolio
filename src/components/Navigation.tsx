import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Calculate glassmorphism intensity factor (0 to 1) over first 150px of scroll
      const progress = Math.min(currentScrollY / 150, 1);
      setScrollProgress(progress);

      // 2. Determine show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // scrolling down -> hide navbar
      } else {
        setIsVisible(true);  // scrolling up -> show navbar
      }
      setLastScrollY(currentScrollY);

      // 3. Scroll Spy logic
      const scrollPosition = currentScrollY + 120; // Offset for navbar height

      // Check if we hit the bottom of the page
      if (window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const item of navItems) {
        const targetId = item.href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Computes premium dynamic glassmorphic backgrounds based on scroll depth
  const getNavStyles = () => {
    if (scrollProgress === 0) {
      return {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        borderBottomColor: 'transparent',
      };
    }

    const lightBg = `rgba(255, 255, 255, ${0.35 + scrollProgress * 0.45})`;
    const darkBg = `rgba(15, 23, 42, ${0.3 + scrollProgress * 0.45})`;
    const blur = `${scrollProgress * 12}px`;
    const borderAlpha = scrollProgress * 0.08;

    return {
      backgroundColor: theme === 'dark' ? darkBg : lightBg,
      backdropFilter: `blur(${blur})`,
      WebkitBackdropFilter: `blur(${blur})`,
      borderBottomColor: theme === 'dark' 
        ? `rgba(255, 255, 255, ${borderAlpha})` 
        : `rgba(0, 0, 0, ${borderAlpha})`,
    };
  };

  return (
    <nav 
      style={getNavStyles()}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${scrollProgress > 0 ? 'py-3 shadow-sm' : 'py-5'}`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection('#home')}
        >
          Naveen K
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-1 p-1 rounded-full relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full relative w-10 h-10 border border-border/40 bg-background/30 hover:bg-muted/80 backdrop-blur-sm"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute text-yellow-500"
            >
              <Sun size={20} />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : -180, scale: theme === 'dark' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute text-blue-400"
            >
              <Moon size={20} />
            </motion.div>
          </Button>
        </div>

        {/* Mobile Navbar controls */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Theme Toggle Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full relative w-10 h-10 border border-border/40 bg-background/30"
            aria-label="Toggle Theme"
          >
            <div className="absolute text-yellow-500 dark:opacity-0 dark:scale-0 transition-all duration-300">
              <Sun size={18} />
            </div>
            <div className="absolute text-blue-400 opacity-0 scale-0 dark:opacity-100 dark:scale-100 transition-all duration-300">
              <Moon size={18} />
            </div>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border/40 bg-background/30"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 border-t border-border/40 overflow-hidden"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center w-full px-4 py-3 rounded-xl text-left text-base font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary/10 text-primary border-l-4 border-primary pl-3' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-4 border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
