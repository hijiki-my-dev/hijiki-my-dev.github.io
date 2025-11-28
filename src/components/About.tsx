import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-10 bg-gray-50 dark:bg-dark-lighter/50 transition-colors duration-300">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {t('career.title')}
                </h2>

                <div className="max-w-3xl mx-auto">
                    <div className="glass-panel p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                            {t('career.description1')}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6 relative z-10">
                            {t('career.description2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
