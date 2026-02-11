import { useState } from 'react';
import { companyInfo } from '../data/content';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We specialize in SaaS development, business automation, AI integration, and custom web applications designed to scale your business."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on scope, but most projects range from 4-12 weeks from discovery to delivery."
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes, we offer comprehensive support and maintenance packages to ensure your systems run smoothly."
        }
    ];

    return (
        <footer id="contact" className="footer-section-v2">
            <div className="container">
                {/* FAQ Section */}
                <div className="faq-section">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                >
                                    {faq.question}
                                    <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
                                </button>
                                {openFAQ === index && (
                                    <div className="faq-answer">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-section">
                    <h2 className="contact-title">Get In Touch</h2>
                    <form className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder="Name" className="form-input" />
                            <input type="email" placeholder="Email" className="form-input" />
                        </div>
                        <input type="tel" placeholder="Phone" className="form-input" />
                        <textarea placeholder="Message" className="form-textarea" rows="5"></textarea>
                        <button type="submit" className="form-submit">Send Message</button>
                    </form>
                </div>

                {/* Branding Layers */}
                <div className="footer-branding">
                    <div className="branding-text" style={{ opacity: 1 }}>NINEORBITE</div>
                    <div className="branding-text" style={{ opacity: 0.7 }}>NINEORBITE</div>
                    <div className="branding-text" style={{ opacity: 0.4 }}>NINEORBITE</div>
                    <div className="branding-text" style={{ opacity: 0.2 }}>NINEORBITE</div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} NineOrbit. All rights reserved.
                    </p>
                    <div className="footer-links">
                        <a href="#">Privacy</a>
                        <span>•</span>
                        <a href="#">Terms</a>
                        <span>•</span>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>

            <div className="footer-fab">
                <a href="#hero" className="fab-button">
                    ↑
                </a>
            </div>
        </footer>
    );
};

export default Footer;
