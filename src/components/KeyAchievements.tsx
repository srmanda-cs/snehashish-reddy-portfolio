import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Zap,
  Target,
} from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "60% Workload Reduction",
      description:
        "Built Python autograding platform using Pandas, NumPy, and Sentence-Transformers NLP, reducing team workload from 20 hours required to 8 hours actual work weekly. Adopted by 13 instructors across 2 courses.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "UNC Chapel Hill",
      category: "Automation",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["60% Reduction", "13 Instructors", "AWS Lambda Ready"],
    },
    {
      title: "$1M Budget Approval",
      description:
        "Led 3-person intern team to deliver PMS proof-of-concept in 3 months, convincing skeptical management to approve $1M (₹7 crore) budget for production system replacing 24-year legacy system.",
      icon: <DollarSign className="w-8 h-8" />,
      company: "Tally",
      category: "Business Impact",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["$1M (₹7 Crore)", "3-Month Delivery", "24-Year Legacy"],
    },
    {
      title: "$40K Annual Savings",
      description:
        "Built Next.js Asset Portal integrating Azure AD Graph with on-premise MySQL, preventing $20K (₹15 lakh) in asset loss and reducing $20K (₹12 lakh) overhead by making 2 roles redundant.",
      icon: <Target className="w-8 h-8" />,
      company: "Tally",
      category: "Cost Optimization",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["$40K (₹27 Lakh)", "2 Roles Redundant", "Asset Protection"],
    },
    {
      title: "3-6+ Months to <1 Day",
      description:
        "Reduced loan analysis from 3-6+ months to <1 day by architecting event-driven system: S3→Queue→Spring Boot→4 parallel Python Lambdas→OpenSearch. Processed ~200 reports with zero manual edits.",
      icon: <Clock className="w-8 h-8" />,
      company: "Vivriti Capital",
      category: "Performance",
      gradient: "from-orange-500 to-red-500",
      metrics: ["99.9% Time Reduction", "200 Reports", "Zero Edits"],
    },
    {
      title: "Section-Specific Parsing Innovation",
      description:
        "Convinced skeptical management after 100 failed attempts by others. Architected custom parsing for 3 most important sections using PDFPlumber - each section got targeted logic instead of uniform processing.",
      icon: <Zap className="w-8 h-8" />,
      company: "Vivriti Capital",
      category: "Innovation",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["100 Failed Attempts", "Custom Logic", "ML Foundation"],
    },
    {
      title: "98% Tailoring Time Reduction",
      description:
        "Engineered 13-step intelligence-driven pipeline reducing resume tailoring from 30-40 minutes to 30 seconds. Achieved 90%+ ATS compatibility across 200+ applications with zero hallucinations.",
      icon: <Users className="w-8 h-8" />,
      company: "Jobbernaut Tailor",
      category: "AI/Automation",
      gradient: "from-teal-500 to-green-500",
      metrics: ["98% Reduction", "200+ Applications", "90%+ ATS Score"],
    },
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable impact delivered through innovative technical solutions
            and strategic problem-solving across enterprise systems.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievements.map((achievement, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-xl ${getGradientClasses(
                            achievement.gradient
                          )} text-white shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.company}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          Key Metrics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge
                              key={metricIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {achievements.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    $1M
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Budget Approved
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">
                    Workload Reduction
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Time Saved
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    200+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Reports Processed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
