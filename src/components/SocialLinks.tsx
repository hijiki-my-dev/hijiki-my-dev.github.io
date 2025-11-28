import { Github, Twitter, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialLinks = () => {
    const { t } = useLanguage();

    const socialLinks = [
        { name: 'GitHub', icon: <Github size={24} />, href: 'https://github.com/hijiki-my-dev', color: 'hover:text-gray-600 dark:hover:text-gray-400' },
        { name: 'X', icon: <Twitter size={24} />, href: 'https://x.com/in_hijiki_blog', color: 'hover:text-blue-500 dark:hover:text-blue-400' },
        { name: 'Tech Blog', icon: <BookOpen size={24} />, href: 'https://www.hijiki-blog.org/tech/', color: 'hover:text-green-600 dark:hover:text-green-500' },
    ];

    return (
        <section id="contact" className="py-10">
            <div className="section-container text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                    {t('contact.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
                    {t('contact.description')}
                </p>

                <div className="flex justify-center gap-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-4 glass-panel text-gray-600 dark:text-gray-300 transition-all duration-300 hover:scale-110 ${link.color}`}
                            aria-label={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-white/5 text-gray-500 text-sm">
                    <p>{t('contact.footer').replace('{year}', new Date().getFullYear().toString())}</p>
                </footer>
            </div>
        </section>
    );
};

export default SocialLinks;
