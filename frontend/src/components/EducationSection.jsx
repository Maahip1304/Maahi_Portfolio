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
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">Education</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic journey focused on advanced computer science and research excellence
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500 shadow-lg shadow-emerald-400/20"></div>

          {data.map((education, index) => (
            <div
              key={education.id}
              data-index={index}
              className={`relative mb-16 transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Enhanced Timeline Dot */}
              <div className="absolute left-6 w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full border-4 border-slate-800 z-10 flex items-center justify-center shadow-lg shadow-emerald-400/30">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="ml-24">
                <Card className="bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border border-emerald-400/20 backdrop-blur-sm p-8 hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {education.degree}
                        </h3>
                        <p className="text-xl text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold">
                          {education.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-base text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {education.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {education.duration}
                      </div>
                      {education.gpa && (
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5" />
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