import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      name: 'React Shopping Cart',
      description: 'Full-stack e-commerce cart with React, Material UI, and Context API. Features product browsing, cart management, and checkout flow with persistent state.',
      tech: ['React', 'Material UI', 'Context API', 'LocalStorage'],
      githubLink: "https://github.com/asmit137/ReactJS-Shopping-Cart-Project.git",
      demoLink: "https://asmit137.github.io/ReactJS-Shopping-Cart-Project/",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Spotify Clone',
      description: 'Music streaming platform replica with HTML, CSS, and JavaScript. Features responsive layout, music player controls, and dynamic playlist navigation.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      githubLink: "https://github.com/asmit137/Spotify-website-clone.git",
      demoLink: "https://asmit137.github.io/Spotify-website-clone/",
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Netflix Home Page',
      description: 'Desktop-optimized Netflix homepage clone with carousels, hover effects, and responsive grid layouts using CSS animations.',
      tech: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Animations'],
      githubLink: 'https://github.com/asmit137/Project-Netflix-Home-Page.git',
      demoLink: 'https://asmit137.github.io/Project-Netflix-Home-Page/',
      color: 'from-red-500 to-rose-500'
    },
    {
      name: 'BG Changer',
      description: 'Interactive React application for dynamic background color changes with real-time state updates and custom color picker.',
      tech: ['React', 'State Management', 'CSS-in-JS'],
      githubLink: 'https://github.com/asmit137/BGChanger.git',
      demoLink: 'https://bg-changer-tau-pied.vercel.app/',
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Internship Project',
      description: 'Professional UI template featuring modern web design elements, animations, and responsive grids for cross-device compatibility.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      githubLink: 'https://github.com/asmit137/internshipassignment.git',
      demoLink: 'https://asmit137.github.io/internshipassignment/',
      color: 'from-orange-500 to-amber-500'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Header with Gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.color} p-6 flex items-center justify-center`}>
                <div className="text-center">
                  <Code2 size={40} className="text-white/80 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-medium rounded-xl transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-medium rounded-xl transition-all"
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
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
