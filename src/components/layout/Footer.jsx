import { personalInfo } from '../../data/content';
import { useState } from 'react';

export function Footer() {
    const [secretClicks, setSecretClicks] = useState(0);

    const handleSecretClick = () => {
        setSecretClicks(prev => prev + 1);
        if (secretClicks >= 4) {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            setSecretClicks(0);
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-links">
                    <a href={`mailto:${personalInfo.email}`}>📧 Email</a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                </div>

                <p onClick={handleSecretClick} className="hidden-trigger">
                    Made with attention to detail by{' '}
                    <span style={{
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '600'
                    }}>
                        {personalInfo.name}
                    </span>
                </p>
            </div>
        </footer>
    );
}
