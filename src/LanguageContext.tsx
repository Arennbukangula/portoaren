import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Lang = 'en' | 'id';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, id: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'id' : 'en');
  const t = (en: string, id: string) => lang === 'en' ? en : id;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};