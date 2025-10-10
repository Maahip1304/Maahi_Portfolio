import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = ({ data }) => {
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

  const getTypeColor = (type) => {
    switch (type) {
      case 'Academic': return 'bg-cyan-500/20 text-cyan-300';
      case 'Research': return 'bg-purple-500/20 text-purple-300';
      case 'Industry': return 'bg-green-500/20 text-green-300';
      default: return 'bg-blue-500/20 text-blue-300';
    }
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
             <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">Professional Experience</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500"></div>

          {data.map((experience, index) => (
            <div
              key={experience.id}
              data-index={index}
              className={`relative mb-16 transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full border-4 border-slate-800 z-10"></div>

              {/* Content - All text left aligned */}
              <div className={`ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <Card className="bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border border-emerald-400/20 backdrop-blur-sm p-10 hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10">
                  <div className="space-y-6">
                    <div className="flex flex-col space-y-3">
                      <Badge className={getTypeColor(experience.type)}>
                        {experience.type}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white">
                        {experience.position}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 text-lg text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        {experience.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {experience.duration}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-lg leading-relaxed text-justify">{responsibility}</span>
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