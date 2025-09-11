import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, DollarSign, Clock, Users, Zap, Target } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "$1M+ Investment Enablement",
      description: "Aided in enabling a $1M+ investment for an enterprise-wide Performance Management System by developing and delivering a key proof-of-concept in ReactJS and Fluent UI.",
      icon: <DollarSign className="w-8 h-8" />,
      company: "Tally Solutions",
      category: "Business Impact",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["$1M+ Investment", "Enterprise System", "Proof-of-Concept"]
    },
    {
      title: "37% Cost Reduction",
      description: "Minimized asset-tracking costs by 37% by building a full-stack Next.js portal that integrated with Azure AD, Graph API, and internal inventory systems for 10,000+ employees.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "Tally Solutions",
      category: "Cost Optimization",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["37% Cost Reduction", "10,000+ Employees", "Full-Stack Portal"]
    },
    {
      title: "25% Efficiency Improvement",
      description: "Shrank manual deployment effort by 25% by enhancing the team's CI/CD pipeline with automated build triggers and deployment scripts, improving release stability for critical internal services.",
      icon: <Zap className="w-8 h-8" />,
      company: "Tally Solutions",
      category: "Process Optimization",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["25% Efficiency Gain", "CI/CD Pipeline", "Automated Deployment"]
    },
    {
      title: "99%+ Processing Time Reduction",
      description: "Contributed towards decreasing credit report processing time by 99%+ (from 3 months to 4 minutes) by building an automated document-processing pipeline using AWS Lambda, ECS, and Spring Boot microservices.",
      icon: <Clock className="w-8 h-8" />,
      company: "Vivriti Capital",
      category: "Performance",
      gradient: "from-orange-500 to-red-500",
      metrics: ["99%+ Time Reduction", "3 months → 4 minutes", "AWS Pipeline"]
    },
    {
      title: "80% Lookup Time Reduction",
      description: "Cut analyst data lookup time by 80% by engineering an indexing solution in Amazon OpenSearch, featuring faceted search and on-demand CSV export capabilities for multi-gigabyte datasets.",
      icon: <Target className="w-8 h-8" />,
      company: "Vivriti Capital",
      category: "Data Optimization",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["80% Lookup Reduction", "OpenSearch", "Multi-GB Datasets"]
    },
    {
      title: "Data Corruption Elimination",
      description: "Verified data against a rule set of 40+ business logic checks programmatically, by architecting a validation pipeline, eliminating previously common data corruption errors.",
      icon: <Users className="w-8 h-8" />,
      company: "Vivriti Capital",
      category: "Quality Assurance",
      gradient: "from-teal-500 to-green-500",
      metrics: ["40+ Business Rules", "Validation Pipeline", "Zero Corruption"]
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
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
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(achievement.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
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
                        <h4 className="text-sm font-semibold text-foreground">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$1M+</div>
                  <div className="text-sm text-muted-foreground">Investment Enabled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">37%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                  <div className="text-sm text-muted-foreground">Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Users Impacted</div>
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
