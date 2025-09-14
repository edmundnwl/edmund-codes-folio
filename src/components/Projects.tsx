import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      title: "GIC Trading Platform Enhancement",
      role: "Frontend Developer",
      period: "Sep 2024",
      type: "Hackathon Project",
      description: "Web application for GIC traders to streamline instrument search and approval processes, significantly improving trading efficiency.",
      achievements: [
        "Collaborated with a team of 5 to develop a comprehensive trading platform",
        "Streamlined search and approval of 4,000 instruments across global markets",
        "Managed 400 counterparties for faster trade execution",
        "Designed and implemented a minimalistic, intuitive ReactJS frontend that reduced time-to-execution for trades"
      ],
      skills: ["ReactJS", "Frontend Development"],
      // links: [
      //   { label: "View Project", url: "https://gic-trading.example.com" }
      // ]
    },
    {
      title: "WeFriends – Mental Wellness Web App",
      role: "Project Manager & Developer",
      period: "Mar 2024 – May 2024",
      type: "Application Systems Development for Business Analytics",
      description: "Mental wellness web application to improve access to mental health resources.",
      achievements: [
        "Partnered with a team of 5 using Scrum methodology",
        "Developed a VueJS frontend with Firebase backend"
      ],
      skills: ["VueJS", "Frontend Development", "UI/UX Design", "Firebase", "Scrum"],
      links: [
        { label: "Live Demo", url: "https://wefriends-d7032.web.app/" },
        { label: "GitHub", url: "https://github.com/edmundnwl/WeFriends" }
      ]
    },
    {
      title: "RaveNUS",
      role: "Frontend Developer",
      period: "May 2023 – Jul 2023",
      type: "NUS Orbital",
      description: "Food recommendation web app for NUS students providing personalized recommendations based on location, timetable uploads, and user reviews.",
      achievements: [
        "Spearheaded integration of the ReactJS frontend with Firebase backend to enable seamless data flow and user personalization",
        "Implemented user review features and timetable-based matching to enhance recommendation relevance",
        "Deployed the application to production, ensuring stability and scalability for a student user base"
      ],
      skills: ["ReactJS", "Firebase", "Figma", "Frontend Development", "UI/UX Design"],
      links: [
        { label: "Live Demo", url: "https://ravenus.vercel.app/" },
        { label: "Github", url: "https://github.com/edmundnwl/RaveNUS" }
      ]
    },
    {
      title: "LifeHack 2023 – Offun",
      role: "Developer",
      period: "May 2023",
      type: "Hackathon Project",
      description: "Social platform for the office.",
      achievements: [
        "Winner of Best Plot Twist Award for enhancing awareness of phishing risks through a scam advertisement feature, temporarily disabling users' accounts upon interaction.",
        "Worked in a team of 4 to develop a company-specific social networking platform using Python Flask and SQLite, allowing employees to connect and interact within a secure environment."
      ],
      skills: ["Python"],
      links: [
        { label: "Github", url: "https://github.com/edmundnwl/LifeHack-2023" }
      ]
    }
  ];

  const leadership = {
    title: "NUS Computing Club Children Community Service Programmes Head",
    role: "Community Leader",
    type: "Leadership Experience",
    period: "Jan 2023 - Jun 2023",
    description: "Led educational initiatives to introduce programming concepts to young students, fostering the next generation of tech enthusiasts.",
    achievements: [
      "Designed and taught a 4-week hands-on Python course for 10 primary school students, using mini-game projects to introduce coding concepts like data structures and functions."
    ],
    skills: ["Teaching", "Curriculum Design", "Python", "Community Service", "Leadership"],
    links: [
        { label: "GitHub", url: "https://github.com/edmundnwl/codecamp23" }
      ]
  };
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % (projects.length + 1)); // +1 for leadership
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length + 1) % (projects.length + 1));
  };
  
  const allItems = [...projects, leadership];
  const currentItem = allItems[currentProject];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Projects & Leadership
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${
                currentProject === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
              }`}
              onClick={prevProject}
              disabled={currentProject === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${
                currentProject === allItems.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
              }`}
              onClick={nextProject}
              disabled={currentProject === allItems.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            {/* Card */}
            <div className="mx-16 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {allItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="shadow-card border-card-border min-h-[400px] flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-primary mb-2">
                              {item.title}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <span className="text-sm text-muted-foreground">
                                {item.role} • {item.type}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.period}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <div className="flex-1">
                          {item.achievements && (
                            <ul className="space-y-2 mb-6">
                              {item.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start">
                                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm leading-relaxed text-justify">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.skills.map((skill, skillIndex) => (
                              <Badge 
                                key={skillIndex}
                                variant="outline"
                                className="border-primary text-primary text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          {item.links && item.links.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {item.links.map((link, linkIndex) => (
                                <Button
                                  key={linkIndex}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => window.open(link.url, "_blank")}
                                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                                >
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  {link.label}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {allItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentProject
                      ? 'bg-primary scale-110'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;