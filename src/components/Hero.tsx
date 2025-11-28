import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="section-container text-center z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900 dark:text-white">
                    {t('hero.greeting')} <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">{t('hero.name')}</span>{t('hero.role')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
                    {t('hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
                    <a href="#projects" className="btn-primary">
                        {t('hero.viewWork')}
                    </a>
                    <a href="#contact" className="btn-outline">
                        {t('hero.contactMe')}
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
