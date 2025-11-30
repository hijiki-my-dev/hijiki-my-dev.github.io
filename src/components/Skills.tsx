import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    // @ts-ignore
    const categories = t('skills.categories') as Record<string, string>;
    // @ts-ignore
    const items = t('skills.items') as Record<string, Array<{ name: string; level: 'high' | 'medium' }>>;

    const categoryOrder = ['languages', 'frameworks', 'cloud', 'tools'];

    return (
        <section id="skills" className="py-7 md:py-10 bg-gray-50 dark:bg-dark-lighter/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {t('skills.title')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {categoryOrder.map((key) => (
                        <div key={key} className="glass-panel shadow-none p-6 border-primary/50 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-200 dark:border-white/10 pb-4 text-gray-900 dark:text-white">
                                {categories[key]}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {items[key]?.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`
                                            px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm
                                            ${skill.level === 'high'
                                                ? 'bg-primary text-white border border-primary shadow-md transform hover:scale-105'
                                                : 'bg-white dark:bg-dark text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 hover:border-primary/30 hover:text-primary dark:hover:text-white'
                                            }
                                        `}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
