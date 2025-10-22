import { useState } from "react";
import { Github, Linkedin, Mail, Heart, Code2, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const motivationalQuotes = [
    "Built with passion and dedication to excellence.",
    "Transforming ideas into impactful solutions.",
    "Engineering the future, one line at a time.",
    "Where innovation meets execution.",
    "Crafted with precision and purpose.",
  ];

  const techStack = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "shadcn/ui",
  ];

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/srmanda-cs",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/srmanda-cs",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:srmanda.cs@gmail.com",
      label: "Email",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cycleQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Snehashish Reddy Manda
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Development Engineer specializing in full-stack
              development, cloud architecture, and building scalable systems
              that drive measurable business impact.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-primary hover:bg-gray-700 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-400 hover:text-primary transition-colors text-sm py-1 hover:translate-x-1 inline-block"
                >
                  → {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-primary transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="https://github.com/srmanda-cs/snehashish-reddy-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>©</span>
              <button
                onClick={cycleQuote}
                className="hover:text-primary transition-colors cursor-pointer font-medium"
                title="Click me for inspiration!"
              >
                {new Date().getFullYear()}
              </button>
              <span>Snehashish Reddy Manda. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>love,</span>
              <Code2 className="w-4 h-4 text-primary" />
              <span>code, and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>coffee</span>
            </div>
          </div>

          {/* Easter Egg Quote */}
          <div className="text-center mt-3">
            <p className="text-gray-500 text-sm italic transition-all duration-300">
              {motivationalQuotes[quoteIndex]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
