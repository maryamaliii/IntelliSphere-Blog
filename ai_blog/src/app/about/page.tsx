"use client";
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen">
        {/* Header */}
        <header className=" text-black py-8">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl mt-8 font-bold"
            >
              Meet Maryam Anwar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl"
            >
              Founder of  IntelliSphere Blog
            </motion.p>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16 px-6 lg:px-24">
          <motion.div
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="order-2 md:order-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold text-blue-700">About Me</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Hi, I’m <strong>Maryam Anwar</strong>, a passionate and results-driven front-end web developer specializing in crafting 
                elegant, responsive, and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I create 
                seamless user experiences using cutting-edge frameworks like Tailwind CSS, React, and Next.js. 
                <br />
                <br />
                I believe every line of code should serve a purpose, and I take pride in my attention to detail—from ensuring 
                pixel-perfect designs to optimizing performance for fast load times. My journey in development is driven by a love 
                for creativity and problem-solving, constantly learning new technologies to deliver innovative and impactful solutions. 
                <br />
                <br />
                When I’m not coding, you’ll often find me exploring new design trends, writing tutorials to share my knowledge, or 
                experimenting with interactive animations to make web experiences more dynamic and engaging.
              </p>
              <button
                onClick={openModal}
                className="mt-6 bg-blue-950 text-white py-2 px-4 rounded-xl shadow-md hover:bg-blue-700 scale-100 hover:scale-110 transition duration-300"
              >
                More about my journey
              </button>
            </motion.div>

            <motion.div
              className="order-1 md:order-2 flex justify-center items-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/pfp.jpg"
                alt="Maryam Anwar"
                width={240}
                height={240}
                className="rounded-full w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 object-cover shadow-lg shadow-black"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Modal for More Info */}
        <Transition show={isOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
            <div className="flex items-center justify-center min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black opacity-30" />
                </Transition.Child>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="ease-in duration-200"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
              >
                <div className="relative bg-white rounded-xl px-8 py-6 max-w-lg mx-auto shadow-lg">
                  <Dialog.Title className="text-2xl font-semibold text-gray-900">
                    My Journey
                  </Dialog.Title>
                  <Dialog.Description className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Starting as a medical science graduate, I soon discovered my passion for technology. 
                    Over the years, I’ve developed web applications, created learning resources, and explored 
                    innovative ways to simplify programming education. 
                    <br />
                    <br />
                    My goal is to inspire others to believe in their ability to create impactful solutions and 
                    embrace the evolving tech world with confidence.
                  </Dialog.Description>
                  <div className="mt-6 text-center">
                    <button
                      onClick={closeModal}
                      className="bg-blue-950 text-white py-2 px-6 rounded-xl shadow-md hover:bg-blue-700 scale-100 hover:scale-110 transition duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
