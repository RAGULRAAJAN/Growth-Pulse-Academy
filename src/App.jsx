import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorldClassTraining from './components/WorldClassTraining';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import TargetAudience from './components/TargetAudience';
import CareerGuidance from './components/CareerGuidance';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

import Contact from './pages/Contact';
import CourseDetail from './components/CourseDetail';

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
