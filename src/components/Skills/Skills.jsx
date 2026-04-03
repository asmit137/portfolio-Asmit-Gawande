import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  const row1 = [
    { name: 'React', slug: 'react' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'Vite', slug: 'vite' }
  ];

  const row2 = [
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'MySQL', slug: 'mysql' },
    { name: 'Express.js', slug: 'express' },
    { name: 'Python', slug: 'python' },
    { name: 'Java', slug: 'openjdk' },
    { name: 'Git', slug: 'git' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Jira', slug: 'jira' }
  ];

  const TechCard = ({ tech }) => (
    <div className="flex items-center gap-4 px-8 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-default">
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-2 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={`https://cdn.simpleicons.org/${tech.slug}/eee`} 
          alt={tech.name} 
          className="w-8 h-8 relative z-10 object-contain" 
        />
      </div>
      <span className="text-white font-black text-lg tracking-tight whitespace-nowrap">{tech.name}</span>
    </div>
  );

  return (
    <section id="skills" ref={ref} className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-24 px-6">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-xs tracking-widest uppercase mb-6 inline-block">
              Expertise
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-white leading-tight">My Tech Stack</h2>
          </div>

          <div className="flex flex-col gap-10 pause-hover px-4 md:px-8 lg:px-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            {/* Row 1 - Forward */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-10 animate-scroll py-4">
                {[...row1, ...row1, ...row1].map((tech, i) => (
                  <TechCard key={`r1-${i}`} tech={tech} />
                ))}
              </div>
            </div>

            {/* Row 2 - Reverse */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-10 animate-scroll-reverse py-4">
                {[...row2, ...row2, ...row2].map((tech, i) => (
                  <TechCard key={`r2-${i}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Subtle bottom fade */}
          <div className="mt-24 text-center">
            <p className="text-neutral-500 font-medium tracking-wide">Always learning and exploring new technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
