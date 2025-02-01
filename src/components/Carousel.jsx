import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

// Smaller-res images with w=800 & q=70 for performance
const images = [
  'https://images.unsplash.com/photo-1545450660-3378a7f3a364?auto=format&fit=crop&w=800&q=70',
  'https://images.unsplash.com/photo-1532015917327-c7c46aa1d930?auto=format&fit=crop&w=800&q=70',
  'https://images.unsplash.com/photo-1605750416507-734370f71920?auto=format&fit=crop&w=800&q=70',
  'https://images.unsplash.com/photo-1566014727723-20aa739a7b11?auto=format&fit=crop&w=800&q=70',
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <section id="gallery" className="relative py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          Photo Gallery
        </h3>

        {/* Important: Give the parent container a set height (e.g., h-96). 
            This ensures the absolutely positioned slides are visible. */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg h-96">
          {images.map((img, idx) => (
            <Transition
              key={img}
              show={idx === currentIndex}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              /* Absolutely position each slide to stack them in the same space */
              className="absolute inset-0"
            >
              <img
                src={img}
                alt={`Carousel ${idx}`}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </Transition>
          ))}
        </div>

        {/* Buttons for navigation */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
