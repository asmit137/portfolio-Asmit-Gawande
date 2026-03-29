import { 
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaJava, FaServer, FaCode, FaLaptopCode 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiJavascript, SiPython, SiMysql, 
  SiMongodb, SiExpress, SiVite, SiJirasoftware 
} from "react-icons/si";
import { Code2 } from "lucide-react";

export default function Technologies() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaLaptopCode,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-400" },
      ]
    },
    {
      title: "Backend Development",
      icon: FaServer,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "Python", icon: SiPython, color: "text-yellow-300" },
      ]
    },
    {
      title: "Database & Tools",
      icon: FaDatabase,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "GitHub", icon: FaCode, color: "text-gray-400" },
        { name: "Jira", icon: SiJirasoftware, color: "text-blue-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technologies & Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-orange-500/20 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${category.bgColor}`}>
                  <category.icon className={category.color} size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <skill.icon className={`${skill.color} text-xl group-hover:scale-110 transition-transform`} />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            { label: "Frontend", value: "6+ Technologies" },
            { label: "Backend", value: "4+ Technologies" },
            { label: "Database & Tools", value: "5+ Technologies" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-slate-800/30 border border-white/5">
              <Code2 className="mx-auto mb-2 text-orange-400" size={24} />
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
