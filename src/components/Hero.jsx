import React from 'react';
import { motion } from 'framer-motion';
import robotHero from '../assets/robot-hero.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gp-purple/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-gp-blue/20 border border-gp-blue/40 text-gp-blue text-xs font-semibold mb-6">
                        Transforming Students into Professionals
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        GET <span className="italic font-serif">JOB READY:</span><br />
                        HANDS ON TRAINING <br />
                        & REAL WORLD PROJECTS
                    </h1>

                    <p className="text-gp-muted text-lg mb-8 max-w-lg">
                        Discover the pathway to in demand careers with immersive learning, industry projects, and a real time approach.
                    </p>

                    <button className="btn-primary">
                        Explore Programs
                    </button>
                </div>

                {/* Right Content - Robot Image */}
                <div className="relative z-10 flex justify-center">
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gp-blue to-gp-purple rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img src={robotHero} alt="AI Robot" className="relative w-full h-full object-contain drop-shadow-2xl" />

                        {/* Floating Chat Bubble */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute top-10 right-0 bg-white text-gp-dark p-3 rounded-lg shadow-lg text-xs font-bold max-w-[150px]"
                        >
                            HEY! WELCOME TO GP ACADEMY. LET'S GET YOU FUTURE-READY!
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
