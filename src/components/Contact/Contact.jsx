import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_s8y52ym", 
        "template_id9jrnm", 
        form.current,
        "bKLiB0GqJlpqJRnQW" 
      )
      .then(
        (result) => {
          alert("Message sent successfully! I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "asmitgawande137@gmail.com", href: "mailto:asmitgawande137@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 93257 99004", href: "tel:+919325799004" },
    { icon: MapPin, label: "Location", value: "Maharashtra, India", href: null },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="p-3 rounded-lg bg-cyan-500/10">
                    <item.icon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-cyan-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/asmit137", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/asmitgawandeofficial/", label: "LinkedIn" },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  >
                    <link.icon size={18} />
                    <span className="text-sm font-medium">{link.label}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
