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
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

                        <div className="space-y-12 md:space-y-8">
                            {/* @ts-ignore */}
                            {(t('career.items') as Array<{ date: string; title: string; description: string; url?: string }>).map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-dark-lighter z-10" />

                                    {/* Content Spacer for Desktop */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/10">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                                                {item.date}
                                            </span>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                {item.url ? (
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary"
                                                    >
                                                        {item.title}
                                                    </a>
                                                ) : (
                                                    item.title
                                                )}
                                            </h3>
                                            {item.description && (
                                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
