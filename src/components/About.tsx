import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Python", "Java", "JavaScript", "ReactJS", "VueJS",
    "Power BI", "Power Apps", "VBA", "MySQL", "Tableau",
    "Data Analytics", "Business Intelligence", "Process Optimization"
  ];

  const highlights = [
    {
      title: "GPA Excellence",
      value: "4.82/5.0",
      description: "Dean's List AY23/24 Semester 1 & 2"
    },
    {
      title: "Industry Experience",
      value: "2 Internships",
      description: "DBS Bank & Synapxe Singapore"
    },
    {
      title: "Academic Recognition",
      value: "Top Student",
      description: "CS1010S Programming Methodology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a dedicated Business Analytics student at the National University of Singapore with a passion for leveraging data to drive meaningful business outcomes. My academic journey is complemented by practical experience gained through internships at leading organizations like DBS Bank and Synapxe.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My expertise spans across data governance, business intelligence, and process automation. I've successfully designed Power BI dashboards that serve 40+ healthcare institutions and automated billing processes that reduced manual effort by 50%.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Currently, I'm working on an AI-powered cybersecurity knowledge management platform while pursuing my studies. I thrive in collaborative environments and am always eager to tackle complex analytical challenges.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="text-center shadow-card border-card-border">
                    <CardContent className="p-4">
                      <div className="text-xl font-bold text-primary mb-1">
                        {highlight.value}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-1">
                        {highlight.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {highlight.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Technical Skills
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-primary-muted text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;