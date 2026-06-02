import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { OWNER } from '../constants';

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-center p-12 md:p-20 shrink-0 border-r border-accent">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-xs text-ink-muted tracking-widest uppercase mb-12"
        >
          {t('About', 'Tentang')} — 02
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-7xl font-light tracking-tightest text-ink mb-10 leading-tight"
        >
          {t('Who I am.', 'Siapa saya.')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-ink-muted font-light leading-relaxed text-base md:text-lg"
        >
          {OWNER.bio}
        </motion.p>
      </div>
    </section>
  );
};

export default About;