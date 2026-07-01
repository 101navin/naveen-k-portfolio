import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Sparkles, Languages, Binary } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SkillBadge = ({ name, subtitle }: { name: string; subtitle?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2.5 rounded-xl bg-white/40 dark:bg-slate-900/35 border border-border/40 hover:border-primary/45 shadow-sm backdrop-blur-sm transition-all duration-300 flex flex-col items-center justify-center font-semibold text-xs md:text-sm text-foreground hover:shadow-md hover:bg-white/60 dark:hover:bg-slate-950/20"
    >
      <span>{name}</span>
      {subtitle && (
        <span className="text-[9px] md:text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">
          {subtitle}
        </span>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      title: "Backend Development",
      icon: <Binary className="w-5 h-5 text-purple-500" />,
      skills: ["Python", "Node.js", "Express.js"]
    },
    {
      title: "Database Management",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: ["MySQL", "MongoDB", "Relational Databases"]
    },
    {
      title: "Tools & Design",
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      skills: ["Git", "GitHub", "Canva", "Figma"]
    },
    {
      title: "Soft Skills",
      icon: <Sparkles className="w-5 h-5 text-yellow-500" />,
      skills: ["Problem-solving", "Quick Learning", "Communication", "Listening"]
    },
    {
      title: "Languages",
      icon: <Languages className="w-5 h-5 text-pink-500" />,
      skills: [
        { name: "English", subtitle: "Proficient" },
        { name: "Tamil", subtitle: "Native" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent relative z-10 overflow-hidden">
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

          {/* Skill Groups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={0.1 * (index + 1)}
              >
                <Card className="glass-card glass-card-hover border border-border/40 shadow-md h-full flex flex-col group">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 p-6">
                    <CardTitle className="text-lg font-bold text-foreground">{group.title}</CardTitle>
                    {/* Hover bounce and rotate motion */}
                    <motion.div
                      whileHover={{ 
                        rotate: 360, 
                        y: [0, -6, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="bg-white/90 dark:bg-slate-900/95 p-2.5 rounded-xl shadow-sm border border-border/40 cursor-pointer"
                    >
                      {group.icon}
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 flex-grow flex items-center">
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill, skillIndex) => {
                        if (typeof skill === 'object') {
                          return <SkillBadge key={skillIndex} name={skill.name} subtitle={skill.subtitle} />;
                        }
                        return <SkillBadge key={skillIndex} name={skill} />;
                      })}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
