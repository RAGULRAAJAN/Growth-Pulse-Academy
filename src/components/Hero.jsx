import React from 'react';
import { motion } from 'framer-motion';
import robotHero from '../assets/header-image.png';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gp-purple/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div className="z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-gp-blue/20 border border-gp-blue/40 text-gp-blue text-xs font-semibold mb-6">
                        Transforming Students into Professionals
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        GET <span className="italic font-serif font-normal">JOB READY:</span><br />
                        HANDS ON TRAINING <br />
                        & REAL WORLD PROJECTS
                    </h1>

                    <p className="text-gp-muted text-lg mb-8 max-w-lg">
                        Discover the pathway to in demand careers with immersive learning, industry projects, and a real time approach.
                    </p>

                    <button className="px-8 py-3 rounded-md bg-gradient-to-r from-gp-purple to-gp-blue text-white font-semibold hover:opacity-90 transition-opacity">
                        Explore Programs
                    </button>
                </div>

                {/* Right Content - Robot Image */}
                <div className="relative z-10 flex justify-center">
                    <div className="relative w-80 h-80 md:w-[900px] md:h-[900px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gp-blue to-gp-purple rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img src={robotHero} alt="AI Robot" className="relative w-full h-full object-contain drop-shadow-2xl scale-[1.8]" />

                        {/* Floating Chat Bubble */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute top-4 right-[25%] bg-white text-gp-dark p-4 rounded-xl rounded-bl-none shadow-lg text-xs font-bold max-w-[200px] leading-relaxed"
                        >
                            HEY! WELCOME TO GP ACADEMY. LET'S GET YOU FUTURE-READY!
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[#F0F9FF]"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[#F0F9FF]"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[#F0F9FF]"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
