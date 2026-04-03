export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl font-bold text-white">
            Let's build something <span className="text-blue-500">extraordinary</span> together.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-neutral-600 text-sm">
            {new Date().getFullYear()} Asmit Gawande. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
