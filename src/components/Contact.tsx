import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, BookOpen, Award, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "naveenknaveenk189@gmail.com",
      link: "mailto:naveenknaveenk189@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/naveenk1011",
      link: "https://linkedin.com/in/naveenk1011"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/101navin",
      link: "https://github.com/101navin"
    }
  ];

  const extracurriculars = [
    { text: "Participated in Marathon (Run Against Drugs) by Rotary Club of Phoenix", icon: "🏃" },
    { text: "Kabaddi Tournament – Adhiyamaan College of Engineering", icon: "🏸" },
    { text: "Skill Based Entrepreneurship Development Programme – , Govt of Tamil Nadu", icon: "" }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">Let's Talk</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Let's Connect
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Contact Information Card */}
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <Card className="glass-card border border-border/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground font-bold flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/5 group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground text-sm">{contact.label}</p>
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm break-all font-medium"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/95 hover:to-blue-600/95 transition-all duration-300 gap-2 rounded-xl py-6 hover:scale-[1.02] active:scale-95 group font-semibold"
                      onClick={() => window.open('mailto:naveenknaveenk189@gmail.com', '_blank')}
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Extracurricular Activities Card */}
            <ScrollReveal direction="right" delay={0.2} className="h-full">
              <Card className="glass-card border border-border/40 hover:-translate-y-1.5 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground font-bold flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-500 shrink-0" />
                    Extracurriculars
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {extracurriculars.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3.5 bg-white/45 dark:bg-slate-900/30 p-3.5 rounded-xl border border-border/20 shadow-sm hover:bg-white/60 dark:hover:bg-slate-900/40 transition-colors">
                      <span className="text-2xl shrink-0 filter drop-shadow-sm">{activity.icon}</span>
                      <p className="text-foreground leading-relaxed text-sm font-medium">{activity.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Professional Training Card */}
          <ScrollReveal direction="scale" delay={0.3}>
            <Card className="glass-card border border-border/40 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary to-blue-500" />
              <CardHeader className="p-6 text-center flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl text-foreground font-bold">Professional Training</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6 pt-0">
                <h3 className="text-lg font-bold text-foreground mb-1">Q Spider</h3>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-4">Salem, India (Near New Bus Stand)</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
                  Completed specialized training modules in <strong className="text-foreground font-semibold">Java</strong>, <strong className="text-foreground font-semibold">Database Management (SQL)</strong> and <strong className="text-foreground font-semibold">Communication Skills</strong>, focusing on engineering analytics-ready applications.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Footer Copyright */}
          <ScrollReveal direction="fade" delay={0.4} className="text-center mt-20">
            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-md mx-auto">
              Thank you for visiting my portfolio. I'm excited to discuss opportunities in Data Analytics, AI/ML, or Software Engineering!
            </p>
            <p className="text-xs text-muted-foreground/55 mt-6 font-medium">
              &copy; {new Date().getFullYear()} Naveen K. All rights reserved.
            </p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
