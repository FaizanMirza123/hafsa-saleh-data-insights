
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning data into insights that drive business decisions and operational excellence.
          </p>
        </div>
        
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Education</CardTitle>
            <CardDescription>Academic Background</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor (Honors) in Statistics</h3>
              <p className="text-muted-foreground mb-2">
                College of Statistical Sciences, The Punjab University, Lahore
              </p>
              <p className="font-medium text-primary mb-3">CGPA: 3.45/4.0</p>
              <div>
                <p className="font-medium mb-2">Key Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Probability', 'Time Series', 'Applied Econometrics', 
                    'Statistical Inference', 'Experimental Design', 'Calculus',
                    'Categorical Analysis', 'Programming'
                  ].map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1 bg-muted text-sm rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
