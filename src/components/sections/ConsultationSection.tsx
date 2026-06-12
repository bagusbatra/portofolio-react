import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { PROJECT_TYPES } from "../../schemas/contactForm";

export default function ConsultationSection() {
  const {
    register,
    handleSubmit,
    isSubmitting,
    isSuccess,
    errorMessage,
    formState: { errors },
  } = useContactForm();

  return (
    <section
      id="consultation-hub"
      className="scroll-mt-24 bg-white/[0.02] border-t border-white/10 pt-16 pb-16 -mx-8 sm:-mx-14 lg:-mx-28 xl:-mx-40 2xl:-mx-48 px-8 sm:px-14 lg:px-28 xl:px-40 2xl:px-48"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-3 max-w-2xl">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
            LET'S BUILD SOMETHING
          </span>
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">
            Discuss Your Project
          </h2>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Have a system in mind? Describe your project briefly, and I'll reach out with a
            tailored architectural proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 space-y-5 backdrop-blur-md"
          >
            {isSuccess && (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-emerald-300 font-sans">
                  Terima kasih! Pesan Anda telah terkirim. Saya akan menghubungi Anda segera.
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <p className="text-xs text-red-300 font-sans">{errorMessage}</p>
              </div>
            )}

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-bold">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                {...register("name")}
                placeholder="Your full name"
                className={"w-full bg-[#0b1222] border " + (errors.name ? "border-red-500/50" : "border-white/10") + " rounded-lg px-4 py-2.5 text-xs text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-brand-accent/60 transition-colors"}
              />
              {errors.name && (
                <p className="text-[10px] text-red-400 font-sans mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-bold">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                className={"w-full bg-[#0b1222] border " + (errors.email ? "border-red-500/50" : "border-white/10") + " rounded-lg px-4 py-2.5 text-xs text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-brand-accent/60 transition-colors"}
              />
              {errors.email && (
                <p className="text-[10px] text-red-400 font-sans mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-bold">
                Company / Institution
              </label>
              <input
                {...register("company")}
                placeholder="Optional"
                className="w-full bg-[#0b1222] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-brand-accent/60 transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-bold">
                Project Type <span className="text-red-400">*</span>
              </label>
              <select
                {...register("projectType")}
                className={"w-full bg-[#0b1222] border " + (errors.projectType ? "border-red-500/50" : "border-white/10") + " rounded-lg px-4 py-2.5 text-xs text-white font-sans focus:outline-none focus:border-brand-accent/60 transition-colors"}
              >
                <option value="">Select project type...</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="text-[10px] text-red-400 font-sans mt-1">{errors.projectType.message}</p>
              )}
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-bold">
                Project Description <span className="text-red-400">*</span>
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Describe your project, goals, and timeline..."
                className={"w-full bg-[#0b1222] border " + (errors.message ? "border-red-500/50" : "border-white/10") + " rounded-lg px-4 py-2.5 text-xs text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-brand-accent/60 transition-colors resize-none"}
              />
              {errors.message && (
                <p className="text-[10px] text-red-400 font-sans mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-brand-accent text-white text-[11px] font-mono tracking-widest uppercase font-semibold hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 backdrop-blur-md">
              <h3 className="font-display text-sm font-semibold text-white tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:bagusbatr@gmail.com"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                      Email
                    </p>
                    <p className="text-xs text-slate-300 group-hover:text-brand-accent transition-colors font-sans">
                      bagusbatr@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                      Phone
                    </p>
                    <p className="text-xs text-slate-300 font-sans">+62 (WhatsApp preferred)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                      Location
                    </p>
                    <p className="text-xs text-slate-300 font-sans">Indonesia (GMT+7)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <p className="text-[10px] font-mono text-brand-accent uppercase tracking-widest font-bold mb-2">
                Response Time
              </p>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                I typically respond within <span className="text-white">24 hours</span> during
                business days. For urgent matters, please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
