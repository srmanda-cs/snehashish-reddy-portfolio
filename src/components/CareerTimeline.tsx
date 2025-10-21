import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CareerTimeline = () => {
  const timeline = [
    {
      type: "work",
      title: "Software Development Engineer (Platform)",
      organization: "UNC Chapel Hill",
      location: "Chapel Hill, NC",
      period: "Aug 2025 – Present",
      current: true,
      description:
        "Building Python autograding platform with NLP-powered name matching for 240 students across 2 course sections. Reduced team workload 60% through automation and process improvements.",
      highlights: [
        "Engineered multi-stage algorithm: exact match, fuzzy matching, semantic similarity via Sentence-Transformers embeddings",
        "Automated 360 grade updates per GTA per class, eliminating 36 minutes daily manual work",
        "Tool adopted by 13 instructors across 2 courses, positioned for university-wide AWS Lambda deployment",
        "Championed Jira and Trello adoption for 10-person team, reducing grading time from 5-6 minutes to 30 seconds per assignment",
        "Received $5,000 award for exceptional contribution",
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
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "education",
      title: "Master of Science in Computer Science",
      organization: "UNC Chapel Hill",
      location: "Chapel Hill, NC",
      period: "Aug 2024 – May 2026",
      current: true,
      description: "GPA: 4.0/4.0 | Focus on Deep Learning, NLP, and Systems",
      highlights: [
        "Efficient Deep Learning",
        "Secure and Reliable Systems",
        "Natural Language Processing",
        "Hardware Security",
      ],
      technologies: [],
      color: "from-purple-500 to-pink-500",
    },
    {
      type: "work",
      title: "Software Development Engineer (Internal Systems)",
      organization: "Tally",
      location: "Bengaluru, India",
      period: "Jan 2024 – May 2024",
      current: false,
      description:
        "Led 3-person intern team building PMS PoC and Asset Portal. Secured ₹7 crore (~$1M) budget approval for production system and ₹27 lakh (~$40K) annual savings.",
      highlights: [
        "Architected Microsoft Teams app using ReactJS and Fluent UI, replacing 24-year legacy system with transparent goal hierarchy",
        "Built Next.js Asset Portal integrating Azure AD Graph with on-premise MySQL device data",
        "Designed algorithms alerting HR/IT on inactive devices, automatic disabling when employee on leave via MAC address",
        "Prevented ₹15 lakh (~$20K) asset loss and reduced ₹12 lakh (~$20K) overhead by making 2 roles redundant",
        "Managed 2 interns while coordinating with stakeholders under 3-month deadline",
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
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "work",
      title: "Software Development Engineer (Financial Systems)",
      organization: "Vivriti Capital",
      location: "Chennai, India",
      period: "Jul 2023 – Aug 2023",
      current: false,
      description:
        "Architected event-driven PDF processing system reducing loan analysis from 3-6+ months to <1 day. Processed ~200 reports with zero manual edits needed.",
      highlights: [
        "Built S3→Queue→Spring Boot→4 parallel Python Lambdas→OpenSearch pipeline using PDFPlumber for custom parsing",
        "Designed section-specific logic for 3 most important sections instead of uniform processing (key innovation after 100 failed attempts)",
        "Eliminated 35 associates × 15 days manual work (2 pages/day per associate for 1000-page reports)",
        "Built verification portal serving dual purpose: accuracy validation AND ML training data collection",
        "Enabled same-day lending decisions, transforming process from considering to deciding",
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
      color: "from-yellow-500 to-orange-500",
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      organization: "Amrita Vishwa Vidyapeetham",
      location: "India",
      period: "Oct 2020 – Jun 2024",
      current: false,
      description:
        "GPA: 8.86/10.0 | First Class with Distinction - highest academic honor",
      highlights: [
        "Cervical Cancer Detection: Built 3-stage ML pipeline (DarkNet→UMAP→SVM) achieving 0.02% miss rate on 10,000-slide test set",
        "Strong foundation in algorithms, data structures, and systems programming",
      ],
      technologies: [],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      id="career-timeline"
      className="py-16 px-4 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Career{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A progression of impactful roles and continuous learning from 2020
            to present
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50"></div>

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative scroll-animate ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                }`}
              >
                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${
                      item.color
                    } shadow-lg ${
                      item.current ? "animate-pulse ring-4 ring-primary/30" : ""
                    }`}
                  ></div>
                </div>

                {/* Content Card */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } relative`}
                >
                  <Card className="card-gradient border-primary/20 shadow-elevated card-hover-lift glow-on-hover group">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}
                        >
                          {item.type === "work" ? (
                            <Briefcase className="w-6 h-6" />
                          ) : (
                            <GraduationCap className="w-6 h-6" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <Badge
                              variant={item.current ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {item.type === "work" ? "Work" : "Education"}
                            </Badge>
                            {item.current && (
                              <Badge variant="default" className="text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors mb-1">
                            {item.title}
                          </h3>
                          <p className="text-primary font-semibold">
                            {item.organization}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                            <span>•</span>
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        {item.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.color} mt-1.5 flex-shrink-0`}
                            ></div>
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      {item.technologies.length > 0 && (
                        <div className="pt-4 border-t border-border">
                          <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((tech, tIndex) => (
                              <Badge
                                key={tIndex}
                                variant="secondary"
                                className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <p className="text-gray-400 text-lg">
            <span className="text-primary font-semibold">
              Continuous growth
            </span>{" "}
            through challenging roles and impactful projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
