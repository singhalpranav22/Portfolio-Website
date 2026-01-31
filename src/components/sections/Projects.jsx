import { projects } from '../../data/content';

export function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Featured Project</h2>

                {projects.map((project, index) => (
                    <div key={index} className="card reveal">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                            <span style={{ fontSize: '1.5rem' }}>🚀</span>
                            <h3 style={{
                                fontSize: '1.5rem',
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                {project.title}
                            </h3>
                        </div>

                        <p style={{ marginBottom: 'var(--space-lg)', fontSize: '1.0625rem' }}>
                            {project.description}
                        </p>

                        <div>
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
