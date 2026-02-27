import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#121212] text-white min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[12vw] sm:text-[12vw] md:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter mb-10 text-indigo-500">
              Say<br/>Hello
            </h2>
            <p className="text-xl font-light text-gray-400 max-w-md mb-10">
              Got a crazy idea? Let's break the internet together. Drop me a line.
            </p>
            
            <div className="space-y-2 text-lg font-mono">
              <a href="mailto:aryan.sabasana.cg@gmail.com" className="block hover:text-indigo-500 transition-colors">aryan.sabasana.cg@gmail.com</a>
              <a href="#" className="block hover:text-indigo-500 transition-colors">@aryan_dev_x</a>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 md:p-10 border border-white/10 shadow-hard-sm shadow-indigo-900">
            <form 
              className="space-y-6" 
              action="https://formsubmit.co/aryan.sabasana.cg@gmail.com" 
              method="POST"
            >
              {/* Honey pot to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable captcha for cleaner experience */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="YOUR NAME"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="YOUR@EMAIL.COM"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="TELL ME EVERYTHING..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-4 transition-all hover:translate-x-1 hover:-translate-y-1 shadow-hard">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-end font-mono text-xs text-gray-500 uppercase">
        <div>
          <p>© 2025 Aryan Dev.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="text-right">
          <p>Designed in the Void</p>
          <p>Built with Chaos</p>
        </div>
      </div>
    </section>
  );
}
