import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Ops COO Intern – Data Excellence",
      company: "DBS Bank Singapore",
      location: "Singapore",
      period: "May 2025 - Aug 2025",
      achievements: [
        "Co-designed and documented a new Ops Data Issue Detection and Handling Framework, creating process diagrams and step-by-step guides to align stakeholders.",
        "Led a data discovery initiative to explore proactive data issue detection, processing and cleaning user-logged ticket data from multiple channels using Excel and VBA for analysis with DBS-GPT.",
        "Designed, tested, and iteratively refined a Data Issue Identification Prompt for DBS-GPT, improving accuracy and usability for identifying potential data issues.",
        "Supported Data Governance activities, including reviewing and validating 3,000 attributes across 250 datasets, ensuring compliance with the Bank's standards."
      ],
      skills: ["Data Governance", "Process Design", "VBA", "Excel", "AI Integration"]
    },
    {
      title: "Business Analyst Intern – Cloud Business Office",
      company: "Synapxe Singapore",
      location: "Singapore", 
      period: "May 2024 - Oct 2024",
      achievements: [
        "Developed Power BI dashboards for daily use by operations teams, department directors, and external project managers across 40 public healthcare institutions, enabling visualization of Healthcare Commercial Cloud (HCC) expenditure for 100 projects.",
        "Supported budget tracking and cost optimization for $3 million in yearly billing through comprehensive data visualization and reporting.",
        "Automated a portion of the monthly billing process using VBA in Excel, reducing manual effort by 50% and streamlining operations for the team."
      ],
      skills: ["Power BI", "Data Visualization", "Process Automation", "VBA", "Healthcare Analytics"]
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "National University of Singapore",
      location: "Singapore", 
      period: "Aug 2023 - May 2024",
      achievements: [
        "CS2040: Data Structures and Algorithms (Jan 2024 - May 2024); Attained student feedback rating of 4.6/5; Conducted weekly lab sessions for a class of 24 students on fundamental data structures and key algorithms, resulting in improved comprehension and practical implementation of these concepts.",
        "BT2102: Data Management and Visualization (Aug 2023 - Dec 2023); Facilitated weekly tutorials for 10 students covering ER modelling, data querying with MySQL, and data visualization using Tableau, helping students build practical skills in database management and data-driven storytelling."
      ],
      skills: ["ER Modeling", "Tableau", "MySQL", "Java", "Data Structures", "Algorithms", "Data Visualization", "Teaching"]
    }
  ];

  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4 mt-10 lg:mb-10 text-primary">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card border-card-border hover:shadow-elevated transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 lg:gap-4">
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-primary mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-base lg:text-lg font-medium text-foreground">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 text-sm lg:text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* <ul className="space-y-3 mb-6"> */}
                  <ul className="hidden lg:block space-y-3 mb-6">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-justify">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-xs lg:text-xs border-accent text-accent"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Experience;