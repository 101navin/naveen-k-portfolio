import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, ScanEye, ExternalLink, Github, Filter, ShieldCheck, ShoppingBag } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Internship' | 'Development'>('All');

  const projects = [
    
    {
      title: "Smart Helmet Detection",
      duration: "2026",
      description: "A real-time deep learning system using YOLO object detection to identify whether motorcyclists are wearing helmets. Processes video streams to enhance traffic safety and compliance monitoring.",
      technologies: ["YOLO", "Computer Vision", "Python", "Deep Learning", "OpenCV"],
      type: "Development Project",
      category: "Development",
      icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
      gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
      github: "https://github.com/101navin",
      demo: "https://github.com/101navin",
      image: "/helmet-detection.png"
    },
    {
      title: "E-Commerce Website",
      description: "A modern, responsive e-commerce web application featuring user authentication, product filtering, shopping cart management, and a checkout interface.",
      technologies: ["React", "Tailwind CSS", "State Management", "Web Development", "API Integration"],
      type: "Development Project",
      category: "Development",
      icon: <ShoppingBag className="w-10 h-10 text-orange-500" />,
      gradient: "from-orange-600/20 via-amber-600/10 to-transparent",
      github: "https://github.com/101navin",
      demo: "https://github.com/101navin",
      image: "/ecommerce.png"
    },
    {
      title: "Object Detection System",
      duration: "2024",
      description: "Implemented real-time object detection with model training and web dashboard interface. Created a comprehensive system for detecting and classifying objects in real-time video streams.",
      technologies: ["Computer Vision", "Deep Learning", "Web Development", "Dashboard"],
      type: "Development Project",
      category: "Development",
      icon: <ScanEye className="w-10 h-10 text-emerald-500" />,
      gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
      github: "https://github.com/101navin",
      demo: "https://github.com/101navin",
      image: "/object-detection.jpg"
    },
    {
      title: "Predictive Analytics for Hourly-Based Score Estimation",
      duration: "July 2024 - August 2024",
      description: "Project using machine learning algorithms to predict student scores based on hourly patterns. Implemented various ML models to analyze study patterns and forecast academic performance.",
      technologies: ["Machine Learning", "Python", "Data Analytics", "Predictive Modeling"],
      type: "Internship Project",
      category: "Internship",
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
      gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
      github: "https://github.com/101navin",
      demo: "https://github.com/101navin",
      image: "/predictive-analytics.png"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const filterTabs = [
    { id: 'All', label: 'All Projects' },
    { id: 'Internship', label: 'Internships' },
    { id: 'Development', label: 'Development' }
  ] as const;

  return (
    <section id="projects" className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">My Creations</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
          </ScrollReveal>
        </div>

        {/* Filter Tab Bar */}
        <ScrollReveal direction="up" delay={0.2} className="flex justify-center mb-12">
          <div className="flex p-1 bg-muted/60 dark:bg-slate-900/40 rounded-full border border-border/40 backdrop-blur-sm gap-1">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-colors duration-300 ${
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectFilter"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="absolute inset-0 bg-primary rounded-full shadow-sm"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {tab.id === 'All' && <Filter size={12} />}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
        
        {/* Projects Grid with layout transitions */}
        <motion.div 
          layout
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card className="glass-card border border-border/40 overflow-hidden h-full flex flex-col group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 relative">
                  
                  {/* Visual Preview Area with Zoom */}
                  <div className="relative h-48 w-full border-b border-border/40 overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    )}
                    
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    
                    {!project.image && (
                      /* Themed Icon for projects without cover images */
                      <div className="transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 z-10 bg-white/80 dark:bg-slate-900/80 p-4 rounded-2xl shadow-md border border-white/20">
                        {project.icon}
                      </div>
                    )}

                    {/* Dark Glass Overlay with Buttons (revealed on hover) */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        onClick={() => window.open(project.github, '_blank')}
                        className="gap-2 rounded-full hover:scale-105 transition-transform"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => window.open(project.demo, '_blank')}
                        className="gap-2 rounded-full hover:scale-105 transition-transform"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <CardHeader className="flex-grow p-6">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 capitalize font-semibold rounded-full text-xs px-2.5 py-0.5">
                        {project.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-semibold">{project.duration}</span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-foreground font-bold mb-3 tracking-tight leading-snug">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-primary/10 dark:bg-primary/5 text-primary border border-primary/10 text-xs px-2.5 py-0.5 rounded-md hover:bg-primary/20 dark:hover:bg-primary/10 transition-colors font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
