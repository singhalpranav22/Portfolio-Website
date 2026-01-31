import { achievements } from '../../data/content';

export function Achievements() {
    const emojis = ['🥇', '🏆', '🎯'];

    return (
        <section id="achievements">
            <div className="container">
                <h2 className="section-title">Achievements</h2>

                <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="card reveal"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-lg)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{emojis[index]}</span>
                            <div>
                                <span style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    background: 'var(--gradient-warm)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    {achievement.highlight}
                                </span>
                                <span style={{ color: 'var(--color-text-muted)', marginLeft: 'var(--space-sm)' }}>
                                    {achievement.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
