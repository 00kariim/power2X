import React from 'react';
import bg from '../assets/bg.jpg'


const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          TOGETHER,<br />POWERING THE GLOBAL ENERGY TRANSITION
        </h1>
        <p className="text-lg md:text-xl font-medium mb-8">
          Join us in Marrakech, October 1–2, 2025, for the 5<sup>th</sup> edition of the World Power-to-X Summit.<br />
          A pivotal event dedicated to green hydrogen, innovation, and a sustainable global future.
        </p>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ffcc00] hover:bg-[#E6A519] transition-colors text-white font-semibold py-3 px-6 rounded-xl shadow-lg mr-4"
        >
          REGISTER NOW
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ffcc00] hover:bg-[#E6A519] transition-colors text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
        >
          GET TOUR TICKET
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
