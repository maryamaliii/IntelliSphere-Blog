"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xannndaa");

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mt-10 text-black">Contact Us</h1>
          <p className="mt-4 text-gray-700">We would love to hear from you. Let’s connect!</p>
        </motion.div>

        {/* Contact Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h2 className="text-2xl font-semibold text-blue-600">Connect on LinkedIn</h2>
            <p className="mt-4 text-gray-700">Follow us for the latest updates and professional networking.</p>
            <a
              href="https://www.linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-950 text-white py-2 px-4 rounded-xl shadow-md scale-100 hover:scale-110 hover:bg-blue-700 transition duration-300"
            >
              Visit LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h2 className="text-2xl font-semibold text-blue-600">Send an Email</h2>
            <p className="mt-4 text-gray-700">Drop us an email for inquiries or collaborations.</p>
            <a
              href="mailto:maryamanwar502@gmail.com"
              className="mt-6 inline-block bg-blue-950 text-white py-2 px-4 rounded-xl shadow-md scale-100 hover:scale-110 hover:bg-blue-700 transition duration-300"
            >
              Send Email
            </a>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full"
        >
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Leave a Message</h2>

          {state.succeeded ? (
            <p className="text-center text-blue-900 font-semibold">
              Thank you for reaching out! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  rows={4}
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="text-center mb-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={state.submitting}
                  className="bg-blue-950 text-white py-3 px-6 rounded-xl shadow-md scale-100 hover:scale-110 hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
}
