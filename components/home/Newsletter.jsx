"use client";
import React from "react";
import { FaPaperPlane, FaEnvelopeOpenText } from "react-icons/fa";
import { toast } from "react-toastify";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast.success("Thanks for subscribing! Check your inbox soon.");
      e.target.reset();
    }
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>

        <div
          className="relative bg-[#1E1B4B]/20 border border-purple-500/10 rounded-[40px] sm:p-8 p-4 md:p-16 text-center backdrop-blur-sm"
          data-aos="zoom-in"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-purple-600/10 border border-purple-500/20 text-purple-500 text-3xl mb-8 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <FaEnvelopeOpenText />
          </div>

          {/* Text Content */}
          <div className="max-w-2xl mx-auto space-y-4 mb-10">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
              Stay Ahead of the <span className="text-purple-500">Curve</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Subscribe to our newsletter and get the most important news from{" "}
              <span className="text-purple-400 font-semibold">BookWorm</span>{" "}
              delivered straight to your inbox daily.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="max-w-lg mx-auto relative group"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 bg-black/40 border border-purple-500/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_20px_rgba(147,51,234,0.3)] hover:shadow-purple-600/40 active:scale-95"
              >
                Subscribe <FaPaperPlane className="text-sm" />
              </button>
            </div>

            {/* Trust Badge */}
            <p className="mt-6 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-medium">
              NO SPAM • UNSUBSCRIBE ANYTIME • SECURE DATA
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
