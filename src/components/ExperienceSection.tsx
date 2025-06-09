
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Sapphire Finishing Mills Ltd.",
      period: "Sept 2023 – Present",
      role: "Data Analyst",
      achievements: [
        "Created Python-based script for fabric-dyeing process scheduling",
        "Conducted job status data analysis using Excel",
        "KPI analysis to improve operational efficiency",
        "Created weekly pivot reports (reprocess, packed orders, shortfall)",
        "Automated production plans and dispatch readiness processes"
      ],
      current: true
    },
    {
      company: "Bureau of Statistics, Punjab",
      period: "June 2022 – Aug 2022",
      role: "Statistical Analyst (Intern)",
      achievements: [
        "Statistical analysis on MICS findings (early marriage, HIV/AIDS awareness, neonatal tetanus, birth registration)",
        "Salary distribution analysis using pivot tables"
      ],
      current: false
    },
    {
      company: "Freelance",
      period: "Dec 2022 – Present",
      role: "Statistical Consultant",
      achievements: [
        "Statistical analysis for article quality reports",
        "SPSS analysis on plant species data trends and patterns"
      ],
      current: true
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            Professional journey in data analytics and statistical analysis
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-lg relative overflow-hidden">
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                    Current
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.company}</CardTitle>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
