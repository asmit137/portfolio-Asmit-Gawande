import { Heart, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/asmit137", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/asmitgawandeofficial/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:asmitgawande137@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold text-white mb-4 block"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Asmit
              </span>
              <span className="text-white">.</span>
            </button>
            <p className="text-slate-400 text-sm mb-4">
              Full Stack Developer building modern web applications with passion and precision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">
                <a href="mailto:asmitgawande137@gmail.com" className="hover:text-cyan-400 transition-colors">
                  asmitgawande137@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                <a href="tel:+919325799004" className="hover:text-cyan-400 transition-colors">
                  +91 93257 99004
                </a>
              </li>
              <li className="text-slate-400">Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-1">
            © {currentYear} Asmit Gawande. Made with <Heart size={14} className="text-red-400 fill-red-400" />
          </p>
          <a
            href="https://github.com/asmit137/portfolio-Asmit-Gawande"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1"
          >
            View Source Code
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

