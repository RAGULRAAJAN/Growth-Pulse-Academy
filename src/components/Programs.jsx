import React from 'react';
import iconFullStack from '../assets/icon-fullstack.png';
import iconMarketing from '../assets/icon-marketing.png';
import iconSecurity from '../assets/icon-security.png';
import iconAI from '../assets/icon-ai.png';

const programs = [
    {
        title: 'Full-Stack Development',
        description: 'Master frontend and backend technologies with hands-on projects in .NET, Java, or Python stacks.',
        features: ['Real-world projects', 'AI Integration', 'Industry mentorship'],
        image: iconFullStack,
        color: 'from-indigo-500 to-purple-600'
    },
    {
        title: 'Digital Marketing',
        description: 'Learn SEO, social media marketing, content strategy, and analytics to drive business growth.',
        features: ['Campaign management', 'Analytics tools', 'Content creation'],
        image: iconMarketing,
        color: 'from-purple-500 to-pink-600'
    },
    {
        title: 'Cybersecurity',
        description: 'Protect systems and networks with comprehensive training in security principles and practices.',
        features: ['Threat detection', 'Security protocols', 'Ethical hacking'],
        image: iconSecurity,
        color: 'from-blue-500 to-indigo-600'
    },
    {
        title: 'AI-Integrated Learning',
        description: 'Integrate artificial intelligence into applications with cutting-edge tools and frameworks.',
        features: ['Machine learning', 'AI libraries', 'Smart applications'],
        image: iconAI,
        color: 'from-violet-500 to-fuchsia-600',
        highlight: true
    }
];

const Programs = () => {
    return (
        <section id="courses" className="py-20 px-6 md:px-12 lg:px-24 bg-[#F0F9FF]">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gp-dark mb-4">OUR MOST IN DEMAND PROGRAMS</h2>
                <p className="text-gp-muted">Explore The Training Programs Designed To Accelerate Your Professional Growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs.map((program, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                        {/* Card Header/Image Area */}
                        <div className={`h-48 bg-gradient-to-br ${program.color} flex items-center justify-center relative p-6`}>
                            <img src={program.image} alt={program.title} className="w-full h-full object-contain drop-shadow-lg transform hover:scale-110 transition-transform duration-300" />
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-gp-dark mb-3">{program.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 flex-grow">{program.description}</p>

                            <ul className="space-y-2 mb-6">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                                        <span className="text-gp-blue">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-2 rounded-full bg-gp-purple/10 text-gp-purple font-semibold text-sm hover:bg-gp-purple hover:text-white transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Programs;
