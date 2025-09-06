import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  const projects = [
    {
      title: "AI-Powered Cybersecurity Knowledge Discovery Platform",
      role: "Project Manager & Developer",
      period: "Aug 2025 – Present",
      type: "Business Analytics Capstone Project",
      description: "Leading the development of an innovative knowledge management platform that leverages AI to enhance cybersecurity operations and knowledge discovery.",
      achievements: [
        "Collaborated with external industry partner and faculty supervisor to define project objectives and deliverables",
        "Initiated the product backlog and implemented Scrum practices to enhance team alignment",
        "Serving as both project coordinator and developer, contributing to design and implementation"
      ],
      skills: ["Project Management", "Scrum", "AI/ML", "Knowledge Management", "Team Leadership"],
      imageSlides: [
        [
          { src: "AI Dashboard Overview", type: "landscape" },
          { src: "Knowledge Graph Visualization", type: "landscape" }
        ],
        [
          { src: "Mobile Interface", type: "portrait" },
          { src: "Security Analytics", type: "landscape" },
          { src: "User Profile", type: "portrait" }
        ],
        [
          { src: "Data Pipeline", type: "portrait" },
          { src: "AI Training Interface", type: "portrait" }
        ]
      ],
      links: [
        { label: "Live Demo", url: "https://example.com/demo" },
        { label: "GitHub", url: "https://github.com/edmund/project" }
      ]
    },
    {
      title: "GIC Trading Platform Enhancement",
      role: "Frontend Developer",
      period: "Sep 2024",
      type: "Hackathon Project",
      description: "Developed a web application for GIC traders to streamline instrument search and approval processes, significantly improving trading efficiency.",
      achievements: [
        "Collaborated with a team of 5 to develop a comprehensive trading platform",
        "Streamlined search and approval of 4,000 instruments across global markets",
        "Managed 400 counterparties for faster trade execution",
        "Designed and implemented a minimalistic, intuitive ReactJS frontend that reduced time-to-execution for trades"
      ],
      skills: ["ReactJS", "Frontend Development", "UI/UX Design", "Team Collaboration", "Agile Development"],
      imageSlides: [
        [
          { src: "Trading Dashboard", type: "landscape" },
          { src: "Instrument Search", type: "landscape" }
        ],
        [
          { src: "Mobile Trading App", type: "portrait" },
          { src: "Market Overview", type: "landscape" },
          { src: "User Settings", type: "portrait" }
        ]
      ],
      links: [
        { label: "View Project", url: "https://gic-trading.example.com" }
      ]
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    projects.forEach((project, projectIndex) => {
      if (project.imageSlides && project.imageSlides.length > 1) {
        const interval = setInterval(() => {
          nextImage(projectIndex, project.imageSlides.length);
        }, 4000); // Change slide every 4 seconds
        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const nextImage = (projectIndex: number, totalSlides: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalSlides
    }));
  };

  const prevImage = (projectIndex: number, totalSlides: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalSlides) % totalSlides
    }));
  };

  const leadership = {
    title: "NUS Computing Club Children Community Service Programmes Head",
    period: "Jan 2023 - Jun 2023",
    location: "Singapore",
    description: "Led educational initiatives to introduce programming concepts to young students, fostering the next generation of tech enthusiasts.",
    achievement: "Designed and taught a 4-week hands-on Python course for 10 primary school students, using mini-game projects to introduce coding concepts like data structures and functions.",
    skills: ["Teaching", "Curriculum Design", "Python", "Community Service", "Leadership"]
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Projects & Leadership
          </h2>
          
          <div className="space-y-8">
            {/* Projects */}
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card border-card-border hover:shadow-elevated transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {project.role} • {project.type}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  {project.imageSlides && (
                    <div className="mb-6">
                      <div className="relative bg-muted/30 rounded-lg h-64 overflow-hidden">
                        <div 
                          className="flex h-full transition-transform duration-500 ease-in-out"
                          style={{ 
                            transform: `translateX(-${(currentImageIndex[index] || 0) * 100}%)`,
                            width: `${project.imageSlides.length * 100}%`
                          }}
                        >
                          {project.imageSlides.map((slideImages, slideIdx) => (
                            <div 
                              key={slideIdx}
                              className="flex items-center justify-center gap-2 h-full p-4"
                              style={{ width: `${100 / project.imageSlides.length}%` }}
                            >
                              {slideImages.map((image, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  className={`
                                    flex items-center justify-center rounded-lg bg-muted/50 text-muted-foreground text-sm
                                    ${image.type === 'portrait' ? 'w-24 h-48' : 'w-48 h-32'}
                                    ${slideImages.length > 2 ? 'flex-1' : ''}
                                  `}
                                >
                                  {image.src}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                        
                        {project.imageSlides.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(index, project.imageSlides.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-smooth z-10"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => nextImage(index, project.imageSlides.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-smooth z-10"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                            
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                              {project.imageSlides.map((_, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className={`w-2 h-2 rounded-full transition-smooth ${
                                    imgIndex === (currentImageIndex[index] || 0)
                                      ? "bg-primary"
                                      : "bg-muted-foreground/50"
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, linkIndex) => (
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
                </CardContent>
              </Card>
            ))}
            
            {/* Leadership Experience */}
            <Card className="shadow-card border-card-border hover:shadow-elevated transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {leadership.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {leadership.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {leadership.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-start mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    {leadership.achievement}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {leadership.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;