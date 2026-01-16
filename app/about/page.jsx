"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { FaUsers, FaGlobeAmericas, FaAward, FaHistory } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const stats = [
    { icon: <FaUsers />, value: "2M+", label: "Monthly Readers" },
    { icon: <FaGlobeAmericas />, value: "50+", label: "Countries Covered" },
    { icon: <FaAward />, value: "15+", label: "Journalism Awards" },
    { icon: <FaHistory />, value: "10+", label: "Years of Trust" },
  ];

  return (
    <section className="w-full py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div data-aos="fade-right">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
              Truth in <span className="text-purple-500">Motion</span>, <br />
              Trust in Every Word.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2016, **BookWorm Newspaper** has evolved from a local
              news blog to a global digital powerhouse. We believe that in an
              era of misinformation, authentic journalism is the strongest
              pillar of democracy.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our team of 200+ dedicated journalists works around the clock to
              bring you stories that matter—from the heart of local communities
              to the frontiers of global technology.
            </p>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070"
              alt="Newsroom"
              className="relative rounded-[3rem] border border-purple-500/20 shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1E1B4B]/20 border border-purple-500/10 sm:p-8 p-4 md:p-10 rounded-4xl text-center hover:bg-purple-600/5 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl text-purple-500 flex justify-center mb-4">
                {stat.icon}
              </div>
              <h2 className="text-white text-3xl font-black mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="bg-[#1E1B4B]/30 border border-purple-500/10 rounded-4xl p-4 sm:p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-purple-600/5 blur-[100px]"></div>

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-purple-500">Values</span>
            </h2>
            <p className="text-gray-400">
              The principles that guide our editorial decisions every single
              day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Integrity",
                desc: "Unbiased reporting without political or corporate influence.",
              },
              {
                title: "Speed",
                desc: "First to break the news, but never at the cost of accuracy.",
              },
              {
                title: "Community",
                desc: "Giving a voice to the voiceless and highlighting local heroes.",
              },
            ].map((value, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 150}>
                <h3 className="text-purple-400 text-2xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
