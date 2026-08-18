import React from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AgentFeatures from './components/AgentFeatures'
import Details from './components/Details'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Action from './components/Action'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main-container">
      <Header />
      <HeroSection />
      <AgentFeatures />
      <Details />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
