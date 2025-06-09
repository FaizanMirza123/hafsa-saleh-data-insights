
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Contact } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to collaborate or discuss data analytics opportunities? Let's connect!
          </p>
        </div>
        
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:hafsa.saleh1821@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hafsa.saleh1821@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Contact className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground">+923044762001</p>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-muted-foreground">Lahore, Pakistan</p>
            </div>
            
            <div className="text-center pt-6">
              <Button 
                size="lg" 
                className="min-w-[200px]"
                onClick={() => window.location.href = 'mailto:hafsa.saleh1821@gmail.com?subject=Hello Hafsa - Let\'s Connect!'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;
