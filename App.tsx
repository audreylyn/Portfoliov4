import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GiantName from './components/GiantName';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Focus from './components/Focus';
import Contact from './components/Contact';
import VideoIntroduction from './components/VideoIntroduction';

const App: React.FC = () => {
  return (
    <div className="relative sm:px-8 lg:px-12 max-w-7xl mx-auto px-5 overflow-hidden">
      <Header />
      <main>
        <Hero />
        <VideoIntroduction />
        <About />
        <FeaturedWork />
        <Approach />
        <Testimonials />
        <Focus />
        <Contact />
      </main>
    </div>
  );
};

export default App;