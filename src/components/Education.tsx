import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "National University of Singapore",
      degree: "Bachelor of Science in Business Analytics (Honours)",
      period: "Aug 2022 - May 2026",
      location: "Singapore",
      gpa: "4.81/5.0",
      honors: [
        "3 x Dean's List",
        "Top Student: CS1010S Programming Methodology AY22/23 Semester 1"
      ],
      coursework: [
        "Object Oriented Programming",
        "Data Management and Visualisation", 
        "Data Structures and Algorithms",
        "Data Engineering",
        "Probability and Statistics",
        "Discrete Structures",
        "Feature Engineering for Machine Learning"
      ]
    },
    {
      institution: "The Hong Kong Polytechnic University",
      degree: "Student Exchange Programme",
      period: "Jan 2025 - May 2025",
      location: "Hong Kong",
      coursework: [
        "Big Data Analytics",
        "Emerging Topics in Fintech",
        "Information Systems Audit and Control"
      ]
    }
  ];

  return (
    <section id="education" className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4 mt-10 lg:mb-10 text-primary">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card border-card-border hover:shadow-elevated transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 lg:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">
                        {edu.institution}
                      </h3>
                      <h4 className="text-base lg:text-lg font-medium text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      
                      {edu.gpa && (
                        <div className="flex items-center gap-4">
                          <Badge className="bg-accent text-accent-foreground">
                            <Award className="h-3 w-3 mr-1" />
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {edu.honors && (
                    <div className="mb-6">
                      {/* <h5 className="font-medium text-foreground mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-accent" />
                        Academic Honors
                      </h5> */}
                      <ul className="space-y-2">
                        {edu.honors.map((honor, honorIndex) => (
                          <li key={honorIndex} className="text-sm flex items-start">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {honor}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="hidden lg:block">
                    <h5 className="font-medium text-foreground mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-primary" />
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex}
                          variant="outline"
                          className="border-primary-light text-primary text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
