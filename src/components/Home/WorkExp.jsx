import { Briefcase, Calendar, MapPin, ExternalLink, Award, CheckCircle2 } from "lucide-react";

export default function WorkExp() {
  const techStack = ["React.js", "Node.js", "Express.js", "MongoDB", "Jira", "Git"];
  
  const achievements = [
    "Built responsive frontend interfaces using React.js ensuring seamless UX",
    "Developed backend APIs with Node.js/Express integrated with MongoDB",
    "Managed workflows using Jira in an agile development environment",
    "Debugged and optimized both frontend and backend applications"
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hands-on industry experience building real-world applications
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-500/10">
                  <Briefcase className="text-orange-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Software Development Intern</h3>
                  <p className="text-orange-400 font-medium">HashedBit Innovation Pvt Ltd</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Sep 2024 - Nov 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Remote
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Certificate Links */}
              <div className="flex gap-3">
                <a
                  href="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-colors"
                >
                  <Award size={14} />
                  Experience Letter
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1F2n0q1oeE7r5tAAjL1y5NTG31WYdRNav/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-green-400 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors"
                >
                  <Award size={14} />
                  Certificate
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-3">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 mb-3">Key Responsibilities:</p>
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}