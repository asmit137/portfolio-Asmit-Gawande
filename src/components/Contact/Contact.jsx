import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm("service_s8y52ym", "template_id9jrnm", form.current, "bKLiB0GqJlpqJRnQW")
      .then(() => { alert("Message sent!"); form.current.reset(); }, () => alert("Failed to send."))
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-blue-500 text-sm uppercase tracking-wider mb-2">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">Let's talk.</h2>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-neutral-400 leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>

              <div className="p-6 bg-neutral-900 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Email</p>
                    <p className="text-white font-medium">asmitgawande137@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/asmit137" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-xl border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all">
                  <Github size={24} className="text-neutral-400 hover:text-white" />
                </a>
                <a href="https://linkedin.com/in/asmitgawandeofficial" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-xl border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all">
                  <Linkedin size={24} className="text-neutral-400 hover:text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-xl border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all">
                  <svg className="w-6 h-6 text-neutral-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    name="from_name" 
                    required 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-neutral-900 border border-white/5 rounded-xl text-white placeholder-neutral-600 focus:border-blue-500/50 focus:outline-none transition-all"
                  />
                  <input 
                    type="email" 
                    name="from_email" 
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 bg-neutral-900 border border-white/5 rounded-xl text-white placeholder-neutral-600 focus:border-blue-500/50 focus:outline-none transition-all"
                  />
                </div>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="How can I help you?" 
                  className="w-full px-5 py-4 bg-neutral-900 border border-white/5 rounded-xl text-white placeholder-neutral-600 focus:border-blue-500/50 focus:outline-none resize-none transition-all"
                />
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
