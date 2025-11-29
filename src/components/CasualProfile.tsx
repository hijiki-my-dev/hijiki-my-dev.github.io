import { useLanguage } from '../contexts/LanguageContext';

const CasualProfile = () => {
    const { t } = useLanguage();

    return (
        <section id="profile" className="py-10">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                    {t('profile.title')}
                </h2>

                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                        {t('profile.description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                        <a href="https://twitter.com/hijiki_engineer" target="_blank" rel="noopener noreferrer"
                            className="flex items-center p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 hover:shadow-md transition-all group">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </div>
                            <div className="ml-4 text-left">
                                <h3 className="font-bold text-gray-900 dark:text-white">X (Twitter)</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">@hijiki_engineer</p>
                            </div>
                        </a>

                        <a href="https://github.com/hijiki51" target="_blank" rel="noopener noreferrer"
                            className="flex items-center p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 hover:shadow-md transition-all group">
                            <div className="p-2 bg-gray-100 dark:bg-white/10 rounded-lg text-gray-700 dark:text-white group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                            </div>
                            <div className="ml-4 text-left">
                                <h3 className="font-bold text-gray-900 dark:text-white">GitHub</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">@hijiki51</p>
                            </div>
                        </a>

                        <a href="https://qiita.com/hijiki51" target="_blank" rel="noopener noreferrer"
                            className="flex items-center p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 hover:shadow-md transition-all group">
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-lg">Q</span>
                            </div>
                            <div className="ml-4 text-left">
                                <h3 className="font-bold text-gray-900 dark:text-white">Qiita</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Tech Blog</p>
                            </div>
                        </a>

                        <a href="https://zenn.dev/hijiki51" target="_blank" rel="noopener noreferrer"
                            className="flex items-center p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 hover:shadow-md transition-all group">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <div className="ml-4 text-left">
                                <h3 className="font-bold text-gray-900 dark:text-white">Zenn</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Tech Articles</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasualProfile;
