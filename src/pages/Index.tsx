
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Contact, Home, User, FileText, Projector, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>
        
        <section id="about" className="py-20">
          <AboutSection />
        </section>
        
        <section id="experience" className="py-20 bg-muted/30">
          <ExperienceSection />
        </section>
        
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>
        
        <section id="skills" className="py-20 bg-muted/30">
          <SkillsSection />
        </section>
        
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
