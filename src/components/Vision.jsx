import { companyInfo } from '../data/content';
import './Vision.css';

const Vision = () => {
    return (
        <section id="vision" className="vision-section section">
            <div className="container">
                <div className="vision-content">
                    <div className="vision-icon">🎯</div>
                    <h2 className="vision-title">Our Vision</h2>
                    <p className="vision-text">
                        {companyInfo.vision}
                    </p>
                    <div className="vision-decoration"></div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
