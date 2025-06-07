
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      role: "Intern",
      company: "Imagecon India Pvt Ltd",
      duration: "07/2024 - 08/2024",
      location: "SALEM, INDIA",
      type: "Internship",
      description: "Done the internship about Predictive Analytics for Hourly-Based Score Estimation using machine learning",
      highlights: ["Predictive Analytics", "Machine Learning", "Data Analysis"]
    },
    {
      role: "Intern", 
      company: "Infosys Springboard",
      duration: "2024",
      location: "Online",
      type: "Virtual Internship",
      description: "Focus: Object Detection System - Completed with Certificate",
      highlights: ["Object Detection", "Computer Vision", "System Development"]
    },
    {
      role: "Cashier",
      company: "Dmart Store",
      duration: "1 Year",
      location: "Part-Time",
      type: "Work Experience",
      description: "Handled billing, customer support, and inventory coordination. Built excellent customer service skills.",
      highlights: ["Customer Service", "Billing Management", "Inventory Coordination"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-background to-muted/30">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">{exp.role}</CardTitle>
                      <p className="text-lg font-medium text-foreground">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {exp.duration}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-4">
                    {exp.type}
                  </Badge>
                  <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                        {highlight}
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

export default Experience;
