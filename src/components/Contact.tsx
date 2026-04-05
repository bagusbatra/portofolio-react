import { motion } from 'motion/react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        background: '#0f172a',
        color: '#fff'
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="text-primary" />, label: 'Email', value: 'contact@bagusbatra.com', link: 'mailto:contact@bagusbatra.com' },
    { icon: <Phone className="text-accent" />, label: 'WhatsApp', value: '+62 812 3456 7890', link: 'https://wa.me/6281234567890' },
    { icon: <MapPin className="text-red-500" />, label: 'Location', value: 'Jakarta, Indonesia', link: '#' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Have a project in mind or just want to say hi? Feel free to reach out!" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 glass rounded-2xl hover:bg-white/5 transition-all group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest">{info.label}</span>
                    <p className="text-lg font-semibold text-white/80">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold">Follow Me</h4>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-primary transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-4 bg-primary rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/80 transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
