import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.5 ? '34, 197, 94' : '6, 182, 212',
    });

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Mock download functionality
    console.log("Resume download clicked");
  };

  const handleContactMe = () => {
    window.location.href = `mailto:${data.email}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "transparent" }}
      />
      
      {/* Coding Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-800/95 z-10"></div>

      {/* Main Content - Fully Responsive */}
      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
          
          {/* Profile Image with Subtle Hover - Fully Responsive */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
            
            <div className="relative">
              <img
                src={data.photo}
                alt="Maahi Patel"
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] rounded-full object-cover border-4 border-slate-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Enhanced Text Content - Fully Responsive */}
          <div className="max-w-3xl text-center lg:text-left px-2 sm:px-0">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in leading-tight">
              <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text animate-gradient">
                {data.name}
              </span>
            </h1>
            
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed animate-fade-in-delay-1">
              <b>{data.title}</b>
            </h2>
            
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed animate-fade-in-delay-2">
              {data.subtitle}
            </p>

            {/* Action Buttons - Fully Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 md:mb-12 animate-fade-in-delay-3">
              <Button
                onClick={handleContactMe}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                Contact Me
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3"
              >
                <Download className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                <a href="/Patel_Maahi_Resume_Final_vercel.pdf" download="Maahi_Resume.pdf">
                Download Resume
              </a>
              </Button>
            </div>

            {/* Enhanced Social Links - Fully Responsive */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-5 md:gap-6 animate-fade-in-delay-4">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 md:p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 md:p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-gray-500/25"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-3 sm:p-3.5 md:p-4 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:from-emerald-700 hover:to-cyan-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
