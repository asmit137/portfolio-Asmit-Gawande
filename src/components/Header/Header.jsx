import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/skillset", label: "Skills" },
    { to: "/portfolio", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl font-bold text-white">
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Asmit
                </span>
                <span className="text-white">.</span>
              </NavLink>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-orange-400 bg-white/5"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <a
                href="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-slate-900/95 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-orange-400 bg-white/5"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-orange-400 font-medium"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
