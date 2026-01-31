import { personalInfo } from '../../data/content';

export function Hero({ onNameClick, isGlitching }) {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div className="container">
                <div className="reveal">
                    <span style={{
                        fontSize: '1.25rem',
                        marginBottom: 'var(--space-sm)',
                        display: 'block'
                    }}>
                        👋
                    </span>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--accent-primary)',
                        fontWeight: '500',
                        marginBottom: 'var(--space-md)'
                    }}>
                        Hey, I'm
                    </p>
                </div>

                <h1
                    className={`reveal ${isGlitching ? 'glitch-active' : ''}`}
                    onClick={onNameClick}
                    style={{
                        cursor: 'default',
                        userSelect: 'none',
                        marginBottom: 'var(--space-md)'
                    }}
                >
                    {personalInfo.name}
                </h1>

                <div className="reveal">
                    <p style={{
                        fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-md)'
                    }}>
                        <span className="gradient-text">{personalInfo.tagline}</span>
                        <span className="cursor"></span>
                    </p>
                </div>

                <p className="reveal" style={{
                    fontSize: '1.25rem',
                    maxWidth: '50ch',
                    marginBottom: 'var(--space-xl)'
                }}>
                    {personalInfo.bio}
                </p>

                <div className="reveal" style={{
                    display: 'flex',
                    gap: 'var(--space-lg)',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        style={{
                            padding: 'var(--space-sm) var(--space-lg)',
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            borderRadius: '8px',
                            fontWeight: '600',
                            transition: 'transform 0.2s, box-shadow 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        Let's Talk →
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </section>
    );
}
