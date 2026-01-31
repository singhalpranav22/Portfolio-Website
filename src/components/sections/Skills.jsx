import { skills } from '../../data/content';

const skillCategories = [
    { key: 'languages', label: 'Languages', icon: '💻' },
    { key: 'frameworks', label: 'Frameworks', icon: '⚡' },
    { key: 'databases', label: 'Databases', icon: '🗄️' },
    { key: 'devops', label: 'DevOps & Cloud', icon: '☁️' },
    { key: 'tools', label: 'Tools', icon: '🛠️' },
];

export function Skills() {
    return (
        <section id="skills" style={{ background: 'white' }}>
            <div className="container">
                <h2 className="section-title">Skills & Tools</h2>

                <div className="skills-grid">
                    {skillCategories.map(({ key, label, icon }, index) => (
                        <div
                            key={key}
                            className="skill-category fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <span style={{ fontSize: '1.25rem' }}>{icon}</span>
                                <h3>{label}</h3>
                            </div>
                            <div className="skill-list" style={{ marginTop: 'var(--space-md)' }}>
                                {skills[key].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="tag"
                                        style={{
                                            animationDelay: `${(index * 0.1) + (i * 0.05)}s`
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
