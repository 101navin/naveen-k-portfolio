import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "First Matrix Solutions Pvt Ltd",
      duration: "01/2026 - 02/2026",
      location: "SALEM, INDIA",
      type: "Internship",
      description: "Worked on their live projects to understand the project flow and involved technologies.",
      highlights: ["Web Development", "JavaScript", "Cpanel"]
    },
    {
      role: "Computer Vision Intern",
      company: "Infosys Springboard",
      duration: "2024",
      location: "Online (Virtual)",
      type: "Virtual Internship",
      description: "Developed and trained real-time object detection models. Built a functional system architecture for object bounding and classification in video streams.",
      highlights: ["Object Detection", "Computer Vision", "System Development"]
    },
    {
      role: "Part-Time Cashier",
      company: "Dmart Store",
      duration: "1 Year",
      location: "SALEM, INDIA",
      type: "Work Experience",
      description: "Managed transaction flows, resolved billing issues, and coordinated stock adjustments. Developed outstanding communication, service quality, and team efficiency.",
      highlights: ["Customer Service", "Billing Management", "Inventory Coordination"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">My Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
          </ScrollReveal>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/50 via-blue-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary -translate-x-1/2 flex items-center justify-center z-10 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>

                  {/* Spacer for Desktop Alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content Wrapper */}
                  <div className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0 md:px-6">
                    <ScrollReveal
                      direction={isEven ? "left" : "right"}
                      delay={0.2}
                    >
                      <Card className="glass-card glass-card-hover border border-border/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">

                        {/* Gradient strip accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500" />

                        <CardHeader className="p-6 pb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <div>
                              <CardTitle className="text-xl md:text-2xl text-foreground font-bold flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-primary shrink-0" />
                                {exp.role}
                              </CardTitle>
                              <p className="text-sm font-semibold text-primary/80 mt-1">{exp.company}</p>
                            </div>
                            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs w-max font-medium">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground mt-3">
                            <span className="flex items-center gap-1">
                              <Calendar size={13} />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={13} />
                              {exp.location}
                            </span>
                          </div>
                        </CardHeader>

                        <CardContent className="p-6 pt-0">
                          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.highlights.map((highlight, highlightIndex) => (
                              <Badge
                                key={highlightIndex}
                                variant="secondary"
                                className="bg-blue-500/10 text-blue-600 dark:bg-blue-500/5 dark:text-blue-400 border border-blue-500/10 text-[11px] px-2.5 py-0.5 font-medium"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>

                      </Card>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
