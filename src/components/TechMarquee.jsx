import Marquee from "react-fast-marquee";
import './TechMarquee.css';

const TechMarquee = () => {
    const techStack = [
        '#REACT', '#NODEJS', '#TYPESCRIPT', '#PYTHON',
        '#AWS', '#AI', '#AUTOMATION', '#SAAS',
        '#NEXTJS', '#MONGODB', '#POSTGRESQL', '#DOCKER'
    ];

    return (
        <section className="tech-marquee-section">
            <Marquee speed={40} gradient={false} className="marquee-row">
                {techStack.map((tech, index) => (
                    <span key={`row1-${index}`} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </Marquee>

            <Marquee speed={40} gradient={false} direction="right" className="marquee-row">
                {techStack.map((tech, index) => (
                    <span key={`row2-${index}`} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </Marquee>

            <Marquee speed={40} gradient={false} className="marquee-row">
                {techStack.map((tech, index) => (
                    <span key={`row3-${index}`} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </Marquee>
        </section>
    );
};

export default TechMarquee;
