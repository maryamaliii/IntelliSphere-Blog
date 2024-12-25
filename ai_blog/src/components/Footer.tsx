"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import localFont from "next/font/local";
import Link from "next/link";

  const quella = localFont({
    src: "../app/fonts/quella-owyda.otf",
    variable: "--font-geist-mono",
    weight: "100 900",
  });

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4">
          <h1 className={`text-2xl ${quella.className}`}>IntelliSpere</h1>
          <p className="text-gray-300">
          Sharing stories, insights, and ideas that inspire and inform. Stay connected with us.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-300">
        © {new Date().getFullYear()} IntelliSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
