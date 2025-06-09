
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hafsa Saleh
          </h1>
          
          <div className="text-xl md:text-2xl text-primary font-medium">
            Data Analyst
          </div>
          
          <div className="text-lg text-muted-foreground">
            Lahore, Pakistan
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dynamic and result-oriented data analyst skilled in Python, critical thinking, 
            and transforming complex data into actionable insights. Experienced in production 
            planning, reporting, and statistical analysis with a tech-savvy approach and leadership qualities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="min-w-[200px]"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
              <a href="mailto:hafsa.saleh1821@gmail.com" className="hover:text-primary transition-colors">
                hafsa.saleh1821@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <span>+923044762001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
