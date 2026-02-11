import { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    const particlesOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.5,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <section id="hero" className="hero-section-v2">
            {/* Background Image */}
            <div className="hero-background">
                <div className="hero-bg-overlay"></div>
            </div>

            {/* Particles Overlay */}
            <Particles
                id="tsparticles"
                options={particlesOptions}
                className="particles-background"
            />

            <div className="hero-content-v2">
                <div className="hero-text-v2">
                    <h1 className="hero-title-v2">
                        NINEORBIT
                    </h1>

                    <div className="hero-typewriter">
                        <TypeAnimation
                            sequence={[
                                'SaaS Development',
                                2000,
                                'Business Automation',
                                2000,
                                'AI Workflows',
                                2000,
                                'Marketing Tech',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="typewriter-text"
                        />
                    </div>
                </div>

                {/* CTA Cards */}
                <div className="cta-cards">
                    <div className="cta-card glass">
                        <svg className="cta-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                        </svg>
                        <h3>SAAS DEVELOPMENT</h3>
                    </div>
                    <div className="cta-card glass">
                        <svg className="cta-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"></path>
                            <path d="m16.24 7.76 4.24-4.24M7.76 16.24 3.52 20.48m12.72 0 4.24-4.24M7.76 7.76 3.52 3.52"></path>
                        </svg>
                        <h3>BUSINESS AUTOMATION</h3>
                    </div>
                    <div className="cta-card glass">
                        <svg className="cta-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        <h3>MARKETING TECH</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
