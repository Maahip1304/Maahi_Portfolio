import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Wrench, Layers } from "lucide-react";

const SkillsSection = ({ data }) => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      skills: data.languages,
      color: "from-emerald-400 to-cyan-500",
      borderColor: "border-emerald-400/30"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      skills: data.frameworks,
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-400/30"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      skills: data.databases,
      color: "from-blue-600 to-purple-600",
      borderColor: "border-blue-400/30"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      skills: data.tools,
      color: "from-purple-600 to-pink-500",
      borderColor: "border-purple-400/30"
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(34, 197, 94, 0.1),
              rgba(34, 197, 94, 0.1) 10px,
              transparent 10px,
              transparent 20px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(6, 182, 212, 0.1),
              rgba(6, 182, 212, 0.1) 10px,
              transparent 10px,
              transparent 20px
            )
          `
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
             <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">Technical Skills</span>
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Experienced with modern technologies and adaptable to evolving programming paradigms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className={`bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border ${category.borderColor} backdrop-blur-sm p-5 sm:p-6 md:p-8 hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10 h-full`}>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {category.skills.map((skill, idx) => (
                      <SkillItem 
                        key={idx} 
                        skill={skill} 
                        delay={idx * 50} 
                        isVisible={visibleCards.has(index)}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill, delay, isVisible }) => (
  <div
    className={`transform transition-all duration-500 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <Badge 
      variant="secondary" 
      className="w-full justify-center p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm md:text-base bg-slate-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-cyan-600/20 hover:text-emerald-300 transition-all duration-300 border border-slate-600/50 hover:border-emerald-400/30"
    >
      {skill}
    </Badge>
  </div>
);

export default SkillsSection;
