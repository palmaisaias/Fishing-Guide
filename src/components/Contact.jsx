import React from 'react'
import { PhoneIcon, MailIcon } from '@heroicons/react/outline'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-4">
              <PhoneIcon className="h-6 w-6 text-green-400 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center mb-4">
              <MailIcon className="h-6 w-6 text-blue-400 mr-2" />
              <span>info@tidaltrails.com</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="px-4 py-3 rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-shadow"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
