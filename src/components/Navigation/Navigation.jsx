import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
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
