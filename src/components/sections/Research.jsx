import { researchPapers } from '../../data/content';

export function Research() {
    return (
        <section id="research">
            <div className="container">
                <h2 className="section-title">Research</h2>

                {researchPapers.map((paper, index) => (
                    <div
                        key={index}
                        className={`paper-card reveal`}
                        style={paper.isOwn ? { borderColor: 'var(--accent-secondary)' } : {}}
                    >
                        <div>
                            {paper.isOwn && (
                                <span style={{
                                    display: 'inline-block',
                                    padding: '4px 12px',
                                    background: 'var(--gradient-primary)',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    marginBottom: 'var(--space-sm)'
                                }}>
                                    ✨ My Research
                                </span>
                            )}
                            <h3 className="paper-title">{paper.title}</h3>
                            <p className="paper-meta">
                                {paper.authors} • {paper.year} • {paper.venue}
                            </p>
                            <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.9375rem' }}>
                                {paper.description}
                            </p>
                        </div>
                        <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link">
                            Read →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
