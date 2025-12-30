import React from 'react';
import logoWhite from '../assets/logo-white.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-transparent absolute top-0 left-0 w-full z-10">
            <div className="flex items-center gap-2">
                <img src={logoWhite} alt="GrowthPulse Academy" className="h-12 w-auto" />
            </div>

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
            </div>

            <a href="#contact" className="px-6 py-2 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white hover:opacity-90 transition-opacity text-sm font-medium">
                Contact
            </a>
        </nav>
    );
};

export default Navbar;
