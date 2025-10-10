import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download, ArrowUp } from "lucide-react";

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Mock download functionality
    console.log("Resume download clicked");
  };

  const handleContactMe = () => {
    window.location.href = `mailto:${data.email}`;
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-500/5"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text">
              Let's Connect
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or chat about technology and innovation.
            </p>
            <div className="space-y-3">
              <a 
                href={`mailto:${data.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {data.email}
              </a>
              <a 
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "about", label: "About Me" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "education", label: "Education" },
                { id: "publications", label: "Publications" },
                { id: "extracurriculars", label: "Activities" },
                { id: "volunteering", label: "Volunteering" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left text-gray-300 hover:text-emerald-400 transition-colors text-sm py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text">
              Contact Me
            </h3>
            <p className="text-gray-300">
              Download my resume or send me a message!
            </p>
            <div className="space-y-3">
              <Button
                onClick={handleContactMe}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white border-0 text-lg py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
              >
                <Download className="w-4 h-4 mr-2" />
                <a href="/Patel_Maahi_Resume_Final_vercel.pdf" download="Maahi_Resume.pdf">
                Download Resume
              </a>
                
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Maahi Patel.
            </p>
            <p className="text-gray-500 text-xs mt-1">
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 text-gray-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 text-gray-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 text-gray-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;