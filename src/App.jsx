import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorldClassTraining from './components/WorldClassTraining';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import TargetAudience from './components/TargetAudience';
import CareerGuidance from './components/CareerGuidance';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] font-sans">
      <Navbar />
      <Hero />
      <WorldClassTraining />
      <WhyChooseUs />
      <Programs />
      <TargetAudience />
      <CareerGuidance />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
