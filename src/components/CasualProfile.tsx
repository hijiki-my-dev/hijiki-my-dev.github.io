import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Map, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import xLogo from '../assets/x_logo.jpg';
import hijikiBlogLogo from '../assets/hijiki_blog_logo.png';
import hijikiBlogTechLogo from '../assets/hijiki_blog_tech_logo.jpeg';
import kaggleLogo from '../assets/kaggle_logo.jpeg';
import noteLogo from '../assets/note_logo.jpeg';

import profileImage from '../assets/profile.jpg';

const CasualProfile = () => {
    const { t } = useLanguage();
    const [showMore, setShowMore] = useState(false);

    const links = [
        {
            name: 'X (Twitter)',
            url: 'https://x.com/in_hijiki_blog',
            desc: t('profile.links.x'),
            image: xLogo,
            isImage: true
        },
        {
            name: 'ひじきブログ',
            url: 'https://www.hijiki-blog.org/',
            desc: t('profile.links.blog'),
            image: hijikiBlogLogo,
            isImage: true
        },
        {
            name: 'ひじきブログ-TECH',
            url: 'https://www.hijiki-blog.org/tech/',
            desc: t('profile.links.blogTech'),
            image: hijikiBlogTechLogo,
            isImage: true
        },
        {
            name: 'GitHub',
            url: 'https://github.com/hijiki-my-dev',
            desc: t('profile.links.github'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            ),
            isImage: false
        },
        {
            name: 'Kaggle',
            url: 'https://www.kaggle.com/hijikiml',
            desc: t('profile.links.kaggle'),
            image: kaggleLogo,
            isImage: true
        },
        {
            name: 'note',
            url: 'https://note.com/hijiki_blog',
            desc: t('profile.links.note'),
            image: noteLogo,
            isImage: true
        },
        {
            name: 'Blog Map',
            url: 'https://blogmap.jp/details/2307',
            desc: t('profile.links.blogMap'),
            icon: <Map size={24} />,
            isImage: false
        }
    ];

    return (
        <section id="profile" className="py-10">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                    {t('profile.title')}
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 mb-12">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-left flex-1">
                            {t('profile.description_pre')}
                            <a
                                href="https://fontmeme.com/jfont/sao-ui-font/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {t('profile.description_link')}
                                <ExternalLink size={16} className="inline ml-1" />
                            </a>
                            {t('profile.description_post')}
                        </p>
                        <div className="flex-shrink-0">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-32 h-32 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Primary Links (Always visible) */}
                        {links.map((link, index) => {
                            // Hide secondary links on mobile if showMore is false
                            if (index >= 4 && !showMore) {
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden lg:flex flex-col md:flex-row items-center md:items-start p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 shadow-md hover:shadow-lg transition-all group text-center md:text-left h-full"
                                    >
                                        <div className="flex-shrink-0 p-2 bg-gray-50 dark:bg-white/5 rounded-lg group-hover:scale-110 transition-transform w-12 h-12 flex items-center justify-center overflow-hidden mb-3 md:mb-0 md:mr-4">
                                            {link.isImage ? (
                                                <img src={link.image} alt={link.name} className="w-full h-full object-contain" />
                                            ) : (
                                                <div className="text-gray-700 dark:text-gray-300">
                                                    {link.icon}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-grow flex flex-col items-center md:items-start w-full">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-1 justify-center md:justify-start w-full">
                                                {link.name}
                                                <ExternalLink size={12} className="text-gray-400" />
                                            </h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{link.desc}</p>
                                        </div>
                                    </a>
                                );
                            }

                            return (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col md:flex-row items-center md:items-start p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 shadow-md hover:shadow-lg transition-all group text-center md:text-left h-full ${index >= 4 ? 'animate-fade-in' : ''}`}
                                >
                                    <div className="flex-shrink-0 p-2 bg-gray-50 dark:bg-white/5 rounded-lg group-hover:scale-110 transition-transform w-12 h-12 flex items-center justify-center overflow-hidden mb-3 md:mb-0 md:mr-4">
                                        {link.isImage ? (
                                            <img src={link.image} alt={link.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <div className="text-gray-700 dark:text-gray-300">
                                                {link.icon}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-grow flex flex-col items-center md:items-start w-full">
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-1 justify-center md:justify-start w-full">
                                            {link.name}
                                            <ExternalLink size={12} className="text-gray-400" />
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{link.desc}</p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    <div className="mt-8 lg:hidden">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full transition-colors text-sm font-medium"
                        >
                            {showMore ? (
                                <>
                                    <span>Show Less</span>
                                    <ChevronUp size={16} />
                                </>
                            ) : (
                                <>
                                    <span>View More Links</span>
                                    <ChevronDown size={16} />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasualProfile;
