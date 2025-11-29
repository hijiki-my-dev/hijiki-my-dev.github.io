import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    // Note: In a real app, project data might come from a CMS or be structured differently to support localization better.
    // For now, we'll use the hardcoded structure but with localized static text.
    const projects = [
        {
            title: 'Project One',
            description: 'A brief description of the project and the technologies used. It solves a specific problem efficiently.',
            tags: ['React', 'Tailwind', 'Node.js'],
            image: 'bg-gradient-to-br from-purple-900 to-indigo-900',
            demoLink: '#',
            repoLink: '#',
        },
        {
            title: 'Project Two',
            description: 'Another amazing project that showcases advanced features and clean architecture.',
            tags: ['TypeScript', 'Next.js', 'Supabase'],
            image: 'bg-gradient-to-br from-blue-900 to-cyan-900',
            demoLink: '#',
            repoLink: '#',
        },
        {
            title: 'Project Three',
            description: 'A creative application with stunning visuals and interactive elements.',
            tags: ['Vue', 'Three.js', 'GSAP'],
            image: 'bg-gradient-to-br from-pink-900 to-rose-900',
            demoLink: '#',
            repoLink: '#',
        },
    ];

    return (
        <section id="projects" className="py-10">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {t('projects.title')}
                </h2>

                <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-panel overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col md:flex-row">
                            <div className={`h-48 md:h-auto md:w-2/5 ${project.image} relative shrink-0`}>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.demoLink} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title={t('projects.viewDemo')}>
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.repoLink} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title={t('projects.viewCode')}>
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col justify-center w-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                    <div className="flex gap-3 md:hidden">
                                        <a href={project.demoLink} className="text-gray-500 hover:text-primary transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                        <a href={project.repoLink} className="text-gray-500 hover:text-primary transition-colors">
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="hidden md:flex gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                                        <a href={project.demoLink} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                                            <ExternalLink size={16} />
                                            {t('projects.viewDemo')}
                                        </a>
                                        <a href={project.repoLink} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                                            <Github size={16} />
                                            {t('projects.viewCode')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
