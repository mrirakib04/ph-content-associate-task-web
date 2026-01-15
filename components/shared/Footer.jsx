"use client";
import React from "react";
import Link from "next/link";
import {
  FaNewspaper,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-purple-500/20 text-gray-300 w-full mt-auto">
      <div className="max-w-7xl px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <FaNewspaper className="text-3xl text-purple-500" />
              <span className="text-2xl font-bold tracking-tight bg-linear-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                PH Newspaper
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              আপনার বিশ্বস্ত সংবাদ মাধ্যম। সারাদেশের সব সর্বশেষ আপডেট এবং
              বিশ্লেষণ নিয়ে আমরা আছি আপনার পাশে।
            </p>
          </div>

          {/* Categories Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-purple-500 font-bold uppercase tracking-wider text-sm">
              Categories
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/news/politics"
                className="text-sm hover:text-purple-400 transition"
              >
                Politics
              </Link>
              <Link
                href="/news/sports"
                className="text-sm hover:text-purple-400 transition"
              >
                Sports
              </Link>
              <Link
                href="/news/technology"
                className="text-sm hover:text-purple-400 transition"
              >
                Technology
              </Link>
              <Link
                href="/news/entertainment"
                className="text-sm hover:text-purple-400 transition"
              >
                Entertainment
              </Link>
            </div>
          </div>

          {/* Quick Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-purple-500 font-bold uppercase tracking-wider text-sm">
              Support
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/saradesh"
                className="text-sm hover:text-purple-400 transition"
              >
                Sara Desh (Map)
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-purple-400 transition"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-purple-400 transition"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm hover:text-purple-400 transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Socials & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-purple-500 font-bold uppercase tracking-wider text-sm">
              Follow Us
            </h4>
            <div className="flex gap-4 text-2xl">
              <a
                target="_blank"
                href="https://github.com/mrirakib04/"
                className="hover:text-purple-500 transition"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/webdev-rakib"
                className="hover:text-purple-500 transition"
              >
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaTwitter />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Stay connected for real-time updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 PH Newspaper. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Powered by Next.js</span>
            <span className="text-purple-500/50">|</span>
            <span>Task Submission by Md. Rakibul Islam Rakib</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
