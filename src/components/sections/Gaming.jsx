import { gaming } from '../../data/content';

export function Gaming() {
    return (
        <section id="gaming">
            <div className="container">
                <h2 className="section-title">When Not Coding</h2>

                <div className="gaming-card reveal-scale">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                            <span style={{ fontSize: '1.5rem' }}>🎮</span>
                            <span style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                opacity: 0.8
                            }}>
                                {gaming.platform} Gamertag
                            </span>
                        </div>

                        <div className="gamertag">{gaming.gamertag}</div>

                        <p style={{
                            opacity: 0.8,
                            marginBottom: 'var(--space-lg)',
                            maxWidth: '40ch'
                        }}>
                            Always down for a co-op session. Catch me online!
                        </p>

                        <div style={{ marginBottom: 'var(--space-lg)' }}>
                            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                                {gaming.favoriteGames.map((game, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            padding: 'var(--space-xs) var(--space-sm)',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '6px',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        {game}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={gaming.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gaming-link"
                        >
                            View Profile →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
