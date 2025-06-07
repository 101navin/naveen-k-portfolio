
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-background to-muted/30">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg font-medium text-foreground">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {edu.duration}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs">
                    {edu.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
