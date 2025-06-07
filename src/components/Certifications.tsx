
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: "30 Days Coding Challenge",
      issuer: "HackerRank",
      type: "Programming Challenge",
      icon: "🏅"
    },
    {
      title: "Machine Learning with Python",
      issuer: "Cognitive Class",
      date: "August 2024",
      type: "Technical Certification",
      icon: "🧠"
    },
    {
      title: "Cisco Networking Basics",
      issuer: "Cisco",
      type: "Networking",
      icon: "🛡️"
    },
    {
      title: "Java Programming",
      issuer: "L&T EduTech",
      date: "June 2024",
      type: "Programming",
      icon: "🧑‍💻"
    },
    {
      title: "Deloitte Technology Job Simulation",
      issuer: "Deloitte",
      date: "March 2025",
      type: "Professional Simulation",
      icon: "💼"
    },
    {
      title: "Prompt Engineering Zero to Hero",
      issuer: "AI Course",
      date: "October 2023",
      type: "AI/ML",
      icon: "⚡"
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
      title: "Imagecon Academy Internship Certificate",
      description: "Predictive Analytics for Hourly-Based Score Estimation",
      type: "Internship Completion"
    },
    {
      title: "Infosys Springboard Internship Certificate",
      description: "Object Detection System Development",
      type: "Internship Completion"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          
          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{cert.icon}</div>
                    <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-medium text-foreground mb-2">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                    )}
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {cert.type}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Badges Earned */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Badges Earned</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0 shadow-lg">
                  <CardContent className="text-center p-6">
                    <div className="text-3xl mb-3">{badge.icon}</div>
                    <h4 className="font-semibold text-foreground mb-2">{badge.title}</h4>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internship Certificates */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Internship Certificates</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {internshipCertificates.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-3">{cert.description}</p>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-100">
                      {cert.type}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
