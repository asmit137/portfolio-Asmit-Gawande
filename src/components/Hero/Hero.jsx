import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full Stack Developer', 'React Specialist', 'MERN Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < roles[roleIndex].length) {
          setDisplayText(roles[roleIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(roles[roleIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setRoleIndex((roleIndex + 1) % roles.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? 80 : 40);

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, roleIndex, roles]);

  const scrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for hire
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600">Asmit</span>
            </h1>

            <div className="text-xl sm:text-2xl text-slate-600 font-medium mb-6 h-8">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              A passionate Computer Engineering student specializing in building 
              modern web applications with React, Node.js, and the MERN stack.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/asmit137"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/asmitgawandeofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:asmitgawande137@gmail.com"
                className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-200 flex items-center justify-center">
                    <span className="text-5xl font-bold text-blue-600">AG</span>
                  </div>
                  <p className="text-slate-500 text-sm">Add your photo here</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-slate-200">
          {[
            { value: '10+', label: 'Projects Completed' },
            { value: '3+', label: 'Years Experience' },
            { value: '7.55', label: 'CGPA' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
