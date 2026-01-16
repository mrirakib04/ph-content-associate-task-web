"use client";
import React, { useState } from "react";
import { FaPlay, FaVideo, FaRegClock } from "react-icons/fa";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Sample Video Data (Apni pore API theke nite parben)
  const videos = [
    {
      id: "1",
      title: "The Future of Quantum Computing in 2026",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
      duration: "05:20",
      category: "Technology",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example URL
    },
    {
      id: "2",
      title: "Exploring the Deepest Parts of the Ocean",
      thumbnail:
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1974",
      duration: "12:45",
      category: "Science",
      videoUrl: "https://www.youtube.com/embed/HA4_gVHBUXc?si=0IPGJuf_X_r9-B0v",
    },
    {
      id: "3",
      title: "Global Politics: A Shift in Power Dynamics",
      thumbnail:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070",
      duration: "08:10",
      category: "Politics",
      videoUrl: "https://www.youtube.com/embed/5Y83xq7xfps?si=ayBT7BLM6FJWE48j",
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className="flex flex-col mb-12 text-left border-l-4 border-purple-600 pl-6"
          data-aos="fade-right"
        >
          <h2 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold tracking-tight">
            Video <span className="text-purple-500">Spotlight</span>
          </h2>
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mt-2">
            Watch the latest stories in motion
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              {/* Thumbnail Wrapper */}
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/20 border border-purple-500/10">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                    <FaPlay className="ml-1" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-bold flex items-center gap-1">
                  <FaRegClock /> {video.duration}
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-purple-600 text-[10px] px-3 py-1 rounded-full text-white font-black uppercase tracking-tighter">
                  {video.category}
                </div>
              </div>

              {/* Title & Info */}
              <div className="mt-5 space-y-2">
                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-purple-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-purple-500 font-bold text-[10px] uppercase tracking-widest">
                  <FaVideo /> Exclusive Coverage
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal (Simple Implementation) */}
        {activeVideo && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm">
            <button
              className="absolute top-6 right-6 text-white text-4xl hover:text-purple-500 transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              ×
            </button>
            <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl">
              <iframe
                className="w-full h-full"
                src={activeVideo}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
