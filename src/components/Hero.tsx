import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimationStage(1), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-subtle">
      <div className="container mx-auto px-0">
        <div className="max-w-6xl mx-auto">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-12">
              {/* Profile Image */}
              <div className={`flex justify-center transition-all duration-1000 ease-out ${
                animationStage >= 1 ? 'lg:justify-start' : 'justify-center'
              }`}>
                <div className="mt-0 lg:mt-0 w-3/5 aspect-square min-w-[96px] min-h-[96px] max-w-[320px] max-h-[320px] lg:w-80 lg:h-80 rounded-full bg-muted/50 flex items-center justify-center shadow-elevated overflow-hidden">
                  <img
                    src="/PFP.jpg"
                    alt="Edmund Ng"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-1000 ease-out ${
                animationStage >= 1 ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <p className="text-4xl md:text-6xl lg:text-7xl lg:-ml-[3px] font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight lg:pb-2 padding-b-5">
                  Edmund Ng
                </p>
                <p className="text-lg md:text-2xl text-muted-foreground mb-3 lg:mb-4">
                  Hi, I'm a Business Analyst!
                </p>
                <div className="flex flex-wrap gap-2 mb-3 justify-center lg:justify-start px-6 lg:px-0">
                  {["Python", "VBA", "SQL", "Power BI", "Data Governance"].map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="text-xs lg:text-xs bg-primary-muted text-primary hover:bg-primary-muted"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                {/* <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"> */}
                <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mb-2">
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-elevated lg:px-6 lg:py-4 px-3 py-2"
                    // size="lg"
                  >
                    <Mail className="lg:mr-2 h-5 w-5" />
                    <span className="hidden lg:inline">Get In Touch</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open("https://linkedin.com/in/ngwledmund", "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open("https://github.com/edmundnwl", "_blank")}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <span className="mr-2">View my experience</span>
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-smooth" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;