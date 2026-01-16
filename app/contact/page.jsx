"use client";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email Us",
      value: "info@phnews.com",
      subText: "For news tips and press releases",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Call Support",
      value: "+880 1234 567 890",
      subText: "Mon - Fri, 9am - 6pm",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Visit Office",
      value: "Level 12, Media Tower",
      subText: "Gulshan-2, Dhaka, Bangladesh",
    },
  ];

  return (
    <section className="w-full py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="text-left mb-16 border-l-4 border-purple-600 pl-6"
          data-aos="fade-right"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-purple-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Have a story to share or a question for our editorial team? We're
            here to listen and help you stay informed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-[#1E1B4B]/20 border border-purple-500/10 p-4 sm:p-8 rounded-[2.5rem] backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-6">
                  <div className="text-2xl p-4 bg-purple-600 text-white rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">
                      {info.label}
                    </p>
                    <h3 className="text-white text-lg sm:text-xl font-bold">
                      {info.value}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{info.subText}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div
              className="bg-purple-600/5 border border-purple-500/10 p-8 rounded-[2.5rem]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-white font-bold mb-6">Follow our newsroom</p>
              <div className="flex gap-4">
                {[
                  <FaFacebookF />,
                  <FaTwitter />,
                  <FaLinkedinIn />,
                  <FaYoutube />,
                ].map((icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 bg-white/5 hover:bg-purple-600 text-white rounded-xl flex items-center justify-center transition-all duration-300"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="lg:col-span-2 bg-[#1E1B4B]/30 border border-purple-500/10 p-4 sm:p-8 md:p-12 rounded-[3rem] backdrop-blur-md"
            data-aos="zoom-in"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message Sent");
                e.target.reset();
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-purple-500/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/40 border border-purple-500/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="News Tip / Feedback"
                  className="w-full bg-black/40 border border-purple-500/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-black/40 border border-purple-500/20 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold px-12 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(168,85,247,0.3)] active:scale-95">
                  Send Message <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
