import React, { useState, useEffect } from "react";
import { mockData } from "../data/mock";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import PublicationsSection from "./PublicationsSection";
import ExtracurricularsSection from "./ExtracurricularsSection";
import VolunteeringSection from "./VolunteeringSection";
import EducationSection from "./EducationSection";
import SectionSeparator from "./SectionSeparator";
import Footer from "./Footer";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "publications", "extracurriculars", "volunteering", "education"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-300 text-lg font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Header activeSection={activeSection} />
      
      <section id="home">
        <HeroSection data={mockData.personal} />
      </section>
      
      <SectionSeparator />
      
      <section id="about">
        <AboutSection data={mockData.personal} />
      </section>
      
      <SectionSeparator />
      
      <section id="experience">
        <ExperienceSection data={mockData.experience} />
      </section>
      
      <SectionSeparator />
      
      <section id="projects">
        <ProjectsSection data={mockData.projects} />
      </section>
      
      <SectionSeparator />
      
      <section id="skills">
        <SkillsSection data={mockData.skills} />
      </section>
      
      <SectionSeparator />
      
      <section id="education">
        <EducationSection data={mockData.education} />
      </section>
      
      <SectionSeparator />
      
      <section id="publications">
        <PublicationsSection data={mockData.publications} />
      </section>
      
      <SectionSeparator />
      
      <section id="extracurriculars">
        <ExtracurricularsSection data={mockData.extracurriculars} />
      </section>
      
      <SectionSeparator />
      
      <section id="volunteering">
        <VolunteeringSection data={mockData.volunteering} />
      </section>
      
      <Footer data={mockData.personal} />
    </div>
  );
};

export default Portfolio;