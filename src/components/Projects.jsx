import { useEffect, useRef } from 'react';
import { projects } from '../data/content';
import './Projects.css';

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current.querySelectorAll('.project-card-v2');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="projects-section-v2 section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Portfolio</h2>
                    <p className="section-description">
                        Showcasing our work in building scalable digital ecosystems
                    </p>
                </div>

                <div className="projects-grid-v2">
                    {projects.map((project, index) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-v2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image-wrapper-v2">
                                <div className="project-placeholder-v2">
                                    <span className="project-number-v2">{String(index + 1).padStart(2, '0')}</span>
                                </div>
                            </div>

                            <div className="project-info">
                                <h3 className="project-name-v2">{project.name}</h3>
                                <p className="project-url">{project.url.replace('https://', '')}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
