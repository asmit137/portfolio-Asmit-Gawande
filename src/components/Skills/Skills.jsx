import { 
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaJava, FaServer, FaCode 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiJavascript, SiPython, SiMysql, 
  SiMongodb, SiExpress, SiVite, SiJirasoftware, SiTypescript 
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FaCode,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React.js", icon: FaReact, level: "Advanced" },
        { name: "JavaScript", icon: SiJavascript, level: "Advanced" },
        { name: "TypeScript", icon: SiTypescript, level: "Intermediate" },
        { name: "HTML5", icon: FaHtml5, level: "Advanced" },
        { name: "CSS3", icon: FaCss3Alt, level: "Advanced" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      ]
    },
    {
      title: "Backend",
      icon: FaServer,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: "Advanced" },
        { name: "Express.js", icon: SiExpress, level: "Advanced" },
        { name: "Java", icon: FaJava, level: "Intermediate" },
        { name: "Python", icon: SiPython, level: "Intermediate" },
      ]
    },
    {
      title: "Database & Tools",
      icon: FaDatabase,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: "Advanced" },
        { name: "MySQL", icon: SiMysql, level: "Intermediate" },
        { name: "Git", icon: FaGitAlt, level: "Advanced" },
        { name: "GitHub", icon: FaCode, level: "Advanced" },
        { name: "Jira", icon: SiJirasoftware, level: "Intermediate" },
        { name: "Vite", icon: SiVite, level: "Advanced" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            My technical arsenal for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={20} />
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 px-2 py-1 rounded-full bg-white/5">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "15+", label: "Technologies" },
            { value: "5+", label: "Frontend Skills" },
            { value: "4+", label: "Backend Skills" },
            { value: "6+", label: "Tools & DBs" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
