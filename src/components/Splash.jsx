import React, { forwardRef } from 'react';

const Splash = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/35/HHEvkhEsQLaNDRkui4fg_fullsize.jpg?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Splash content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide mb-6 drop-shadow-lg animate-fade-in">
          Tidal Trails Fishing Adventures
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-wide opacity-90 animate-fade-in-delayed">
          Where every cast tells a story
        </p>
      </div>
    </div>
  );
});

export default Splash;
