
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated ETL Pipelines",
      description: "Improved task efficiency by 30% through automated data processing",
      impact: "30% efficiency improvement",
      tags: ["Python", "ETL", "Automation"]
    },
    {
      title: "Dyeing Process Optimization",
      description: "Python automation for dyeing process tracking and predictive job completion",
      impact: "20% operational efficiency improvement",
      tags: ["Python", "Predictive Analysis", "Process Optimization"]
    },
    {
      title: "Weekly Reconciliation Reports",
      description: "Comprehensive Excel-based reporting system using pivot tables",
      impact: "Streamlined reporting process",
      tags: ["Excel", "Pivot Tables", "Reporting"]
    },
    {
      title: "Research Report Enhancement",
      description: "Critical analysis and enhancement of research reports using SPSS",
      impact: "Improved report quality",
      tags: ["SPSS", "Statistical Analysis", "Research"]
    },
    {
      title: "Statistical Testing Analysis",
      description: "Comprehensive statistical testing on family income, grades, and self-respect relationships",
      impact: "Valuable insights discovered",
      tags: ["Statistical Testing", "Parametric Tests", "Non-parametric Tests"]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Key projects demonstrating data analysis expertise and impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-primary">Impact:</p>
                  <p className="text-sm">{project.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
