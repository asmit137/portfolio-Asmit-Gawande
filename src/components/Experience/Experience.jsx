import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  const experiences = [
    {
      date: 'Sep 2024 - Nov 2024',
      title: 'Software Development Intern',
      desc: 'Started as a Software Development Intern at HashedBit Innovation, focusing on full-stack web applications using the MERN stack. Gaining hands-on experience in designing, developing, and maintaining dynamic web applications.'
    },
    {
      date: 'Jan 2023 - Jun 2023',
      title: 'Frontend Developer Intern',
      desc: 'Launched first professional experience developing responsive user interfaces using React.js and Tailwind CSS. Implemented state management solutions using Redux and Context API for complex client applications.'
    },
    {
      date: 'Jan 2022 - Dec 2022',
      title: 'Learning & Growth',
      desc: 'Expanded skill set to include modern web technologies. Built personal projects and contributed to open source, developing expertise in React, Node.js, and modern CSS frameworks.'
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              My professional journey and career milestones.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-600/30 md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const isRight = index % 2 === 1;
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 top-10 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                      <div className={`pl-12 md:pl-0 ${isRight ? 'md:order-2' : 'md:text-right md:order-1'}`}>
                        <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group
                          ${isVisible ? 'opacity-100 translate-x-0' : isRight ? 'opacity-0 translate-x-12' : 'opacity-0 -translate-x-12'}`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">{exp.date}</span>
                          <h3 className="text-2xl font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                          <p className="text-neutral-400 text-base leading-relaxed">{exp.desc}</p>
                        </div>
                      </div>

                      {/* Spacer for other side */}
                      <div className={`hidden md:block ${isRight ? 'md:order-1' : 'md:order-2'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
