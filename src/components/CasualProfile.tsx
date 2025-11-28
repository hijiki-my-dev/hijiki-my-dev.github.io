import { useLanguage } from '../contexts/LanguageContext';
import { Coffee, Camera, Plane } from 'lucide-react';

const CasualProfile = () => {
    const { t } = useLanguage();

    const hobbies = [
        { icon: <Coffee size={24} />, label: 'Coffee' },
        { icon: <Camera size={24} />, label: 'Photography' },
        { icon: <Plane size={24} />, label: 'Travel' },
    ];

    return (
        <section id="profile" className="py-10">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                    {t('profile.title')}
                </h2>

                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        {t('profile.description')}
                    </p>

                    <div className="flex justify-center gap-6">
                        {hobbies.map((hobby, index) => (
                            <div key={index} className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-full">
                                    {hobby.icon}
                                </div>
                                <span className="text-sm font-medium">{hobby.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasualProfile;
