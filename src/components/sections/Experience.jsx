import { experience } from '../../data/content';

export function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="timeline">
                    {experience.map((job, index) => (
                        <div key={index} className={`timeline-item reveal`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="timeline-date">{job.period}</div>
                            <h3 className="timeline-title">{job.title}</h3>
                            <div className="timeline-company">
                                🏢 {job.company}
                            </div>

                            <div className="timeline-content">
                                <ul>
                                    {job.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
