import React, { useState, useEffect } from 'react'
import Splash from './components/Splash'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import { Transition } from '@headlessui/react'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  // Hide the splash screen after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-white text-gray-900">
      {/* Splash Page with a fade-out transition */}
      <Transition
        show={showSplash}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Splash />
      </Transition>

      {/* Main Content will appear once Splash is faded out */}
      {!showSplash && (
        <div>
          <Hero />
          <Packages />
          <Carousel />
          <Contact />
        </div>
      )}
    </div>
  )
}
