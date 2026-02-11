import './ProcessTimeline.css';

const ProcessTimeline = () => {
    const steps = [
        {
            number: '01',
            title: 'Discovery',
            description: 'Understanding your business needs and defining the perfect solution architecture.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
            )
        },
        {
            number: '02',
            title: 'Design',
            description: 'Crafting intuitive interfaces and scalable system designs that users love.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                    <circle cx="12" cy="16" r="2"></circle>
                </svg>
            )
        },
        {
            number: '03',
            title: 'Development',
            description: 'Building robust, high-performance systems using cutting-edge technologies.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="M3 12h6m6 0h6"></path>
                    <path d="m5.64 5.64 4.24 4.24m4.24 4.24 4.24 4.24m-12.72 0 4.24-4.24m4.24-4.24 4.24-4.24"></path>
                </svg>
            )
        },
        {
            number: '04',
            title: 'Delivery',
            description: 'Launching your product and providing ongoing support for continuous growth.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="process-timeline-section section">
            <div className="container">
                <h2 className="section-title">Our Process</h2>
                <p className="section-description">
                    From concept to deployment, we follow a proven methodology
                </p>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="step-number-container">
                                <div className="step-number">{step.number}</div>
                            </div>

                            <div className="step-content">
                                <div className="step-visual">
                                    <div className="step-icon-svg">{step.icon}</div>
                                </div>
                                <div className="step-text">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
