import { education } from '../../data/content';

export function Education() {
    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="card reveal">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🎓</span>
                        <h3>{education.institution}</h3>
                    </div>
                    <p style={{ color: 'var(--color-text)', marginBottom: 'var(--space-xs)' }}>
                        {education.degree}
                    </p>
                    <p style={{
                        fontSize: '0.875rem',
                        marginBottom: 'var(--space-md)'
                    }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>CGPA: {education.cgpa}</span>
                        <span style={{ margin: '0 0.5rem', color: 'var(--color-text-muted)' }}>•</span>
                        <span style={{ color: 'var(--color-text-muted)' }}>{education.period}</span>
                    </p>
                    <p style={{ fontSize: '0.9375rem' }}>
                        {education.highlight}
                    </p>
                </div>
            </div>
        </section>
    );
}
