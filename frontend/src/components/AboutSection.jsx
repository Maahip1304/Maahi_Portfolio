import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { TrendingUp, Users, BookOpen } from "lucide-react";

const AboutSection = ({ data }) => {
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
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16" data-index="0">
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
            visibleCards.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">About Me</span>
          </h2>
          <div className={`w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto transition-all duration-700 ${
            visibleCards.has(0) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} style={{ transitionDelay: '200ms' }}></div>
        </div>

        <div data-index="1" className={`transition-all duration-700 ${
          visibleCards.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <Card className="bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 border border-emerald-400/20 backdrop-blur-sm p-10 lg:p-16 hover:bg-slate-800/70 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl hover:shadow-emerald-400/10">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed text-justify">
                {data.bio}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-8 bg-gradient-to-br from-emerald-500/15 via-emerald-500/10 to-cyan-500/15 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="mb-4">
                    <TrendingUp className="w-10 h-10 text-emerald-400 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-400 mb-3">7+</div>
                  <div className="text-gray-300 font-medium text-lg">Projects Completed</div>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-cyan-500/15 via-cyan-500/10 to-blue-500/15 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="mb-4">
                    <Users className="w-10 h-10 text-cyan-400 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-3">4</div>
                  <div className="text-gray-300 font-medium text-lg">Internships</div>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-blue-500/15 via-blue-500/10 to-purple-500/15 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="mb-4">
                    <BookOpen className="w-10 h-10 text-blue-400 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-blue-400 mb-3">3</div>
                  <div className="text-gray-300 font-medium text-lg">Research Publications</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;