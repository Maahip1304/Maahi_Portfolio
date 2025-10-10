import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Music, ChefHat, Palette, Clock, Users, Sparkles } from "lucide-react";

const ExtracurricularsSection = ({ data }) => {
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

  const getIcon = (title) => {
    if (title.toLowerCase().includes('kathak') || title.toLowerCase().includes('dance')) {
      return <Music className="w-8 h-8" />;
    }
    if (title.toLowerCase().includes('culinary') || title.toLowerCase().includes('cooking')) {
      return <ChefHat className="w-8 h-8" />;
    }
    if (title.toLowerCase().includes('design') || title.toLowerCase().includes('graphic')) {
      return <Palette className="w-8 h-8" />;
    }
    return <Sparkles className="w-8 h-8" />;
  };

  const getGradient = (index) => {
    const gradients = [
      "from-emerald-400 to-cyan-500",
      "from-cyan-500 to-blue-600",
      "from-blue-600 to-purple-600"
    ];
    return gradients[index % gradients.length];
  };

  const getBorderColor = (index) => {
    const colors = [
      "border-emerald-400/30",
      "border-cyan-400/30", 
      "border-blue-400/30"
    ];
    return colors[index % colors.length];
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(60deg, rgba(34, 197, 94, 0.1) 25%, transparent 25.5%, transparent 75%, rgba(34, 197, 94, 0.1) 75%, rgba(34, 197, 94, 0.1)),
            linear-gradient(120deg, rgba(6, 182, 212, 0.1) 25%, transparent 25.5%, transparent 75%, rgba(6, 182, 212, 0.1) 75%, rgba(6, 182, 212, 0.1))
          `,
          backgroundSize: '80px 140px'
        }}></div>
      </div>
        <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text"> Extracurricular Activities</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
            Developing well-rounded skills through diverse cultural, creative, and leadership experiences
          </p>
        </div>
        </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((activity, index) => (
            <div
              key={activity.id}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className={`bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border ${getBorderColor(index)} backdrop-blur-sm p-8 hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10 h-full`}>
                <div className="space-y-6 h-full flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${getGradient(index)} text-white shadow-lg`}>
                      {getIcon(activity.title)}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                      <div className="flex items-center gap-2 text-base text-emerald-400 mt-1">
                        <Clock className="w-4 h-4" />
                        {activity.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed flex-grow text-justify">
                    {activity.description}
                  </p>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-400 bg-gradient-to-r from-slate-700/50 to-slate-600/50 px-4 py-2 rounded-full border border-slate-600/30">
                        <Users className="w-4 h-4 inline mr-2" />
                        Personal Development
                      </span>
                    </div>
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

export default ExtracurricularsSection;