import { ExternalLink, Github, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'React Shopping Cart',
      description: 'Full-stack e-commerce application with product browsing, cart management, and checkout flow using React Context API and local storage persistence.',
      tech: ['React', 'Material UI', 'Context API', 'LocalStorage'],
      github: 'https://github.com/asmit137/ReactJS-Shopping-Cart-Project.git',
      demo: 'https://asmit137.github.io/ReactJS-Shopping-Cart-Project/',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Spotify Clone',
      description: 'Music streaming platform replica with responsive layout, music player controls, and dynamic playlist navigation using vanilla JavaScript.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/asmit137/Spotify-website-clone.git',
      demo: 'https://asmit137.github.io/Spotify-website-clone/',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Netflix Home Page',
      description: 'Desktop-optimized Netflix homepage clone with carousels, hover effects, and responsive grid layouts using CSS animations.',
      tech: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Animations'],
      github: 'https://github.com/asmit137/Project-Netflix-Home-Page.git',
      demo: 'https://asmit137.github.io/Project-Netflix-Home-Page/',
      gradient: 'from-red-500 to-rose-500',
    },
    {
      name: 'BG Changer',
      description: 'Interactive React application for dynamic background color changes with real-time state updates and custom color picker.',
      tech: ['React', 'State Management', 'CSS-in-JS'],
      github: 'https://github.com/asmit137/BGChanger.git',
      demo: 'https://bg-changer-tau-pied.vercel.app/',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      name: 'Internship Project',
      description: 'Professional UI template featuring modern web design elements, animations, and responsive grids for cross-device compatibility.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      github: 'https://github.com/asmit137/internshipassignment.git',
      demo: 'https://asmit137.github.io/internshipassignment/',
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <Code2 size={40} className="text-white/80 relative z-10" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-slate-300 bg-white/5 rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white text-sm font-medium transition-all"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/asmit137"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
