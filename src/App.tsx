import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

import CasualProfile from './components/CasualProfile';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="bg-light dark:bg-dark min-h-screen text-gray-800 dark:text-gray-100 selection:bg-primary/30 selection:text-white transition-colors duration-300">
                    <Navigation />
                    <main>
                        <Hero />
                        <About />
                        <Projects />
                        <Skills />
                        <CasualProfile />
                        <SocialLinks />
                    </main>
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
