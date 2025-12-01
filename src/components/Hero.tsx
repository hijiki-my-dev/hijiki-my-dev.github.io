import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

const Hero = () => {
    const { t } = useLanguage();
    const [isFontAvailable, setIsFontAvailable] = useState(false);

    useEffect(() => {
        const checkFont = async () => {
            try {
                const response = await fetch('/fonts/sao_ui/sao_ui_bold.otf', { method: 'HEAD' });
                if (response.ok) {
                    setIsFontAvailable(true);
                }
            } catch (error) {
                console.log('SAO UI font not available, falling back to default.');
            }
        };
        checkFont();
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="section-container text-center z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-10 animate-fade-in text-gray-900 dark:text-white">
                    <span
                        className={`${isFontAvailable ? 'sao-text' : 'inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'} pb-2`}
                        data-text={isFontAvailable ? t('hero.name') : undefined}
                    >
                        {t('hero.name')}
                    </span>
                </h1>
                <p className="text-[20px] text-gray-600 dark:text-gray-400 mb-0 max-w-2xl mx-auto animate-slide-up opacity-0 whitespace-pre-wrap" style={{ animationDelay: '0.2s' }}>
                    {t('hero.description')}
                </p>
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
