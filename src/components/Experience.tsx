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
          impact: "$1M budget approval",
          description:
            "Led 3-person intern team to deliver PMS proof-of-concept in 3 months, convincing skeptical management to approve $1M (₹7 crore) budget for production system. Architected Microsoft Teams app using ReactJS and Fluent UI, replacing 24-year legacy system with transparent goal hierarchy and feedback mechanisms.",
        },
        {
          impact: "$40K annual savings",
          description:
            "Built Next.js Asset Portal integrating Azure AD Graph with on-premise MySQL, preventing $20K (₹15 lakh) in asset loss and reducing $20K (₹12 lakh) overhead by making 2 roles redundant (1 HR, 1 IT admin). Designed algorithms alerting HR/IT on inactive devices and automatic device disabling when employees on leave.",
        },
        {
          impact: "Led intern team under pressure",
          description:
            "Manager delegated intern coordination due to strong communication and technical knowledge. Mapped code/architectural needs, split work, drove development while managing 2 interns, facing 3-month deadline and management opposition - all before finishing college.",
        },
      ],
      technologies: [
        "ReactJS",
        "Next.js",
        "Fluent UI",
        "Node.js",
        "Flask",
        "MySQL",
        "Azure AD",
        "Graph API",
        "Microsoft Teams",
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
          impact: "3-6+ months to <1 day processing",
          description:
            "Reduced loan analysis from 3-6+ months to <1 day by architecting event-driven system: S3→Queue→Spring Boot→4 parallel Python Lambdas→OpenSearch. Previously required 35 associates for 15 days to process 1000-page report at 2 pages/day. Processed ~200 reports with zero manual edits needed.",
        },
        {
          impact: "Section-specific parsing innovation",
          description:
            "Convinced skeptical management after 100 failed attempts by others. Architected custom parsing for 3 most important sections using PDFPlumber - each section got targeted logic instead of uniform processing. Built verification portal serving dual purpose: accuracy validation AND ML training data collection.",
        },
        {
          impact: "Transformed decision-making speed",
          description:
            "Automated extraction enabled searchable OpenSearch repository, eliminating 12-hour manual slide analysis. Massive resource investment just to consider lending transformed to deciding in <1 day. Created foundation for richest training data when multi-modal AI arrived.",
        },
      ],
      technologies: [
        "AWS S3",
        "AWS Lambda",
        "Spring Boot",
        "PDFPlumber",
        "OpenSearch",
        "Python",
        "EC2",
        "Event-Driven Architecture",
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
