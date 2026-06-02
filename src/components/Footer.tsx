import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { OWNER } from '../constants';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-between p-12 md:p-20 shrink-0">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-mono text-xs text-ink-muted tracking-widest uppercase"
      >
        {t('Contact', 'Kontak')} — 05
      </motion.p>

      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-6xl md:text-8xl font-light tracking-tightest text-ink mb-8 leading-none"
        >
          {t("Let's work\ntogether.", "Mari bekerja\nbersama.")}
        </motion.h2>
        <a
          href={`mailto:${OWNER.email}`}
          className="font-mono text-ink-muted hover:text-ink transition-colors text-sm cursor-pointer"
        >
          {OWNER.email} ↗
        </a>
      </div>

      <div className="flex justify-between items-end">
        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {OWNER.name}
        </p>
        <div className="flex gap-6">
          <a href={OWNER.github} target="_blank" rel="noreferrer"
            className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">GitHub</a>
          <a href={OWNER.linkedin} target="_blank" rel="noreferrer"
            className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;