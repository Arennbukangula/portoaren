import { useLanguage } from '../LanguageContext';

const LanguageSwitch = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="fixed top-8 right-8 z-50 font-mono text-xs text-ink-muted hover:text-ink transition-colors mix-blend-difference cursor-pointer"
    >
      {lang === 'en' ? 'ID' : 'EN'}
    </button>
  );
};

export default LanguageSwitch;