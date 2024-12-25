"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import localFont from "next/font/local";
const quella = localFont({
    src: "../app/fonts/quella-owyda.otf",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
  

export default function Homepage() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex justify-center items-center bg-black">
          <div className="text-center  px-6 ">
            {/* Headline */}
            <h1 className={`text-4xl font-bold text-white mb-6 ${quella.className}`}>
              Unlock the Power of Artificial Intelligence – Explore <br /> the Future with Us!
            </h1>

            {/* Subheadline */}
            <p className="text-lg font-serif text-gray-300 mb-4">
              Stay informed, inspired, and ahead in the AI revolution. Dive into expert insights, <br /> tutorials, and news crafted for curious minds.
            </p>

            {/* Hero Image */}
            <div className="relative w-full h-full flex justify-center items-center mb-10 ">
              <Image
                src="/home1.png"
                alt="AI Future"
                width={400}
                height={400}
                className="rounded-lg w-auto h-auto animate-pulse"
              />
            </div>

            {/* Call-to-Action Button with black color */}
            <Link
              href="/blog"
              className="inline-block scale-100 hover:scale-110 px-8 py-3 bg-blue-950 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
            >
              Read Our Latest Blogs
            </Link>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
