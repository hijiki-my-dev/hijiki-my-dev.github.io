import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t('skills.categories.frontend'),
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5/CSS3'],
        },
        {
            title: t('skills.categories.backend'),
            skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Firebase'],
        },
        {
            title: t('skills.categories.tools'),
            skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'],
        },
    ];

    return (
        <section id="skills" className="py-10 bg-gray-50 dark:bg-dark-lighter/50 transition-colors duration-300">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {t('skills.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-panel p-6 hover:border-primary/50 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-200 dark:border-white/10 pb-4 text-gray-900 dark:text-white">{category.title}</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white dark:bg-dark text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-white/5 hover:text-primary dark:hover:text-white hover:border-primary/30 transition-all duration-300 shadow-sm dark:shadow-none">
                                        {skill}
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
