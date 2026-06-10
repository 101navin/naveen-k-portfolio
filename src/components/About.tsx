import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from './ScrollReveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 1, suffix: "+", label: "Years Experience", desc: "Part-time & Internships" },
    { value: 5, suffix: "+", label: "Key Projects", desc: "ML, CV & Web Systems" },
    { value: 10, suffix: "+", label: "Certifications", desc: "HackerRank, Cisco, L&T" },
    { value: 15, suffix: "+", label: "Skills Mastered", desc: "Languages, Tools & ML" }
  ];

  return (
    <section id="about" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">My Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2} className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a final-year B.E CSE (AI & ML) student with hands-on experience in Java, Python, SQL, Advanced Excel, and Machine Learning. I've worked on real-time projects and internships, gaining practical skills in data analysis, model building, and problem-solving. Along with my technical expertise, I've built strong communication and teamwork abilities through workshops and collaborative projects.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={0.3} className="max-w-2xl mx-auto">
            <Card className="glass-card border-l-4 border-l-primary shadow-md p-6">
              <CardContent className="p-0">
                <blockquote className="text-xl font-medium text-foreground italic leading-relaxed">
                  "Curious mind, fast learner, and a believer in lifelong learning."
                </blockquote>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 * index}
              className="w-full"
            >
              <Card className="glass-card glass-card-hover border border-border/40 text-center p-6 h-full flex flex-col justify-center">
                <CardContent className="p-0 space-y-2">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary flex items-center justify-center">
                    {inView ? (
                      <CountUp start={0} end={stat.value} duration={1.5} />
                    ) : (
                      <span>0</span>
                    )}
                    <span>{stat.suffix}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">{stat.label}</h3>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
