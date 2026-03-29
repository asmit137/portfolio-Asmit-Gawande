import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/50' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Asmit<span className="text-blue-600">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <a
              href="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 mt-2 bg-slate-900 text-white font-medium rounded-lg"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
