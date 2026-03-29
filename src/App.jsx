import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Menu, X, Send, MapPin, Phone, Code2, Cpu, Database, Terminal, Sparkles, Rocket, Star, Zap, Globe, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import emailjs from "emailjs-com";

// Scroll Animation Hook
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

// Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Work', 'About', 'Blog', 'Contact'];

  const scrollToSection = (id) => {
    const sectionMap = { 'Work': 'projects', 'About': 'about', 'Blog': 'about', 'Contact': 'contact' };
    document.getElementById(sectionMap[id] || id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold text-white tracking-tight">
            Asmit Gawande
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)} 
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 rounded-b-2xl">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left py-3 px-4 text-neutral-400 hover:text-white font-medium transition-all">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
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
                  <div className="absolute top-8 left-6 right-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mb-4" />
                    <div className="w-32 h-4 bg-white/20 rounded mb-2" />
                    <div className="w-24 h-3 bg-white/10 rounded" />
                  </div>
                  <div className="absolute bottom-20 left-6 right-6 space-y-3">
                    <div className="w-full h-16 bg-white/5 rounded-xl border border-white/10" />
                    <div className="w-full h-16 bg-white/5 rounded-xl border border-white/10" />
                    <div className="w-full h-16 bg-white/5 rounded-xl border border-white/10" />
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

