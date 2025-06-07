
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 }
      ]
    },
    {
      category: "Data & Databases",
      skills: [
        { name: "Advanced Excel", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Relational Databases", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Analytics", level: 90 }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem-solving", level: 95 },
        { name: "Quick Learning", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Listening", level: 90 }
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Tamil", level: "Native" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <Badge variant="outline" className="text-lg px-4 py-2 mb-2">
                      {lang.name}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
