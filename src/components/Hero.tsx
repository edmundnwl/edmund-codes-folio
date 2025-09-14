import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  
  const fullName = "Edmund Ng";
  const fullText = "Hi, I'm a Business Analyst!";
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 800); // Profile slides to left
    const timer2 = setTimeout(() => setAnimationStage(2), 1500); // Start typing name
    const timer3 = setTimeout(() => setAnimationStage(3), 2800); // Start typing description
    const timer4 = setTimeout(() => setAnimationStage(4), 4000); // Show skills and buttons
    const timer5 = setTimeout(() => setAnimationStage(5), 4500); // Show "view experience"
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);
  
  // Typing animation for name
  useEffect(() => {
    if (animationStage === 2) {
      setDisplayedName("");
      let index = 0;
      const nameTimer = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayedName(fullName.slice(0, index));
          index++;
        } else {
          clearInterval(nameTimer);
        }
      }, 80);
      
      return () => clearInterval(nameTimer);
    }
  }, [animationStage]);
  
  // Typing animation for description
  useEffect(() => {
    if (animationStage === 3) {
      setDisplayedText("");
      let index = 0;
      const textTimer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(textTimer);
        }
      }, 60);
      
      return () => clearInterval(textTimer);
    }
  }, [animationStage]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* Profile Image */}
              <div className={`lg:w-1/3 flex justify-center transition-all duration-1000 ${
                animationStage >= 1 ? 'lg:justify-start' : 'justify-center'
              } ${animationStage === 0 ? 'lg:translate-x-1/2' : 'lg:translate-x-0'}`}>
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-muted/50 flex items-center justify-center shadow-elevated">
                  <span className="text-muted-foreground text-lg">Profile Image</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-2/3 text-center lg:text-left">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight pb-2 lg:text-left text-center transition-opacity duration-300 ${
                  animationStage >= 2 ? 'opacity-100' : 'opacity-0'
                }`}>
                  {displayedName}<span className={animationStage === 2 ? "animate-pulse" : ""}></span>
                </h1>
            
                <p className={`text-xl md:text-2xl text-muted-foreground mb-6 transition-opacity duration-300 ${
                  animationStage >= 3 ? 'opacity-100' : 'opacity-0'
                }`}>
                  {displayedText}<span className={animationStage === 3 ? "animate-pulse" : ""}></span>
                </p>
                
                <div className={`flex flex-wrap gap-2 mb-8 lg:justify-start justify-center transition-all duration-500 ${
                  animationStage >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  {["Python", "VBA", "SQL", "Power BI", "Data Governance"].map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-primary-muted text-primary"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: animationStage >= 4 ? 'scale-in 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className={`flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-8 transition-all duration-500 ${
                  animationStage >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-elevated"
                    size="lg"
                    style={{
                      animationDelay: '200ms',
                      animation: animationStage >= 4 ? 'scale-in 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open("https://linkedin.com/in/ngwledmund", "_blank")}
                    style={{
                      animationDelay: '300ms',
                      animation: animationStage >= 4 ? 'scale-in 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open("https://github.com/edmundnwl", "_blank")}
                    style={{
                      animationDelay: '400ms',
                      animation: animationStage >= 4 ? 'scale-in 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
                
                <button
                  onClick={() => scrollToSection("experience")}
                  className={`inline-flex items-center text-muted-foreground hover:text-primary transition-smooth group ${
                    animationStage >= 5 ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transition: 'opacity 0.5s ease-out'
                  }}
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