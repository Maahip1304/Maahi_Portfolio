import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText, ExternalLink, Calendar, Award, BookOpen } from "lucide-react";

const PublicationsSection = ({ data }) => {
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
      case 'Conference Paper': return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
      case 'Technical Blog': return 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30';
      case 'Journal Article': return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
           <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text"> Publications & Research</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
            Contributing through research in AI, computer vision, and multimedia processing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.map((publication, index) => (
            <div
              key={publication.id}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 border border-emerald-400/20 backdrop-blur-sm p-8 hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10 h-full">
                <div className="space-y-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 rounded-xl border border-emerald-400/30">
                      <FileText className="w-7 h-7 text-emerald-400" />
                    </div>
                    <Badge className={`${getTypeColor(publication.type)} text-base px-3 py-1 border`}>
                      {publication.type}
                    </Badge>
                  </div>

                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {publication.title}
                    </h3>

                    <div className="space-y-3 text-base text-gray-400">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        <span className="font-medium">{publication.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        <span>{publication.publisher}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>{publication.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200 text-base py-3"
                      onClick={() => window.open(publication.link, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Publication
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Research Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-emerald-500/15 via-emerald-500/10 to-cyan-500/15 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
            <div className="mb-4">
              <BookOpen className="w-12 h-12 text-emerald-400 mx-auto" />
            </div>
            <div className="text-4xl font-bold text-emerald-400 mb-3">3</div>
            <div className="text-gray-300 font-medium text-xl">Total Publications</div>
            <div className="text-gray-400 text-sm mt-2">Across IEEE Conferences & Medium</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-cyan-500/15 via-cyan-500/10 to-blue-500/15 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="mb-4">
              <Award className="w-12 h-12 text-cyan-400 mx-auto" />
            </div>
            <div className="text-4xl font-bold text-cyan-400 mb-3">2</div>
            <div className="text-gray-300 font-medium text-xl">IEEE Conference Papers</div>
            <div className="text-gray-400 text-sm mt-2">SPARC 2024 & ACOIT 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;