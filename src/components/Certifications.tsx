import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from './ScrollReveal';
import { Award, Briefcase, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "30 Days Coding Challenge",
      issuer: "HackerRank",
      type: "Programming Challenge",
    },
    {
      title: "Machine Learning with Python",
      issuer: "Cognitive Class",
      date: "August 2024",
      type: "Technical Certification",
    },
    {
      title: "Cisco Networking Basics",
      issuer: "Cisco",
      type: "Networking",
    },
    {
      title: "Java Programming",
      issuer: "L&T EduTech",
      date: "June 2024",
      type: "Programming",
    },
    {
      title: "Deloitte Technology Job Simulation",
      issuer: "Deloitte",
      date: "March 2025",
      type: "Professional Simulation",
    },
    {
      title: "Prompt Engineering Zero to Hero",
      issuer: "AI Course",
      date: "October 2023",
      type: "AI/ML",
    }
  ];

  const badges = [
    {
      title: "Cisco Networking Basics",
      description: "Networking Basics",
      icon: "🛡️"
    },
    {
      title: "Uipath Automation Exploration Training",
      description: "Automation Exploration Training",
      icon: "🔧"
    },
    {
      title: "Microsoft Introduction to Artificial Intelligence",
      description: "Introduction to Artificial Intelligence",
      icon: "🤖"
    }
  ];

  const internshipCertificates = [
    {
      title: "Firts Matrix Solutions Pvt. Ltd",
      description: "Full Stack Development",
      type: "Internship Completion"
    },
    {
      title: "Infosys Springboard Internship Certificate",
      description: "Object Detection System Development",
      type: "Internship Completion"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">My Credentials</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Certifications & Achievements
              </h2>
            </ScrollReveal>
          </div>

          {/* Certifications Sub-section */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.15}>
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Professional Certifications
              </h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={0.05 * (index % 3)}
                >
                  <Card className="glass-card glass-card-hover border border-border/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center p-6 justify-between">
                    <CardHeader className="p-0 text-center flex flex-col items-center">
                      <div className="text-5xl mb-4 transform hover:scale-110 transition-transform cursor-default">{cert.icon}</div>
                      <CardTitle className="text-lg text-foreground font-bold leading-snug tracking-tight mb-2">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 flex flex-col items-center w-full">
                      <p className="font-semibold text-primary/95 text-sm mb-1">{cert.issuer}</p>
                      {cert.date && (
                        <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                      )}
                      <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/5 hover:bg-primary/20 text-xs px-2.5 py-0.5 rounded-full font-medium mt-auto">
                        {cert.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Badges Earned Sub-section */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.15}>
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-indigo-500" />
                Badges Earned
              </h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={0.1 * index}
                >
                  <Card className="glass-card border border-border/40 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent transition-all duration-300 h-full">
                    <CardContent className="text-center p-6 flex flex-col items-center justify-center h-full">
                      <div className="text-4xl mb-3 transform hover:scale-110 transition-transform cursor-default">{badge.icon}</div>
                      <h4 className="font-bold text-foreground mb-2 text-base leading-snug">{badge.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{badge.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Internship Certificates Sub-section */}
          <div>
            <ScrollReveal direction="up" delay={0.15}>
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-500" />
                Internship Certificates
              </h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {internshipCertificates.map((cert, index) => (
                <ScrollReveal
                  key={index}
                  direction={index === 0 ? "left" : "right"}
                  delay={0.2}
                >
                  <Card className="glass-card border border-border/40 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 transition-all duration-300 h-full relative overflow-hidden group">
                    <CardHeader className="p-6">
                      <CardTitle className="text-lg md:text-xl text-foreground font-bold flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        {cert.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-400 text-xs font-semibold rounded-md">
                        {cert.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
