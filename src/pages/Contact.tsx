import { motion } from 'motion/react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">

        <SectionTitle 
          title="Contact Me" 
          subtitle="Let’s connect and discuss opportunities, collaborations, or any ideas you have in mind." 
        />

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
              <Mail className="text-primary" size={24} />
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-white/60 text-sm">bagus@example.com</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
              <Phone className="text-primary" size={24} />
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-white/60 text-sm">+62 812-3456-7890</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
              <MapPin className="text-primary" size={24} />
              <div>
                <p className="text-white font-semibold">Location</p>
                <p className="text-white/60 text-sm">Indonesia</p>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed pt-4">
              I’m open to freelance opportunities, collaborations, or professional discussions. Feel free to reach out — I’ll respond as soon as possible.
            </p>

          </motion.div>

          {/* RIGHT - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl"
          >

            <div>
              <label className="text-sm text-white/70">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 transition-all py-3 rounded-xl font-semibold"
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </div>
  );
};

export default Contact;