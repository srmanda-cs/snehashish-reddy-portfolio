import {
  TrendingUp,
  Users,
  Award,
  Zap,
  Target,
  DollarSign,
  CheckCircle,
  Brain,
  Clock,
  FileCheck,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    timeReduction: 0,
    budget: 0,
    instructors: 0,
    workload: 0,
    students: 0,
    savings: 0,
    reports: 0,
    atsScore: 0,
    matchTime: 0,
    missRate: 0,
    award: 0,
    tailoringReduction: 0,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!hasAnimated.current) {
              hasAnimated.current = true;
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("impact-metrics");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      timeReduction: 99.9,
      budget: 1,
      instructors: 13,
      workload: 60,
      students: 240,
      savings: 40,
      reports: 200,
      atsScore: 90,
      matchTime: 99.9,
      missRate: 0.02,
      award: 5,
      tailoringReduction: 98,
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);

      setCounts({
        timeReduction: Number((targets.timeReduction * easeOutQuad).toFixed(1)),
        budget: Number((targets.budget * easeOutQuad).toFixed(1)),
        instructors: Math.floor(targets.instructors * easeOutQuad),
        workload: Math.floor(targets.workload * easeOutQuad),
        students: Math.floor(targets.students * easeOutQuad),
        savings: Math.floor(targets.savings * easeOutQuad),
        reports: Math.floor(targets.reports * easeOutQuad),
        atsScore: Math.floor(targets.atsScore * easeOutQuad),
        matchTime: Number((targets.matchTime * easeOutQuad).toFixed(1)),
        missRate: Number((targets.missRate * easeOutQuad).toFixed(2)),
        award: Number((targets.award * easeOutQuad).toFixed(1)),
        tailoringReduction: Math.floor(
          targets.tailoringReduction * easeOutQuad
        ),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);
  };

  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: `${counts.timeReduction}%`,
      label: "Time Reduction",
      description: "Loan processing: 6 months → <1 day",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: `$${counts.budget}M+`,
      label: "Budget Approvals",
      description: "Systems funded after PoC delivery",
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: `${counts.students}`,
      label: "Students Managed",
      description: "Automated grading for 240 students",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: `${counts.workload}%`,
      label: "Workload Reduction",
      description: "Team efficiency: 20hrs → 8hrs weekly",
      color: "from-purple-400 to-pink-600",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: `$${counts.savings}K`,
      label: "Annual Savings",
      description: "Asset portal preventing loss & overhead",
      color: "from-emerald-400 to-teal-600",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      value: `${counts.reports}`,
      label: "Reports Processed",
      description: "Zero manual edits needed",
      color: "from-indigo-400 to-blue-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: `${counts.atsScore}%+`,
      label: "ATS Compatibility",
      description: "Jobbernaut automated resume tailoring",
      color: "from-pink-400 to-rose-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: `${counts.tailoringReduction}%`,
      label: "Tailoring Speed",
      description: "40 minutes → 30 seconds per resume",
      color: "from-orange-400 to-red-600",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: `${counts.matchTime}%`,
      label: "Matching Speed",
      description: "5 days → 100ms for student-professor",
      color: "from-cyan-400 to-blue-600",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      value: `${counts.missRate}%`,
      label: "Miss Rate",
      description: "Cervical cancer detection accuracy",
      color: "from-violet-400 to-purple-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: `$${counts.award}K`,
      label: "Award Received",
      description: "Recognition for technical excellence",
      color: "from-amber-400 to-yellow-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: `${counts.instructors}`,
      label: "Instructors Adoption",
      description: "Autograding platform across 2 courses",
      color: "from-sky-400 to-blue-600",
    },
  ];

  return (
    <section
      id="impact-metrics"
      className="py-16 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Measurable{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering quantifiable results that drive business value and
            operational excellence
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`relative group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <div className="text-white">{metric.icon}</div>
                </div>

                {/* Metric Value */}
                <div className="mb-2">
                  <div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                  >
                    {metric.value}
                  </div>
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-400 leading-relaxed">
                  {metric.description}
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel Layout */}
        <div className="lg:hidden relative px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {metrics.map((metric, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2"
                >
                  <div className="h-full min-h-[280px] md:min-h-[320px]">
                    <div
                      className={`relative group h-full ${
                        isVisible ? "animate-scale-in" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Card */}
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 h-full hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                        {/* Icon with gradient background */}
                        <div
                          className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                        >
                          <div className="text-white">{metric.icon}</div>
                        </div>

                        {/* Metric Value */}
                        <div className="mb-1 md:mb-2">
                          <div
                            className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                          >
                            {metric.value}
                          </div>
                        </div>

                        {/* Label */}
                        <div className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                          {metric.label}
                        </div>

                        {/* Description */}
                        <div className="text-xs md:text-sm text-gray-400 leading-relaxed">
                          {metric.description}
                        </div>

                        {/* Hover glow effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 md:w-12 md:h-12" />
            <CarouselNext className="w-10 h-10 md:w-12 md:h-12" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {metrics.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/50 transition-all"
                aria-label={`Metric ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-gray-400 text-lg">
            <span className="text-primary font-semibold">
              Production-grade systems
            </span>{" "}
            that transform operations and drive measurable ROI
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
