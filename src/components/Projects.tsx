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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-panel overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className={`h-48 ${project.image} relative`}>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.demoLink} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title={t('projects.viewDemo')}>
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.repoLink} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title={t('projects.viewCode')}>
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5">
                                            {tag}
                                        </span>
                                    ))}
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
