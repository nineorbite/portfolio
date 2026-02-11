import { useEffect, useRef } from 'react';
import { companyInfo } from '../data/content';
import './About.css';

const About = () => {
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

        const cards = sectionRef.current.querySelectorAll('.service-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-description">
                        {companyInfo.description}
                    </p>
                    <p className="section-tagline">
                        We specialize in SaaS platforms, automation systems, AI-powered workflows,
                        and high-performance web applications. Our goal is to help businesses move faster,
                        operate smarter, and scale efficiently using technology.
                    </p>
                </div>

                <div className="services-grid">
                    {companyInfo.services.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="why-choose">
                    <h3 className="why-title">Why Choose NineOrbit?</h3>
                    <div className="why-list">
                        {companyInfo.whyChoose.map((reason, index) => (
                            <div key={index} className="why-item">
                                <span className="why-icon">✓</span>
                                <p>{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
