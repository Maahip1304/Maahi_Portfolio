import React, { useState, useEffect, useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Award, Code } from "lucide-react";

const ProjectsSection = ({ data }) => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      "Machine Learning": "bg-purple-500/20 text-purple-300 border-purple-400/30",
      "AI/ML": "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      "AI/NLP": "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
      "IoT/Agriculture": "bg-green-500/20 text-green-300 border-green-400/30",
      "IoT/Assistive Tech": "bg-blue-500/20 text-blue-300 border-blue-400/30",
      "Full Stack": "bg-orange-500/20 text-orange-300 border-orange-400/30",
      "Computer Vision": "bg-red-500/20 text-red-300 border-red-400/30",
      "Web Development": "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
    };
    return colors[category] || "bg-gray-500/20 text-gray-300 border-gray-400/30";
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Coding Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(34, 197, 94, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(6, 182, 212, 0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
             <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">My Projects</span>
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 sm:mb-10 md:mb-12 bg-transparent border-0 gap-2 sm:gap-0">
            <TabsTrigger 
              value="featured" 
              className="data-[state=active]:text-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:via-cyan-400 data-[state=active]:to-blue-500 data-[state=active]:bg-clip-text text-gray-400 text-base sm:text-lg md:text-xl font-bold py-3 sm:py-4 transition-all duration-300 border-b-2 border-transparent data-[state=active]:border-emerald-400"
            >
              Featured Projects
            </TabsTrigger>
            <TabsTrigger 
              value="additional" 
              className="data-[state=active]:text-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:via-cyan-400 data-[state=active]:to-blue-500 data-[state=active]:bg-clip-text text-gray-400 text-base sm:text-lg md:text-xl font-bold py-3 sm:py-4 transition-all duration-300 border-b-2 border-transparent data-[state=active]:border-emerald-400"
            >
              Additional Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {data.featured.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  visibleCards={visibleCards} 
                  getCategoryColor={getCategoryColor}
                  isFeatured={true}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="additional">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {data.additional.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  visibleCards={visibleCards} 
                  getCategoryColor={getCategoryColor}
                  isFeatured={false}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, visibleCards, getCategoryColor, isFeatured }) => (
  <div
    data-index={index}
    className={`transition-all duration-700 ${
      visibleCards.has(index) 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <Card className={`bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border border-emerald-400/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10 h-full ${
      isFeatured ? 'p-6 sm:p-8 md:p-10' : 'p-5 sm:p-6 md:p-8'
    }`}>
      <div className="space-y-4 sm:space-y-5 md:space-y-6 h-full flex flex-col">
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
            <h3 className={`font-bold text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text leading-tight flex-grow ${
              isFeatured ? 'text-2xl sm:text-2xl md:text-3xl' : 'text-xl sm:text-xl md:text-2xl'
            }`}>
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-400 flex-shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">{project.duration}</span>
            </div>
          </div>
        </div>

        <p className={`text-gray-300 leading-relaxed flex-grow text-justify ${
          isFeatured ? 'text-base sm:text-base md:text-lg' : 'text-sm sm:text-base md:text-base'
        }`}>
          {project.description}
        </p>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-emerald-400 mb-2 sm:mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              Key Achievements
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className={`text-gray-300 flex items-start gap-2 sm:gap-3 text-justify ${
                  isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                }`}>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-emerald-400 mb-2 sm:mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs sm:text-sm bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-slate-600/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default ProjectsSection;
