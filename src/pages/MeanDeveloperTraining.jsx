import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MeanDeveloperTraining = () => {
    return (
        <div className="min-h-screen font-sans flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-[#008ba3] to-[#006978] pt-32 pb-20 px-6 md:px-12 lg:px-24 text-white flex-grow">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-normal mb-4 leading-tight">
                        AI-Integrated MEAN Developer<br />
                        Training Program
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 font-light opacity-90">
                        MongoDB • Express.js • Angular • Node.js
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {/* Card 1: Attendance */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                            <p className="text-sm opacity-80 mb-1">Attendance</p>
                            <p className="text-2xl font-medium">In-Person</p>
                        </div>

                        {/* Card 2: Duration */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                            <p className="text-sm opacity-80 mb-1">Duration</p>
                            <p className="text-2xl font-medium">350–400 Hours</p>
                        </div>

                        {/* Card 3: Outcome 1 */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                            <p className="text-sm opacity-80 mb-1">Outcome 1</p>
                            <p className="text-2xl font-medium">Internship</p>
                        </div>

                        {/* Card 4: Outcome 2 */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                            <p className="text-sm opacity-80 mb-1">Outcome 2</p>
                            <p className="text-2xl font-medium">Certificate</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-[#F0F9FF] text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-medium text-gp-dark mb-8 leading-tight">
                        Master the MEAN Stack with Cutting-Edge AI Integration
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-center">
                        This 350–400-hour program is a detailed journey designed to equip students with essential skills in modern full-stack web development using the MEAN stack (MongoDB, Express.js, Angular 17, and Node.js), significantly enhanced with AI integration. The curriculum progresses from foundational JavaScript and SDLC concepts to advanced server-side development with Node.js/Express.js, database integration using MongoDB and Mongoose ORM, and dynamic frontend development with Angular, ensuring comprehensive industry readiness.
                    </p>
                </div>
            </div>

            {/* Core Modules Section */}
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#009688]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h2 className="text-3xl md:text-5xl font-normal text-gp-dark">Core Modules & Technologies</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            "SDLC + JavaScript Foundations (Foundational concepts and core language mastery)",
                            "Node.js + Express.js (Building scalable backend and REST APIs)",
                            "MongoDB + Mongoose ORM (NoSQL database management and integration)",
                            "Angular 17 Basics + API Integration (Developing modern, single-page applications)",
                            "AI Fundamentals + Integration (Introducing AI concepts and applying them to the stack)",
                            "Testing + Deployment (Ensuring code quality and application launch)",
                            "Capstone Project + Review (Building a complete, real-world application)"
                        ].map((module, index) => (
                            <div key={index} className="flex items-center gap-6 p-6 rounded-2xl border border-[#009688]/20 bg-[#E0F2F1]/30 hover:bg-[#E0F2F1]/50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-[#009688] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-lg text-gray-700 font-medium">{module}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#008ba3] to-[#006978] text-center text-white">
                <h2 className="text-3xl md:text-5xl font-medium mb-12">
                    Ready to launch your career with the power of MEAN and AI?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="px-8 py-3 bg-white text-[#00796B] rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Enroll Now <span>→</span>
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white text-white rounded-md font-semibold hover:bg-white/10 transition-colors">
                        Reserve Your Spot
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MeanDeveloperTraining;
