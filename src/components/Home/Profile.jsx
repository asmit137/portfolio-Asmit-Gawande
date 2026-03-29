import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import ProfilePhoto from '/ProfilePhoto.jpg';

export default function Profile() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Engineer",
    "Software Developer"
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (charIndex < roles[roleIndex].length) {
        timer = setTimeout(() => {
          setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {}, 2000);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCurrentRole((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setIsTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, roleIndex]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/asmit137", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/asmitgawandeofficial/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:asmitgawande137@gmail.com", label: "Email" },
    { icon: FileText, href: "https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link", label: "Resume" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Asmit Gawande</span>
            </h1>
            
            <div className="h-8 mb-6">
              <p className="text-xl sm:text-2xl text-gray-400 font-medium">
                {currentRole}
                <span className="inline-block w-0.5 h-6 bg-orange-400 ml-1 animate-pulse" />
              </p>
            </div>
            
            <p className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed">
              Final year Computer Engineering student passionate about building scalable web applications 
              and creating impactful digital experiences with modern technologies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                <FileText size={20} />
                Download Resume
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
              >
                View Projects
                <ChevronDown size={20} className="rotate-[-90deg]" />
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-orange-400 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl blur opacity-30" />
              <img
                src={ProfilePhoto}
                alt="Asmit Gawande"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl">
                <p className="text-sm font-semibold text-white">B.Tech Computer Engg</p>
                <p className="text-xs text-gray-400">7.55 CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
}
