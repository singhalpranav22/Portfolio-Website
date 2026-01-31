import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Research } from './components/sections/Research';
import { Cat } from './components/sections/Cat';
import { Gaming } from './components/sections/Gaming';
import { Footer } from './components/layout/Footer';
import { ThemeToggle } from './components/shared/ThemeToggle';
import { ScrollSVGs } from './components/shared/ScrollSVGs';
import { useEasterEggs, MatrixRain } from './hooks/useEasterEggs';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
    const { showMatrix, isGlitching, handleNameClick } = useEasterEggs();
    const { theme, toggleTheme } = useTheme();
    useScrollReveal();

    return (
        <>
            <MatrixRain active={showMatrix} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <ScrollSVGs />
            <main className={isGlitching ? 'glitch-active' : ''}>
                <Hero onNameClick={handleNameClick} isGlitching={isGlitching} />
                <Experience />
                <Education />
                <Projects />
                <Achievements />
                <Research />
                <Cat />
                <Gaming />
            </main>
            <Footer />
        </>
    );
}

export default App;
