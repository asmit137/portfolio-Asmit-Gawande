import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Services() {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      num: '/01',
      title: 'MERN STACK',
      desc: 'Architecting high-performance web ecosystems using React and Node.',
      tags: ['REACT', 'NODE', 'MONGODB'],
      color: 'cyan'
    },
    {
      num: '/02',
      title: 'WEB DESIGN',
      desc: 'Creating visually captivating and user-friendly digital experiences.',
      tags: ['HTML5', 'TAILWIND', 'FIGMA', 'UI/UX'],
      color: 'blue'
    },
    {
      num: '/03',
      title: 'UI/UX DESIGN',
      desc: 'Crafting modern interfaces that connect with users deeply.',
      tags: ['FIGMA', 'USER FLOW', 'CANVA'],
      color: 'orange'
    },
    {
      num: '/04',
      title: 'VIDEO EDITING',
      desc: 'Transforming raw footage into professional cinematic stories.',
      tags: ['PREMIERE PRO', 'AFTER EFFECTS', 'FILMORA'],
      color: 'cyan'
    }
  ];

  const colorStyles = {
    cyan: {
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      line: 'from-cyan-500/50 via-cyan-500 to-cyan-500/50',
      tag: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      titleHover: 'group-hover:text-cyan-400'
    },
    blue: {
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      line: 'from-blue-500/50 via-blue-500 to-blue-500/50',
      tag: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      titleHover: 'group-hover:text-blue-400'
    },
    orange: {
      text: 'text-orange-400',
      border: 'border-orange-500/30',
      line: 'from-orange-500/50 via-orange-500 to-orange-500/50',
      tag: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
      titleHover: 'group-hover:text-orange-400'
    }
  };

  return (
    <section id="services" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-sm tracking-wider uppercase mb-6">
              Services
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">What I Do</h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => {
              const colors = colorStyles[service.color];
              return (
                <div key={service.num} className="group">
                  {/* Top line */}
                  <div className={`h-px w-full bg-gradient-to-r ${colors.line} opacity-30`} />
                  
                  <div className="py-8 md:py-10 grid md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-8 items-start">
                    {/* Number */}
                    <span className={`text-sm font-mono ${colors.text} opacity-60`}>
                      {service.num}
                    </span>
                    
                    {/* Title with outline effect */}
                    <div className="relative">
                      <h3 
                        className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight transition-all duration-500 ${colors.titleHover}
                          [text-shadow:_2px_2px_0_rgba(0,0,0,0.5)]
                          [-webkit-text-stroke:_1px_rgba(255,255,255,0.3)]
                          text-transparent
                          group-hover:[-webkit-text-stroke:_1px_currentColor]
                        `}
                        style={{
                          WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                          color: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = service.color === 'cyan' ? '#22d3ee' : service.color === 'blue' ? '#60a5fa' : '#fb923c';
                          e.target.style.webkitTextStroke = '1px currentColor';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'transparent';
                          e.target.style.webkitTextStroke = '1px rgba(255,255,255,0.2)';
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description and Tags */}
                    <div className="space-y-4">
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${colors.tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom line for last item */}
                  {index === services.length - 1 && (
                    <div className={`h-px w-full bg-gradient-to-r ${colors.line} opacity-30`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
