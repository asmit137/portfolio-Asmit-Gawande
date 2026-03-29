import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'HashedBit Innovation Pvt Ltd',
      type: 'Remote Internship',
      duration: 'Sep 2024 - Nov 2024',
      location: 'Remote',
      description: 'Worked on full-stack web applications using the MERN stack, gaining hands-on experience in designing, developing, and maintaining dynamic web applications.',
      achievements: [
        'Built responsive front-end interfaces using React.js ensuring seamless user experience',
        'Developed backend APIs using Node.js and Express.js with MongoDB integration',
        'Managed project workflows using Jira boards following agile methodology',
        'Debugged and optimized both frontend and backend environments',
        'Collaborated effectively in a remote team environment',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Jira', 'Git'],
      certificate: 'https://drive.google.com/file/d/1F2n0q1oeE7r5tAAjL1y5NTG31WYdRNav/view?usp=drive_link',
      letter: 'https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            My professional journey and the skills I've gained along the way
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -ml-2 md:-ml-2 rounded-full bg-cyan-500 border-4 border-slate-950 hidden md:block" />

              <div className="md:grid md:grid-cols-2 md:gap-12">
                {/* Left Side - Date (on desktop) */}
                <div className="hidden md:block text-right pr-12">
                  <div className="inline-flex items-center gap-2 text-slate-400 mb-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:pl-12">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info - Mobile */}
                    <div className="md:hidden flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={exp.letter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-medium hover:bg-purple-500/20 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Experience Letter
                      </a>
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open to Opportunities */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Open to Opportunities</h3>
            <p className="text-slate-400 mb-4">
              Actively seeking full-time Software Development roles
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
