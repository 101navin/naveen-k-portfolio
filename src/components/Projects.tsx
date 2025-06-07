
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Predictive Analytics for Hourly-Based Score Estimation",
      duration: "July 2024 - August 2024",
      description: "Project using machine learning algorithms to predict student scores based on hourly patterns. Implemented various ML models to analyze study patterns and forecast academic performance.",
      technologies: ["Machine Learning", "Python", "Data Analytics", "Predictive Modeling"],
      type: "Internship Project"
    },
    {
      title: "Object Detection System",
      duration: "2024",
      description: "Implemented real-time object detection with model training and web dashboard interface. Created a comprehensive system for detecting and classifying objects in real-time video streams.",
      technologies: ["Computer Vision", "Deep Learning", "Web Development", "Dashboard"],
      type: "Development Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-primary mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="mb-4">
                        {project.type}
                      </Badge>
                      <p className="text-muted-foreground mb-4">{project.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
