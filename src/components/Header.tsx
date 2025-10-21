import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Mail, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = [
        "about",
        "experience",
        "projects",
        "achievements",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/98 backdrop-blur-md border-b border-primary/20 shadow-lg"
          : "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
      }`}
    >
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-white hover:text-gradient transition-all group"
          >
            <span className="inline-block group-hover:scale-105 transition-transform">
              Snehashish Reddy Manda
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "achievements", label: "Achievements" },
              { id: "education", label: "Education" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                  activeSection === id
                    ? "text-primary bg-primary/10"
                    : "text-gray-300 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
                <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="mailto:srmanda.cs@gmail.com"
              className="p-2 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all group"
              aria-label="Email"
            >
              <Mail
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="tel:+19196722226"
              className="p-2 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all group"
              aria-label="Phone"
            >
              <Phone
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://linkedin.com/in/srmanda-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-primary/10 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "achievements", label: "Achievements" },
                { id: "education", label: "Education" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-3 rounded-lg text-left font-medium transition-all min-h-[44px] ${
                    activeSection === id
                      ? "text-primary bg-primary/10"
                      : "text-gray-300 hover:text-primary hover:bg-primary/5 active:bg-primary/10"
                  }`}
                >
                  {label}
                </button>
              ))}

              {/* Mobile Contact Icons */}
              <div className="flex items-center space-x-2 pt-4 border-t border-primary/20">
                <a
                  href="mailto:srmanda.cs@gmail.com"
                  className="p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+19196722226"
                  className="p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/srmanda-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
