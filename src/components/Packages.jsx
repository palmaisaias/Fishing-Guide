import React from 'react'
import { GiftIcon, FireIcon, StarIcon, SunIcon } from '@heroicons/react/solid'

export default function Packages() {
  const packageData = [
    {
      icon: <GiftIcon className="h-10 w-10 text-blue-600" />,
      title: 'Beginner’s Catch',
      price: '$99',
      description: 'A quick introduction to fishing basics on calm waters.',
    },
    {
      icon: <FireIcon className="h-10 w-10 text-red-600" />,
      title: 'Adventure Thrill',
      price: '$199',
      description: 'Gear up for challenging waters and bigger catches.',
    },
    {
      icon: <StarIcon className="h-10 w-10 text-yellow-500" />,
      title: 'Starry Night Expedition',
      price: '$249',
      description: 'Overnight camping & fishing under the stars.',
    },
    {
      icon: <SunIcon className="h-10 w-10 text-green-600" />,
      title: 'Sunrise Deluxe',
      price: '$299',
      description: 'Early-morning expedition with luxury amenities.',
    },
  ]

  return (
    <section id="packages" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Packages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packageData.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {pkg.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{pkg.title}</h4>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="text-2xl font-bold mb-6">{pkg.price}</div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
