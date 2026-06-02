import { motion } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';
import type { Project, Writing } from '../types';
import { useLanguage } from '../LanguageContext';

interface Props {
  item: Project | Writing;
  type: 'project' | 'writing' | null;
  onClose: () => void;
}

const isProject = (item: Project | Writing): item is Project => 'technologies' in item;

const DetailOverlay = ({ item, type, onClose }: Props) => {
  const { t } = useLanguage();
  const project = isProject(item) ? item : null;
  const writing = !isProject(item) ? item : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 overflow-y-auto"
    >
      <div className="max-w-3xl mx-auto p-12 md:p-20 min-h-screen flex flex-col">
        <div className="flex justify-between items-start mb-12">
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            {type === 'project' ? t('Project Detail', 'Detail Proyek') : t('Writing', 'Tulisan')}
          </span>
          <button
            onClick={onClose}
            className="text-ink-muted hover:text-ink transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl font-light tracking-tightest text-ink mb-8 leading-tight"
        >
          {item.title}
        </motion.h1>

        {project && (
          <>
            {project.image && (
              <div className="aspect-video bg-accent overflow-hidden mb-8">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover grayscale" />
              </div>
            )}
            <p className="font-sans text-ink-muted font-light leading-relaxed mb-8">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map(tech => (
                <span key={tech} className="font-mono text-xs text-ink-muted border border-accent px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-ink hover:text-ink-muted transition-colors cursor-pointer">
                  <ExternalLink size={14} /> {t('Live Site', 'Lihat Live')}
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-ink hover:text-ink-muted transition-colors cursor-pointer">
                  <Code size={14} /> GitHub
                </a>
              )}
            </div>
          </>
        )}

        {writing && (
          <>
            <div className="flex gap-4 mb-8">
              <span className="font-mono text-xs text-ink-muted">{writing.date}</span>
              <span className="font-mono text-xs text-ink-muted">{writing.readTime} {t('read', 'baca')}</span>
            </div>
            <p className="font-sans text-ink-muted font-light leading-relaxed mb-8">
              {writing.content}
            </p>
            {writing.link && (
              <a href={writing.link} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-ink hover:text-ink-muted transition-colors cursor-pointer">
                <ExternalLink size={14} /> {t('Read Full Article', 'Baca Artikel Lengkap')}
              </a>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default DetailOverlay;