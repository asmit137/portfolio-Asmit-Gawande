import { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      name: 'React Shopping Cart',
      desc: 'Full-stack e-commerce application with product browsing, cart management, and checkout flow using React Context API.',
      tech: ['React', 'Material UI', 'Context API'],
      color: 'from-blue-600 to-cyan-500',
      accent: 'blue'
    },
    {
      name: 'Spotify Clone',
      desc: 'Music streaming platform replica with responsive layout, music player controls, and dynamic playlist navigation.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      color: 'from-green-600 to-emerald-500',
      accent: 'emerald'
    },
    {
      name: 'Netflix Home Page',
      desc: 'Desktop-optimized Netflix homepage clone with carousels, hover effects, and responsive grid layouts.',
      tech: ['HTML5', 'CSS3', 'Flexbox'],
      color: 'from-red-600 to-orange-500',
      accent: 'orange'
    },
    {
      name: 'BG Changer',
      desc: 'Interactive React application for dynamic background color changes with real-time state updates.',
      tech: ['React', 'State Management'],
      color: 'from-purple-600 to-pink-500',
      accent: 'fuchsia'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" ref={ref} className="py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.5em] mb-3">Portfolio</p>
              <h2 className="text-5xl font-black text-white">Featured Projects</h2>
            </div>
            <a 
              href="https://github.com/asmit137" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span>Explore All Projects</span>
              <Github size={18} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Slider Container */}
          <div 
            className="relative group/slider"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* External Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 xl:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all z-20 hidden md:flex"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all z-20 hidden md:flex"
            >
              <ArrowRight size={24} />
            </button>

            {/* Viewport */}
            <div className="overflow-visible md:overflow-hidden rounded-[2.5rem]">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, i) => (
                  <div key={i} className="w-full flex-shrink-0 md:px-0">
                    <div className="bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden mx-1">
                      <div className="grid md:grid-cols-2 min-h-[450px]">
                        {/* Visual Side */}
                        <div className={`bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-12`}>
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white blur-3xl rounded-full" />
                          </div>
                          <div className="relative z-10 text-center">
                            <div className="w-32 h-32 bg-white/10 backdrop-blur-3xl rounded-3xl flex items-center justify-center mb-6 mx-auto border border-white/20 shadow-2xl">
                              <span className="text-7xl font-black text-white">{project.name[0]}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white/90 drop-shadow-xl">{project.name}</h3>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-10 md:p-14 flex flex-col justify-center bg-[#0d0d0d]">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t) => (
                              <span key={t} className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded-lg border border-white/10">
                                {t}
                              </span>
                            ))}
                          </div>
                          <h4 className="text-3xl md:text-4xl font-black text-white mb-4">
                            {project.name}
                          </h4>
                          <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                            {project.desc}
                          </p>
                          <div className="flex gap-4">
                            <a href="#" className="flex items-center gap-2 px-6 py-3.5 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all text-sm">
                              <Github size={18} /> View Code
                            </a>
                            <a href="#" className="flex items-center gap-2 px-6 py-3.5 bg-neutral-800 text-white font-bold rounded-xl hover:bg-neutral-700 hover:scale-105 active:scale-95 transition-all text-sm">
                              <ExternalLink size={18} /> Live Demo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Arrows (Inside) */}
            <div className="flex md:hidden justify-center gap-4 mt-8">
              <button onClick={prevSlide} className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white"><ArrowLeft size={20} /></button>
              <button onClick={nextSlide} className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
