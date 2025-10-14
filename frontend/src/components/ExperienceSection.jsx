import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = ({ data, triggerAnimation }) => {
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

  // Reset animations when triggerAnimation changes
  useEffect(() => {
    if (triggerAnimation) {
      setVisibleCards(new Set());
      // Re-trigger animations after a brief delay
      setTimeout(() => {
        const indices = Array.from({ length: data.length }, (_, i) => i);
        indices.forEach((index, i) => {
          setTimeout(() => {
            setVisibleCards(prev => new Set([...prev, index]));
          }, i * 200);
        });
      }, 100);
    }
  }, [triggerAnimation, data.length]);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Academic': return 'bg-cyan-500/20 text-cyan-300';
      case 'Research': return 'bg-purple-500/20 text-purple-300';
      case 'Industry': return 'bg-green-500/20 text-green-300';
      default: return 'bg-blue-500/20 text-blue-300';
    }
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
             <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">Professional Experience</span>
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line - Responsive */}
          <div className="absolute left-3 sm:left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500"></div>

          {data.map((experience, index) => (
            <div
              key={experience.id}
              data-index={index}
              className={`relative mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot - Responsive */}
              <div className={`absolute left-0 sm:left-0.5 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full border-3 sm:border-4 border-slate-800 z-10 flex items-center justify-center ${
                index % 2 === 0 ? '' : ''
              }`}>
                <Building className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
              </div>

              {/* Content - Responsive alternating layout on desktop */}
              <div className={`ml-12 sm:ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
              }`}>
                <Card className="bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border border-emerald-400/20 backdrop-blur-sm p-5 sm:p-6 md:p-8 hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10">
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                          {experience.position}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold">
                          {experience.company}
                        </p>
                      </div>
                      <Badge className={`${getTypeColor(experience.type)} text-xs sm:text-sm px-2 sm:px-3 py-1`}>
                        {experience.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base text-gray-400">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="whitespace-nowrap">{experience.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 sm:space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm sm:text-base text-gray-300 flex items-start gap-2 sm:gap-3 text-justify">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
