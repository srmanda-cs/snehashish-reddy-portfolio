import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[600px] md:min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Video - Desktop Only */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3125448/3125448-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Mobile Gradient Background */}
      <div className="absolute inset-0 w-full h-full md:hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>

      {/* Enhanced overlay for better text readability - Desktop only uses backdrop-blur */}
      <div className="absolute inset-0 bg-black/60 md:backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 pt-12 pb-20 md:pt-0 md:pb-0 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center scroll-animate">
            <div className="relative group">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white/20 shadow-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <img
                  src={profileImage}
                  alt="Snehashish Reddy Manda"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent group-hover:from-blue-400/30 transition-all duration-300"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight scroll-animate">
            <span className="block text-white">Snehashish</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Reddy Manda
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light scroll-animate">
            Full-Stack Software Development Engineer
          </p>

          <div className="mb-12 scroll-animate">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
              Experienced in building production-grade systems on AWS and
              applying advanced optimization models to solve complex problems.
              Contributed to $1M+ systems using React, Python, and cloud
              technologies.
            </p>

            {/* Unique Value Proposition Tags */}
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
                ⚡ 99.9% Time Reduction
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
                💰 $1M+ Budget Approvals
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
                🎯 60% Workload Reduction
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 text-gray-300 scroll-animate">
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group">
              <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm md:text-base">srmanda.cs@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group">
              <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm md:text-base">(919) 672-2226</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group">
              <MapPin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm md:text-base">Chapel Hill, NC</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg min-h-[44px] scroll-animate btn-gradient ripple-effect"
          >
            <span className="hidden md:inline">Learn More About Me</span>
            <span className="md:hidden">Learn More</span>
            <ArrowDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
