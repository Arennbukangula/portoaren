import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="font-serif text-ink text-4xl p-8">
        Portfolio — Setup OK ✓
      </div>
    </LanguageProvider>
  );
}

export default App;