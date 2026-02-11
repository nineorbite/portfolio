import { useEffect, useRef } from 'react';
import { companyInfo } from '../data/content';
import './Services.css';

const Services = () => {
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

        const cards = sectionRef.current.querySelectorAll('.service-card-v2');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="services-section-v2 section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title-dark">Our Services</h2>
                    <p className="section-description-dark">
                        Building scalable digital ecosystems for modern businesses
                    </p>
                </div>

                <div className="services-grid-v2">
                    {companyInfo.services.slice(0, 6).map((service, index) => (
                        <div
                            key={service.id}
                            className="service-card-v2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-category">DIGITAL SOLUTIONS</div>
                            <h3 className="service-name-v2">{service.name}</h3>
                            <p className="service-description-v2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
