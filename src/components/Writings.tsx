import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { writings } from '../constants';
import type { Writing } from '../types';

interface Props {
  onSelect: (writing: Writing) => void;
}

const Writings = ({ onSelect }: Props) => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-center p-12 md:p-20 shrink-0 border-r border-accent">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-mono text-xs text-ink-muted tracking-widest uppercase mb-12"
      >
        {t('Writings', 'Tulisan')} — 04
      </motion.p>
      <div className="flex flex-col gap-8 max-w-xl">
        {writings.map((writing, i) => (
          <motion.div
            key={writing.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onSelect(writing)}
            className="group cursor-pointer border-b border-accent pb-8"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-serif text-2xl text-ink font-light group-hover:text-ink-muted transition-colors">
                {writing.title}
              </h3>
              <span className="font-mono text-xs text-ink-muted ml-4 shrink-0">↗</span>
            </div>
            <p className="font-sans text-ink-muted text-sm font-light leading-relaxed mb-3">
              {writing.excerpt}
            </p>
            <div className="flex gap-4">
              <span className="font-mono text-xs text-ink-muted">{writing.date}</span>
              <span className="font-mono text-xs text-ink-muted">{writing.readTime} {t('read', 'baca')}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Writings;