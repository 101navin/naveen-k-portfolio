import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const education = [
    {
      degree: "B.E - CSE (AI & ML)",
      institution: "Mahendra Institute of Technology",
      duration: "2022 - 2026 (Expected)",
      location: "NAMAKKAL, TAMILNADU",
      type: "Higher Education"
    },
    {
      degree: "Higher Secondary",
      institution: "Sri Gayathri Higher Secondary School",
      duration: "2021 - 2022",
      location: "SALEM",
      type: "Secondary Education"
    }
  ];

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">My Studies</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Education
              </h2>
            </ScrollReveal>
          </div>
          
          {/* Education list */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <ScrollReveal 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.15 * index}
              >
                <Card className="glass-card glass-card-hover border border-border/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-bl-full pointer-events-none" />
                  
                  <CardHeader className="p-6 pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-foreground font-bold flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-medium text-foreground/80 mt-1">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 shrink-0">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs w-max font-medium">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {edu.duration}
                        </Badge>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 md:justify-end">
                          <MapPin className="w-3.5 h-3.5 text-muted-foreground/60" />
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <Badge variant="outline" className="bg-muted text-muted-foreground text-xs font-semibold rounded-md border-border/40">
                      {edu.type}
                    </Badge>
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

export default Education;
