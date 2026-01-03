import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorldClassTraining from './components/WorldClassTraining';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import TargetAudience from './components/TargetAudience';
import CareerGuidance from './components/CareerGuidance';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
<<<<<<< HEAD
import Login from './pages/Login';
import Register from './pages/Register';

function HomePage() {
=======

function App() {
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
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

<<<<<<< HEAD
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

=======
>>>>>>> 98e299068aa2213734fcad6341709d79da5987cc
export default App;
