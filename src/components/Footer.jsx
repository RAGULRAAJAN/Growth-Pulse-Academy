import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoWhite from '../assets/logo-white.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gp-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* CTA Section */}
            <div className="text-center mb-20 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your career?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join hundreds of successful graduates who have launched their tech careers with Growthpulse Academy.
                </p>
                <Link to="/contact" className="btn-primary px-8 py-3 rounded-md inline-block">
                    Apply Now
                </Link>
            </div>

            <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {/* Brand */}
                <div>
                    <div className="mb-6">
                        <img src={logoWhite} alt="GrowthPulse Academy" className="h-12 w-auto" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Transforming careers through innovative, hands-on learning experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Explore Programs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h3 className="font-bold mb-6">Programs</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Full Stack .NET</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Full Stack Java</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Full Stack Python</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">MEAN Stack</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                    </ul>
                </div>

                {/* Connect With Us */}
                <div>
                    <h3 className="font-bold mb-6">Connect With Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gp-purple transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gp-purple transition-colors">
                            <FaXTwitter />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gp-purple transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gp-purple transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gp-purple transition-colors">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500 relative z-10">
                Copyright © 2025 Growthpulse Academy. All rights reserved.
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gp-purple/20 blur-3xl rounded-full pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
