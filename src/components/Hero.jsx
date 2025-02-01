import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image or video */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541742425281-c1d3fc8aff96?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Peaceful lake at sunrise"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h2 className="text-5xl font-title md:text-7xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
          Discover the Serenity of Nature
        </h2>
        <p className="text-lg md:text-2xl mb-8 font-light tracking-wide opacity-90">
          Embark on a breathtaking fishing adventure like no other
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Book Your Trip
        </button>
      </div>
    </section>
  );
}
