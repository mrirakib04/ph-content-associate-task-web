"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const categories = [
    { name: "Politics", link: "/news/politics" },
    { name: "Sports", link: "/news/sports" },
    { name: "Technology", link: "/news/technology" },
    { name: "Entertainment", link: "/news/entertainment" },
    { name: "Sara Desh", link: "/saradesh" },
  ];

  return (
    <nav className="bg-[#0F172A] border-b border-purple-500/20 text-gray-100 fixed top-0 z-50 w-full shadow-lg shadow-purple-500/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <FaNewspaper className="text-3xl text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold tracking-tight bg-linear-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
              PH Newspaper
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/news"
              className="text-sm font-medium hover:text-purple-400 transition-colors uppercase tracking-wider"
            >
              All News
            </Link>
            {categories.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-sm font-medium hover:text-purple-400 transition-colors duration-300 border-l border-purple-500/30 pl-4"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNav(!nav)}
              className="text-2xl text-purple-500 p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
            >
              {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#0F172A] transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start p-10 h-full gap-6">
          <button
            onClick={() => setNav(false)}
            className="self-end text-3xl text-purple-500 mb-8"
          >
            <AiOutlineClose />
          </button>

          <Link
            href="/news"
            onClick={() => setNav(false)}
            className="text-2xl font-bold border-b-2 border-purple-500 w-full pb-2"
          >
            All News
          </Link>

          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setNav(false)}
              className="text-xl font-medium hover:text-purple-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
