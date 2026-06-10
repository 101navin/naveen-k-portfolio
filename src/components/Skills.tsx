import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Sparkles, Languages, Coffee, Binary } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Reusable Circular Skill Component (Uses custom SVG paths + Framer Motion)
const CircularSkill = ({ name, level, icon }: { name: string; level: number; icon: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const radius = 32;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div 
      ref={ref} 
      className="flex flex-col items-center p-4 bg-white/30 dark:bg-slate-900/30 rounded-2xl border border-border/40 shadow-sm hover:scale-105 hover:border-primary/30 transition-all duration-300 w-28 md:w-32"
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-muted/30 stroke-current"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="32"
            cy="32"
          />
          <motion.circle
            className="text-primary stroke-current"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="32"
            cy="32"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <div className="scale-75 opacity-70 mb-0.5">{icon}</div>
          <span className="text-xs font-extrabold text-foreground">
            {inView ? <CountUp start={0} end={level} duration={1.5} /> : 0}%
          </span>
        </div>
      </div>
      <span className="font-bold text-xs mt-3 text-foreground text-center truncate w-full">{name}</span>
    </div>
  );
};

// Reusable Linear Skill Component (Triggered when scrolled into view)
const LinearSkill = ({ name, level }: { name: string; level: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">
          {inView ? <CountUp start={0} end={level} duration={1.5} /> : 0}%
        </span>
      </div>
      <div className="h-2 w-full bg-muted/60 rounded-full overflow-hidden border border-border/10">
        <motion.div 
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Data & Databases",
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      skills: [
        { name: "Advanced Excel", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Relational Databases", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
      skills: [
        { name: "Git", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Analytics", level: 90 }
      ]
    },
    {
      category: "Soft Skills",
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
      skills: [
        { name: "Problem-solving", level: 95 },
        { name: "Quick Learning", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Listening", level: 90 }
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Tamil", level: "Native" }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">My Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Skills & Expertise
              </h2>
            </ScrollReveal>
          </div>

          {/* Programming Core (Circular Progress) */}
          <div className="mb-12">
            <ScrollReveal direction="up" delay={0.15}>
              <Card className="glass-card border border-border/40 shadow-md p-6">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-blue-500" />
                    <CardTitle className="text-xl font-bold text-foreground">Programming Languages</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-8 md:gap-12 py-4">
                  <CircularSkill name="Python" level={90} icon={<Binary className="w-6 h-6 text-blue-500" />} />
                  <CircularSkill name="Java" level={80} icon={<Coffee className="w-6 h-6 text-amber-600" />} />
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
          
          {/* Skill Categories Grid (Linear Progress) */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={0.15 * (index + 1)}
              >
                <Card className="glass-card glass-card-hover border border-border/40 shadow-md h-full flex flex-col group">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 p-6">
                    <CardTitle className="text-lg font-bold text-foreground">{category.category}</CardTitle>
                    {/* Hover bounce and rotate motion */}
                    <motion.div
                      whileHover={{ 
                        rotate: 360, 
                        y: [0, -6, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="bg-white/90 dark:bg-slate-900/95 p-2 rounded-xl shadow-sm border border-border/40 cursor-pointer"
                    >
                      {category.icon}
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-5 p-6 pt-2 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <LinearSkill key={skillIndex} name={skill.name} level={skill.level} />
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Languages Block */}
          <ScrollReveal direction="scale" delay={0.2}>
            <Card className="glass-card border border-border/40 shadow-md overflow-hidden relative group">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary to-blue-500" />
              <CardHeader className="p-6 pb-2 text-center flex flex-row justify-center items-center gap-2">
                <Languages className="w-5 h-5 text-primary shrink-0" />
                <CardTitle className="text-lg font-bold text-foreground">Language Proficiency</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <div className="flex flex-wrap justify-center gap-8">
                  {languages.map((lang, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ scale: 1.05 }}
                      className="text-center bg-white/50 dark:bg-slate-900/30 px-6 py-4 rounded-xl border border-border/40 shadow-sm min-w-[120px]"
                    >
                      <Badge variant="outline" className="text-base px-3 py-1 mb-2 bg-primary/5 text-primary border-primary/20 font-semibold rounded-full">
                        {lang.name}
                      </Badge>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{lang.level}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Skills;
