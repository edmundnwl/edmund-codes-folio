import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Download } from "lucide-react";

const Hero = () => {
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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-muted/50 flex items-center justify-center shadow-elevated">
                <span className="text-muted-foreground text-lg">Profile Image</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Edmund Ng
              </h1>
          
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Business Analytics Student & Data Professional
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Passionate about transforming data into actionable insights. Currently pursuing Business Analytics at NUS with hands-on experience in data governance, business intelligence, and process optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-8">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-elevated"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => window.open("https://linkedin.com/in/ngwledmund", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
          
              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-smooth group"
              >
                <span className="mr-2">Learn more about me</span>
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-smooth" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;