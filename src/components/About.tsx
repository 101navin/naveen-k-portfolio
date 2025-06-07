
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a final-year B.E-CSE (AI & ML) student with hands-on experience in Machine Learning, Python, and Data Analytics. I've completed multiple internships and real-time projects, participated in technical workshops, and developed strong skills in both tech and communication.
              </p>
              
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-blue-600/10 border-l-4 border-primary">
                <blockquote className="text-xl font-medium text-foreground italic">
                  "Curious mind, fast learner, and a believer in lifelong learning."
                </blockquote>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
