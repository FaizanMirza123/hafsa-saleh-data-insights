
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "Data Visualization",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Excel", level: 95 },
        { name: "Dashboards", level: 80 }
      ]
    },
    {
      category: "Statistical Tools",
      skills: [
        { name: "SPSS", level: 90 },
        { name: "Statistical Analysis", level: 95 },
        { name: "Predictive Analysis", level: 80 }
      ]
    },
    {
      category: "Enterprise Systems",
      skills: [
        { name: "SAP", level: 70 },
        { name: "Data Wrangling", level: 85 },
        { name: "Data Cleaning", level: 90 }
      ]
    }
  ];

  const achievements = [
    'Completed "Python for Data Science" (Great Learning)',
    'Completed "Python Master Class" (Udemy)',
    'Winner of Chess and Badminton (Inter-college sports for women)'
  ];

  const softSkills = [
    'Leadership', 'Management Skills', 'Critical Thinking', 
    'Tech Savvy', 'Problem Solving', 'Communication'
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Achievements</h2>
          <p className="text-lg text-muted-foreground">
            Technical expertise and professional accomplishments
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Achievements & Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
