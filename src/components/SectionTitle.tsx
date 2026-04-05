import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ title, subtitle, align = 'center' }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 space-y-4 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold">
        {title} <span className="text-primary">.</span>
      </h2>
      {subtitle && (
        <p className="text-white/50 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className={`h-1.5 w-20 bg-primary rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;
