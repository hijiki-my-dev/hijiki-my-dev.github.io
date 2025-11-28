import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-10 bg-gray-50 dark:bg-dark-lighter/50 transition-colors duration-300">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {t('about.title').split(' ')[0]} <span className="text-primary">{t('about.title').split(' ')[1]}</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="glass-panel p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                            {t('about.description1')}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6 relative z-10">
                            {t('about.description2')}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for profile image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                                <span className="text-gray-400 dark:text-gray-600 text-xl">Profile Image</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
