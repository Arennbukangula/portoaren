import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { OWNER } from '../constants';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-between p-12 md:p-20 shrink-0 border-r border-accent">
      <div className="flex justify-between items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs text-ink-muted tracking-widest uppercase"
        >
          {t('Portfolio', 'Portofolio')} — {new Date().getFullYear()}
        </motion.p>
      </div>

      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-7xl md:text-9xl font-light tracking-tightest leading-none text-ink mb-8"
        >
          {OWNER.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-sans text-ink-muted text-lg font-light max-w-md"
        >
          {OWNER.role}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-8"
      >
        <a href={OWNER.github} target="_blank" rel="noreferrer"
          className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">
          GitHub ↗
        </a>
        <a href={OWNER.linkedin} target="_blank" rel="noreferrer"
          className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">
          LinkedIn ↗
        </a>
        <a href={`mailto:${OWNER.email}`}
          className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">
          Email ↗
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;