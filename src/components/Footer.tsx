// import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    // const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-white dark:bg-dark-lighter border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                    © {currentYear} Hijiki. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
