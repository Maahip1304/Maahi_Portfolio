import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = ({ data }) => {
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

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            conic-gradient(from 0deg at 50% 50%, 
              rgba(34, 197, 94, 0.1) 0deg, 
              transparent 60deg, 
              transparent 120deg, 
              rgba(6, 182, 212, 0.1) 180deg, 
              transparent 240deg, 
              transparent 300deg, 
              rgba(34, 197, 94, 0.1) 360deg)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">Education</span>
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Academic journey focused on advanced computer science and research excellence
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line - Responsive */}
          <div className="absolute left-6 sm:left-8 md:left-10 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500 shadow-lg shadow-emerald-400/20"></div>

          {data.map((education, index) => (
            <div
              key={education.id}
              data-index={index}
              className={`relative mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Enhanced Timeline Dot - Responsive */}
              <div className="absolute left-3 sm:left-4 md:left-6 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full border-3 sm:border-4 border-slate-800 z-10 flex items-center justify-center shadow-lg shadow-emerald-400/30">
                <GraduationCap className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
              </div>

              {/* Content - Responsive */}
              <div className="ml-16 sm:ml-20 md:ml-24">
                <Card className="bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border border-emerald-400/20 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-8 hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10">
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                          {education.degree}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold">
                          {education.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-base text-gray-400">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">{education.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">{education.duration}</span>
                      </div>
                      {education.gpa && (
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          CGPA: <span className="text-emerald-400 font-semibold">{education.gpa}</span>
                        </div>
                      )}
                    </div>
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

export default EducationSection;
