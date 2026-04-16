import { useState, FormEvent, ChangeEvent } from 'react';
import { Send, Github, Linkedin, Twitter, Youtube, Check, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Aryansabasana', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/aryan-sabasana-859471394/', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/Aryan_Sabasana', color: 'hover:text-white' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@AryanSabasana-v6b', color: 'hover:text-red-500' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const form = e.target as HTMLFormElement;
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

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
            
            <div className="space-y-2 text-lg font-mono mb-10">
              <a href="mailto:aryan.sabasana.cg@gmail.com" className="block hover:text-indigo-500 transition-colors">aryan.sabasana.cg@gmail.com</a>
              <a href="https://x.com/aryan_dev_x" target="_blank" rel="noopener noreferrer" className="block hover:text-indigo-500 transition-colors">@aryan_dev_x</a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border border-white/20 hover:border-white transition-colors ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 md:p-10 border border-white/10 shadow-hard-sm shadow-indigo-900">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 border border-white/20 hover:border-white transition-colors uppercase text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form 
                className="space-y-6" 
                action="https://formsubmit.co/aryan.sabasana.cg@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b py-3 text-lg focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-white/20 focus:border-indigo-500'}`}
                    placeholder="YOUR NAME"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b py-3 text-lg focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-indigo-500'}`}
                    placeholder="YOUR@EMAIL.COM"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-transparent border-b py-3 text-lg focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-white/20 focus:border-indigo-500'}`}
                    placeholder="TELL ME EVERYTHING..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-4 transition-all hover:translate-x-1 hover:-translate-y-1 shadow-hard disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-end font-mono text-xs text-gray-500 uppercase">
        <div>
          <p>© {new Date().getFullYear()} Aryan Dev.</p>
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
