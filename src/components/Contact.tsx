import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nwledmund@gmail.com",
      action: () => window.open("mailto:nwledmund@gmail.com"),
      color: "text-muted-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ngwledmund",
      action: () => window.open("https://linkedin.com/in/ngwledmund", "_blank"),
      color: "text-accent"
    },
    {
      icon: Github,
      label: "Github",
      value: "github.com/edmundnwl",
      action: () => window.open("https://github.com/edmundnwl", "_blank"),
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-10 text-primary">
            Let's Connect
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 lg:gap-6 mb-4 lg:mb-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:justify-between">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index} 
                  className={`shadow-card border-card-border hover:shadow-elevated transition-smooth ${
                    contact.action ? 'cursor-pointer hover:border-accent' : ''
                  }`}
                  onClick={contact.action || undefined}
                >
                  <CardContent className="p-1 lg:p-6 text-center">
                    <div className={`w-12 h-12 rounded-full lg:bg-muted flex items-center justify-center mx-auto lg:mb-4 ${contact.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <h3 className="hidden lg:block font-medium text-foreground mb-2">
                      {contact.label}
                    </h3>
                    
                    <p className="hidden lg:block text-sm text-muted-foreground break-all">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;