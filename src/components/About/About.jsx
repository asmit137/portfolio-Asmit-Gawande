import { Code2, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '3+', label: 'Years Learning', icon: Calendar },
    { value: '10+', label: 'Projects Built', icon: Code2 },
    { value: '7.55', label: 'CGPA', icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="prose prose-lg prose-invert">
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                I'm <span className="text-cyan-400 font-semibold">Asmit Gawande</span>, a final year 
                Computer Engineering student at Government College of Engineering, Yavatmal. 
                I specialize in building full-stack web applications using modern technologies.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                My journey in web development started with curiosity about how websites work, 
                which evolved into a passion for creating seamless user experiences. I love 
                solving complex problems and turning ideas into reality through code.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or solving problems on LeetCode. I'm always eager 
                to learn and grow as a developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <stat.icon className="mx-auto mb-2 text-cyan-400" size={24} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Education & Details */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <GraduationCap className="text-cyan-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">B.Tech Computer Engineering</h3>
                  <p className="text-slate-400">Government College of Engineering, Yavatmal</p>
                  <p className="text-sm text-slate-500 mt-1">2021 - 2025 • CGPA: 7.55</p>
                </div>
              </div>
            </div>

            {/* Previous Education */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <GraduationCap className="text-purple-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Higher Secondary (12th)</h3>
                  <p className="text-slate-400">Aadash Science, J.B. Arts and Birla Commerce</p>
                  <p className="text-sm text-slate-500 mt-1">Science Stream • 91.33%</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <MapPin className="text-pink-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-slate-400">Dhamangaon RLY, Amravati District</p>
                  <p className="text-sm text-slate-500 mt-1">Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
