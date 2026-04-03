import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Creative Developer & Designer</p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Crafting<br />
              <span className="text-blue-500">Digital</span><br />
              Experiences.
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
              Hi, I'm Asmit. I create immersive user experiences at the intersection of design, technology, and human connection.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all"
              >
                View My Work
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                Contact Me <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right - Device Mockup */}
          <div className="hidden lg:flex justify-center">
            <div 
              className="relative"
              style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
            >
              {/* Phone frame */}
              <div className="w-[280px] h-[550px] bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[40px] p-3 shadow-2xl shadow-blue-500/20 border border-white/10">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[32px] overflow-hidden relative">
                  {/* Screen content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
                  
                  {/* Profile Section */}
                  <div className="absolute top-8 left-6 right-6">
                    <div className="w-14 h-14 bg-blue-500 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">AG</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">Asmit Gawande</h3>
                    <p className="text-neutral-400 text-sm">Full Stack Developer</p>
                  </div>

                  {/* Stats Cards */}
                  <div className="absolute top-40 left-6 right-6 space-y-3">
                    <div className="w-full p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-neutral-500 text-xs mb-1">Experience</p>
                      <p className="text-white font-semibold">3+ Years</p>
                    </div>
                    <div className="w-full p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-neutral-500 text-xs mb-1">Projects</p>
                      <p className="text-white font-semibold">10+ Completed</p>
                    </div>
                    <div className="w-full p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-neutral-500 text-xs mb-1">Location</p>
                      <p className="text-white font-semibold">Maharashtra, India</p>
                    </div>
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-full">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Row */}
      <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'].map((tech) => (
              <span key={tech} className="text-neutral-500 text-sm font-medium hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
