import { useEffect, useState } from 'react';
import { Rocket, Code2, Star, Zap } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Stats() {
  const [ref, isVisible] = useScrollAnimation();
  const [counts, setCounts] = useState({ projects: 0, years: 0, cgpa: 0 });

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const targets = { projects: 10, years: 3, cgpa: 7.55 };
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounts({
          projects: Math.round(targets.projects * progress),
          years: Math.round(targets.years * progress),
          cgpa: Number((targets.cgpa * progress).toFixed(2))
        });
        if (step >= steps) clearInterval(interval);
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const stats = [
    { value: counts.projects + '+', label: 'Projects', icon: Rocket },
    { value: counts.years + '+', label: 'Years Coding', icon: Code2 },
    { value: counts.cgpa, label: 'CGPA', icon: Star },
    { value: '100%', label: 'Commitment', icon: Zap },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div 
                key={stat.label} 
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <stat.icon size={32} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
