import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

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
