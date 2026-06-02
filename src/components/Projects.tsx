import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { projects } from '../constants';
import { Project } from '../types';

interface Props {
  onSelect: (project: Project) => void;
}

const Projects = ({ onSelect }: Props) => {
  const { t } = useLanguage();
  return (
    <section className="min-w-max h-[100dvh] flex flex-col justify-center px-12 md:px-20 shrink-0 border-r border-accent">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-mono text-xs text-ink-muted tracking-widest uppercase mb-12"
      >
        {t('Projects', 'Proyek')} — 03
      </motion.p>
      <div className="flex gap-8 items-start">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onSelect(project)}
            className="w-72 md:w-80 cursor-pointer group"
          >
            <div className="aspect-video bg-accent overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-ink transition-colors">
              {project.title}
            </h3>
            <p className="font-sans text-ink-muted text-sm font-light leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="font-mono text-xs text-ink-muted border border-accent px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;