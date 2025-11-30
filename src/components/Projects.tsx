import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import hijikiBlogTop from '../assets/hijiki_blog_top.jpeg';
import scrapingTop from '../assets/scraping_top.jpeg';

const Projects = () => {
    const { t } = useLanguage();

    // Note: In a real app, project data might come from a CMS or be structured differently to support localization better.
    // For now, we'll use the hardcoded structure but with localized static text.

    // @ts-ignore
    const projectItems = t('projects.items') as Array<{ title: string; description: string; tags: string[]; url: string }>;

    const projects = projectItems.map((item, index) => ({
        ...item,
        image: index === 0 ? hijikiBlogTop : scrapingTop
    }));

    return (
        <section id="projects" className="py-7 md:py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {t('projects.title')}
                </h2>

                <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row cursor-pointer block"
                        >
                            <div className="h-48 md:h-auto md:w-2/5 relative shrink-0 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 md:p-8 flex flex-col justify-center w-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="text-gray-400 group-hover:text-primary transition-colors">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
