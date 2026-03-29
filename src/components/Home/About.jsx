import { User, GraduationCap, Target, MapPin, Calendar, Award } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Government College of Engineering, Yavatmal",
      year: "2021 - 2025",
      score: "7.55 CGPA",
      status: "Final Year",
      icon: GraduationCap
    },
    {
      degree: "12th Grade (Science Stream)",
      institution: "Aadash Science, J.B. Arts & Birla Commerce, Dhamangaon RLY",
      year: "2019 - 2021",
      score: "91.33%",
      status: "Completed",
      icon: Award
    },
    {
      degree: "10th Grade",
      institution: "S.F.L. High School & Junior College, Dhamangaon RLY",
      year: "2018 - 2019",
      score: "84.60%",
      status: "Completed",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get to Know Me Better
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and constantly learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Info Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <User className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Personal Information</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Hi! I'm <span className="text-white font-medium">Asmit Sanjay Gawande</span>, a final year 
              B.Tech Computer Engineering student at Government College of Engineering Yavatmal. 
              I'm passionate about web development and backend technologies with hands-on experience 
              in the MERN stack.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-orange-400" />
                <span className="text-sm">Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} className="text-orange-400" />
                <span className="text-sm">Available for hire</span>
              </div>
            </div>

            {/* Goal & Vision */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Target className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Goal & Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To become a skilled software developer specializing in full-stack development, 
              contributing to innovative projects that create meaningful impact. I aspire to 
              work in an environment that fosters continuous learning and growth while solving 
              real-world challenges.
            </p>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <GraduationCap className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent" />
              
              {education.map((item, index) => (
                <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border-2 border-orange-500/30 flex items-center justify-center">
                    <item.icon size={20} className="text-orange-400" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800/30 border border-white/5 rounded-xl p-5 hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-white font-semibold">{item.degree}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.status === "Final Year" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-gray-500/20 text-gray-400"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 text-sm font-medium">{item.score}</span>
                      <span className="text-gray-500 text-sm">{item.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}