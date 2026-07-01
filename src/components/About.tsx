import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from './ScrollReveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 1, suffix: "+", label: "Years Experience", desc: "Part-time & Internships" },
    { value: 5, suffix: "+", label: "Key Projects", desc: "Web Technologies & AI Concepts" },
    { value: 10, suffix: "+", label: "Certifications", desc: "HackerRank, Cisco, L&T" },
    { value: 15, suffix: "+", label: "Skills Mastered", desc: "Languages & Tools" }
  ];

  const descText = "I'm a B.E CSE (AI & ML) student with hands-on experience in Reactjs, Python, SQL, and Machine Learning. I've worked on real-time projects and internships, gaining practical skills in web developments, model building and problem-solving. Along with my technical expertise, I've built strong communication and teamwork abilities through workshops and collaborative projects.";

  // Split description into character spans for a beautiful stagger reveal
  const splitDesc = descText.split("").map((char, index) => (
    <span key={index} className="about-desc-char inline-block" style={{ whiteSpace: 'pre' }}>
      {char}
    </span>
  ));

  useGSAP(() => {
    // 1. Stagger letter reveal for description
    gsap.fromTo(".about-desc-char",
      { opacity: 0, y: 8 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.006, // extremely fluid write-in
        duration: 0.4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about-desc-container",
          start: "top 85%",
          once: true,
        }
      }
    );

    // 2. Fade Up on Scroll for the 4 stats cards
    gsap.fromTo(".about-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-cards-grid",
          start: "top 85%",
          once: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">My Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
          </ScrollReveal>

          <div className="about-desc-container max-w-5xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {splitDesc}
            </p>
          </div>

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
        <div ref={ref} className="about-cards-grid max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="about-card w-full">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