// Animated Stats Section
function Stats() {
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

// About Section
function About() {
  const [ref, isVisible] = useScrollAnimation();

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'React & Next.js', level: 88 },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Photo */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Blue accent dot */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full z-10" />
                {/* Photo placeholder */}
                <div className="w-full h-full bg-neutral-900 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-neutral-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl text-neutral-600">AG</span>
                    </div>
                    <p className="text-neutral-500 text-sm">Asmit Gawande</p>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl -z-10" />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-blue-500 text-sm uppercase tracking-wider mb-4">About Me</p>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                I build digital experiences with precision & passion.
              </h2>

              <p className="text-neutral-400 leading-relaxed mb-8">
                With over 3 years of experience in fullstack development as a Computer Engineering student, I help startups and established companies alike translate their ambitious visions into robust, interactive web applications. I believe in the power of thoughtful design and clean code to transform how we interact with technology.
              </p>

              {/* Skills with progress bars */}
              <div className="space-y-6 mb-8">
                <p className="text-white font-medium mb-4">Core Expertise</p>
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-400 text-sm">{skill.name}</span>
                      <span className="text-neutral-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all"
                >
                  Download CV
                </a>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Career Path / Experience Section
function CareerPath() {
  const [ref, isVisible] = useScrollAnimation();

  const experiences = [
    {
      badge: 'PRESENT',
      title: 'Software Development Intern',
      company: 'HashedBit Innovation Pvt Ltd',
      location: 'Remote',
      date: '2024 — PRESENT',
      points: [
        'Worked on full-stack web applications using the MERN stack, gaining hands-on experience in designing, developing, and maintaining dynamic web applications.',
        'Collaborated with senior developers to implement features, fix bugs, and optimize application performance using React.js and Node.js.'
      ]
    },
    {
      badge: 'INTERN',
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Ltd',
      location: 'Pune, India',
      date: '2023 — 2024',
      points: [
        'Developed responsive user interfaces using React.js and Tailwind CSS for client projects.',
        'Implemented state management solutions using Redux and Context API for complex applications.'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
                Career Path
              </h2>
              <p className="text-neutral-500 max-w-xl">
                Collaborating with industry leaders to ship high-impact digital solutions across various tech sectors.
              </p>
            </div>
            <span className="text-6xl sm:text-8xl font-bold text-neutral-800/50 select-none hidden sm:block">
              03
            </span>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group relative bg-[#0f0f0f] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                        {exp.badge}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <p className="text-neutral-400 mb-4">
                      {exp.company} • {exp.location}
                    </p>

                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-500 text-sm leading-relaxed">
                          <span className="text-blue-500 mt-0.5">/</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Date */}
                  <div className="lg:text-right">
                    <span className="text-neutral-600 text-sm font-medium tracking-wide">
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section with outlined text design
function Services() {
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

// Projects Section
function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      name: 'React Shopping Cart',
      desc: 'Full-stack e-commerce application with product browsing, cart management, and checkout flow using React Context API.',
      tech: ['React', 'Material UI', 'Context API'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Spotify Clone',
      desc: 'Music streaming platform replica with responsive layout, music player controls, and dynamic playlist navigation.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Netflix Home Page',
      desc: 'Desktop-optimized Netflix homepage clone with carousels, hover effects, and responsive grid layouts.',
      tech: ['HTML5', 'CSS3', 'Flexbox'],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      name: 'BG Changer',
      desc: 'Interactive React application for dynamic background color changes with real-time state updates.',
      tech: ['React', 'State Management'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-500 text-sm uppercase tracking-wider mb-2">Portfolio</p>
              <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            </div>
            <a 
              href="https://github.com/asmit137" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white text-sm transition-colors hidden sm:block"
            >
              View All →
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div 
                key={i}
                className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                {/* Image placeholder */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-white/80">{project.name[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-full border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 mt-6 pt-4 border-t border-white/5">
                    <a href="#" className="flex items-center gap-1 text-neutral-400 hover:text-blue-500 text-sm transition-colors">
                      <Github size={16} /> Code
                    </a>
                    <a href="#" className="flex items-center gap-1 text-blue-500 hover:text-blue-400 text-sm transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section with floating animation
function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: Terminal,
      title: 'Backend',
      gradient: 'from-cyan-500 to-blue-500',
      skills: ['Node.js', 'Express.js', 'Java', 'Python']
    },
    {
      icon: Database,
      title: 'Database',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['MongoDB', 'MySQL']
    },
    {
      icon: Cpu,
      title: 'Tools',
      gradient: 'from-cyan-500 to-orange-500',
      skills: ['Git', 'GitHub', 'Jira', 'Vite']
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold text-sm tracking-wider uppercase mb-6">
              Skills
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">Technologies & Tools</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${index * 150}ms`
                }}
              >
                {/* Gradient orb on hover */}
                <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className={`relative w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-400 text-sm rounded-lg group-hover:border-white/20 group-hover:text-white transition-all">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [ref, isVisible] = useScrollAnimation();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm("service_s8y52ym", "template_id9jrnm", form.current, "bKLiB0GqJlpqJRnQW")
      .then(() => { alert("Message sent!"); form.current.reset(); }, () => alert("Failed to send."))
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-500 text-sm uppercase tracking-wider mb-2">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">Let's talk.</h2>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-neutral-400 leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>

              <div className="p-6 bg-neutral-900 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Email</p>
                    <p className="text-white font-medium">asmitgawande137@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/asmit137" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-xl border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all">
                  <Github size={24} className="text-neutral-400 hover:text-white" />
                </a>
                <a href="https://linkedin.com/in/asmitgawandeofficial" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-xl border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all">
                  <Linkedin size={24} className="text-neutral-400 hover:text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-xl border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all">
                  <svg className="w-6 h-6 text-neutral-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    name="from_name" 
                    required 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-neutral-900 border border-white/5 rounded-xl text-white placeholder-neutral-600 focus:border-blue-500/50 focus:outline-none transition-all"
                  />
                  <input 
                    type="email" 
                    name="from_email" 
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 bg-neutral-900 border border-white/5 rounded-xl text-white placeholder-neutral-600 focus:border-blue-500/50 focus:outline-none transition-all"
                  />
                </div>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="How can I help you?" 
                  className="w-full px-5 py-4 bg-neutral-900 border border-white/5 rounded-xl text-white placeholder-neutral-600 focus:border-blue-500/50 focus:outline-none resize-none transition-all"
                />
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl font-bold text-white">
            Let's build something <span className="text-blue-500">extraordinary</span> together.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-neutral-600 text-sm">
            {new Date().getFullYear()} Asmit Gawande. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <CareerPath />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

