import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "UNC Chapel Hill",
      position: "Software Development Engineer (Platform)",
      location: "Chapel Hill, NC",
      duration: "Aug 2025 – Present",
      logo: "U",
      achievements: [
        {
          impact: "60% workload reduction",
          description:
            "Built Python autograding platform using Pandas, NumPy, and Sentence-Transformers NLP, reducing team workload from 20 hours required to 8 hours actual work weekly.",
        },
        {
          impact: "13 instructors adoption",
          description:
            "Tool adopted by 13 instructors across 2 courses. Positioned for university-wide AWS Lambda deployment.",
        },
        {
          impact: "$5,000 award",
          description:
            "Received $5,000 award after reaching out about tuition costs. Championed Jira and Trello adoption for 10-person team.",
        },
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Sentence-Transformers",
        "Canvas API",
        "Jira",
        "Trello",
        "AWS Lambda",
      ],
    },
    {
      company: "Tally",
      position: "Software Development Engineer (Internal Systems)",
      location: "Bengaluru, KA, IN",
      duration: "Jan 2024 – May 2024",
      logo: "T",
      achievements: [
        {
          impact: "$1M+ investment enablement",
          description:
            "Aided in enabling a $1M+ investment for an enterprise-wide Performance Management System by developing and delivering a key proof-of-concept in ReactJS, and Fluent UI.",
        },
        {
          impact: "37% cost reduction",
          description:
            "Minimized asset-tracking costs by 37% by building a full-stack Next.js portal that integrated with Azure AD, Graph API, and internal inventory systems for 10,000+ employees.",
        },
        {
          impact: "25% efficiency improvement",
          description:
            "Shrank manual deployment effort by 25% by enhancing the team's CI/CD pipeline with automated build triggers and deployment scripts, improving release stability for critical internal services.",
        },
      ],
      technologies: [
        "ReactJS",
        "Next.js",
        "Fluent UI",
        "Azure AD",
        "Graph API",
        "CI/CD",
      ],
    },
    {
      company: "Vivriti Capital",
      position: "Software Development Engineer (Financial Systems)",
      location: "Chennai, KA, IN",
      duration: "Jul 2023 – Aug 2023",
      logo: "V",
      achievements: [
        {
          impact: "99%+ processing time reduction",
          description:
            "Contributed towards decreasing credit report processing time by 99%+ (from 3 months to 4 minutes) by building an automated document-processing pipeline using AWS Lambda, ECS, and Spring Boot microservices.",
        },
        {
          impact: "80% lookup time reduction",
          description:
            "Cut analyst data lookup time by 80% by engineering an indexing solution in Amazon OpenSearch, featuring faceted search and on-demand CSV export capabilities for multi-gigabyte datasets.",
        },
        {
          impact: "Data corruption elimination",
          description:
            "Verified data against a rule set of 40+ business logic checks programmatically, by architecting a validation pipeline, eliminating previously common data corruption errors.",
        },
      ],
      technologies: [
        "AWS Lambda",
        "ECS",
        "Spring Boot",
        "Amazon OpenSearch",
        "Python",
        "Microservices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building production-grade systems and delivering measurable business
            impact through innovative technical solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-background shadow-lg">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div className="relative">
                  {/* Desktop: Normal stacked layout */}
                  <div className="hidden md:block space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold text-lg">
                            {achievement.impact}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: Carousel layout */}
                  <div className="md:hidden">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <CarouselItem
                            key={achIndex}
                            className="pl-2 basis-full"
                          >
                            <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                  <TrendingUp className="w-4 h-4 text-primary" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-primary font-semibold text-lg">
                                  {achievement.impact}
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                      {exp.achievements.map((_, achIndex) => (
                        <div
                          key={achIndex}
                          className="w-2 h-2 rounded-full bg-muted-foreground/30"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
