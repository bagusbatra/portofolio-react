import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Phone, CheckCircle } from "lucide-react";
import AITwinChat from "../AITwinChat";
import { ContactForm } from "../../types";

interface ConsultationSectionProps {
  contactForm: ContactForm;
  formSubmitted: boolean;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export default function ConsultationSection({ contactForm, formSubmitted, handleFormChange, handleFormSubmit }: ConsultationSectionProps) {
  return (
    <section id="consultation-hub" className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
          ENGAGEMENT GATEWAY
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Blueprint Consultation Terminal
        </h2>
        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
          Formulate your project details inside the <strong>Blueprint Customizer</strong>, then synchronize it with our <strong>AI Twin Consultant</strong> to map immediate scopes. Let's start the design roadmap.
        </p>
      </div>

      {/* Interactive Core Panel: Configurator & Chat Twin */}
      <div className="p-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
        <AITwinChat />
      </div>

      {/* Manual Inquiry Dispatch Form Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Context/Coordinates Info */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest block mb-2">
              DIRECT CONTACT INFO
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Let's Discuss Your Project
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
              Ready to draft a system blueprint or request an audit of your relational database? Send details of your requirements directly. I review individual solutions designs personally and will reach out with an engineering schematic outline.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:bagusbatr@gmail.com" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-accent transition-all group">
              <div className="p-2.5 bg-brand-accent/15 text-brand-accent rounded-lg">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#5d6880] uppercase block font-bold">Primary Workspace Email</span>
                <span className="text-[11px] text-slate-200 font-semibold group-hover:text-brand-accent transition-colors">
                  bagusbatr@gmail.com
                </span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="p-2.5 bg-brand-accent/15 text-brand-accent rounded-lg">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#5d6880] uppercase block font-bold">Regional Consultation Line</span>
                <span className="text-[11px] text-slate-200 font-semibold">
                  Indonesia Region (GMT+7)
                </span>
              </div>
            </div>
          </div>

          <p className="font-mono text-[9px] text-[#5d6880] uppercase tracking-wider font-bold">
            © 2026 Bagus Batra. Structured with precision.
          </p>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
          <span className="font-mono text-[10px] text-[#5d6880] uppercase tracking-widest block mb-6 font-bold">
            SECURE SCOPE DISPATCH COMPONENT
          </span>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={contactForm.name}
                  onChange={handleFormChange}
                  placeholder="e.g. Director of Academics"
                  className="w-full py-2.5 px-3 rounded-lg text-[11px] bg-[#0b1222] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                  Workspace Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  value={contactForm.email}
                  onChange={handleFormChange}
                  placeholder="e.g. domain@school.edu"
                  className="w-full py-2.5 px-3 rounded-lg text-[11px] bg-[#0b1222] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                  Company / School Title
                </label>
                <input
                  type="text"
                  name="company"
                  value={contactForm.company}
                  onChange={handleFormChange}
                  placeholder="e.g. Merdeka Academy Group"
                  className="w-full py-2.5 px-3 rounded-lg text-[11px] bg-[#0b1222] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                  Desired Platform Module
                </label>
                <select
                  name="projectType"
                  value={contactForm.projectType}
                  onChange={handleFormChange}
                  className="w-full py-2.5 px-3 rounded-lg text-[11px] bg-[#0b1222] border border-white/10 focus:border-brand-accent text-white focus:outline-none"
                >
                  <option value="Academic Portal (SIS)">Academic Portal (SIS)</option>
                  <option value="Village Civil Platform">Village Civil Platform</option>
                  <option value="Enterprise Custom ERP">Enterprise Custom ERP</option>
                  <option value="Database Auditing / REST Scaling">Database Auditing / REST Scaling</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                Describe your system gaps or goals
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={contactForm.message}
                onChange={handleFormChange}
                placeholder="Briefly state current database structures, SAP integration requirements, offline limitations, or timeline parameters..."
                className="w-full py-2.5 px-3 rounded-lg text-[11px] bg-[#0b1222] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-3 px-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl text-[11px] flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Thank you! Your solutions design brief is successfully logged. Bagus Batra will evaluate your schemas and contact you within 24 hours.</span>
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent/95 text-white font-mono text-[11px] tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Dispatch Solutions Proposal
                  </button>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
