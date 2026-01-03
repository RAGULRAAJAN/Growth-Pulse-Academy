import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
import logoWhite from '../assets/logo-white.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-transparent absolute top-0 left-0 w-full z-50">
<<<<<<< HEAD
            {/* Logo */}
=======
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
            <div className="flex items-center gap-2">
                <img src={logoWhite} alt="GrowthPulse Academy" className="h-16 w-auto" />
            </div>

<<<<<<< HEAD
            {/* Desktop Menu - Added Contact, REMOVED duplicate Login/Register */}
=======
            {/* Desktop Menu */}
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
            <div className="hidden md:flex items-center gap-12 text-sm font-medium text-gray-300">
                <a href="#home" className="text-white border-b-2 border-gp-blue pb-1 transition-colors">Home</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-1">
                    Courses
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
                <a href="#blog" className="hover:text-white transition-colors">Blog</a>
<<<<<<< HEAD
                <a href="#contact" className="hover:text-white transition-colors">Contact</a> {/* ✅ ADDED */}
            </div>

            {/* Desktop CTA - KEEP this as SINGLE Login/Register */}
            <div className="hidden md:flex items-center gap-4">
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Login</Link>
                <Link to="/register" className="px-6 py-2 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white hover:opacity-90 transition-opacity text-sm font-semibold">Register</Link>
=======
            </div>

            <div className="hidden md:block">
                <a href="#contact" className="px-6 py-2 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white hover:opacity-90 transition-opacity text-sm font-medium">
                    Contact
                </a>
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-gp-dark/95 backdrop-blur-md p-6 flex flex-col gap-6 md:hidden shadow-xl border-t border-white/10">
                    <a href="#home" className="text-white text-lg font-medium" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white text-lg font-medium" onClick={toggleMenu}>About</a>
                    <a href="#courses" className="text-gray-300 hover:text-white text-lg font-medium" onClick={toggleMenu}>Courses</a>
                    <a href="#blog" className="text-gray-300 hover:text-white text-lg font-medium" onClick={toggleMenu}>Blog</a>
<<<<<<< HEAD
                    <a href="#contact" className="text-gray-300 hover:text-white text-lg font-medium" onClick={toggleMenu}>Contact</a>
                    <Link to="/login" className="text-gray-300 hover:text-white text-lg font-medium" onClick={toggleMenu}>Login</Link>
                    <Link to="/register" className="px-6 py-3 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white text-center font-semibold" onClick={toggleMenu}>Register</Link>
=======
                    <a href="#contact" className="px-6 py-3 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white text-center font-medium" onClick={toggleMenu}>
                        Contact
                    </a>
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
                </div>
            )}
        </nav>
    );
};

export default Navbar;
