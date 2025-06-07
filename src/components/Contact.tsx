
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "naveenknaveenk189@gmail.com",
      link: "mailto:naveenknaveenk189@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/naveenk1011",
      link: "https://linkedin.com/in/naveenk1011"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/101navin",
      link: "https://github.com/101navin"
    }
  ];

  const extracurriculars = [
    "🏃 Participated in Marathon (Run Against Drugs) by Rotary Club of Phoenix",
    "🏸 Kabaddi Tournament – Adhiyamaan College of Engineering",
    "📢 Workshop on Digital Marketing – RP Sarathy College, Salem"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <a 
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300"
                    onClick={() => window.open('mailto:naveenknaveenk189@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Extracurricular Activities */}
            <Card className="bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Extracurricular Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {extracurriculars.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-2xl">{activity.slice(0, 2)}</div>
                      <p className="text-foreground leading-relaxed">{activity.slice(3)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Professional Training</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Next Technology, Salem</h3>
              <p className="text-muted-foreground mb-2">(Near New Bus Stand)</p>
              <p className="text-foreground">Training in Python, Java, Excel, and Database Management</p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Thank you for visiting my portfolio. I'm excited to discuss opportunities in Data Analytics, AI/ML, or Software Engineering!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
