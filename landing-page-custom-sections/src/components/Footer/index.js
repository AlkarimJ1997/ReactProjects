import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our exclusive membership to receive the latest news and trends
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" className="footer-input" placeholder="Your Email" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">YouTube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <FaGithub className="navbar-icon" />
                            REACT
                        </Link>
                    </div>
                    <small className="website-rights">REACT &copy; {new Date().getFullYear()}</small>
                    <div className="social-icons">
                        <Link to="/" className="social-icon-link" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </Link>
                        <Link to="/" className="social-icon-link" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                        <Link to="/" className="social-icon-link" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </Link>
                        <Link to="/" className="social-icon-link" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </Link>
                        <Link to="/" className="social-icon-link" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer