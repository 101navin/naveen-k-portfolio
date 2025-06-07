
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/aad05d85-b6a4-4a54-9cd7-2242525fb642.png"
                      alt="Naveen K - Profile"
                      className="w-44 h-44 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-left space-y-6">
              <div className="space-y-4">
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
      </div>
    </section>
  );
};

export default About;
