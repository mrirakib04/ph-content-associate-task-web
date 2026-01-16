"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaChartLine,
  FaFlask,
  FaPalette,
  FaBullhorn,
  FaMicrochip,
  FaGlobe,
  FaArrowRight,
  FaGavel,
  FaRunning,
  FaFilm,
} from "react-icons/fa";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Technology");
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Technology",
      icon: <FaMicrochip />,
      color: "text-blue-400",
    },
    {
      id: 2,
      name: "Politics",
      icon: <FaGavel />, // Politics er jonno Gavel icon
      color: "text-emerald-400",
    },
    {
      id: 3,
      name: "Sports",
      icon: <FaRunning />, // Sports icon
      color: "text-amber-400",
    },
    {
      id: 4,
      name: "Entertainment",
      icon: <FaFilm />, // Entertainment icon
      color: "text-purple-400",
    },
    {
      id: 5,
      name: "Science",
      icon: <FaFlask />,
      color: "text-pink-400",
    },
    {
      id: 6,
      name: "Design",
      icon: <FaPalette />,
      color: "text-orange-400",
    },
    {
      id: 7,
      name: "Global",
      icon: <FaGlobe />,
      color: "text-cyan-400",
    },
  ];

  // Functional API Call
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://mrirakib-ph-content-associate-task-server.vercel.app/category-news/${activeTab}?limit=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsList(data.result || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [activeTab]);

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="flex flex-col mb-12 text-left border-l-4 border-purple-600 pl-6"
          data-aos="fade-right"
        >
          <h2 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold tracking-tight">
            Explore <span className="text-purple-500">Insights</span>
          </h2>
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mt-2">
            Discover curated content by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => setActiveTab(cat.name)}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === cat.name
                  ? "bg-[#1E1B4B] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  : "bg-zinc-900/50 border-purple-500/10 hover:border-purple-500/30"
              }`}
            >
              <div
                className={`text-2xl mb-3 transition-transform duration-500 group-hover:scale-125 ${
                  activeTab === cat.name ? "text-purple-400" : "text-gray-600"
                }`}
              >
                {cat.icon}
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${
                  activeTab === cat.name ? "text-white" : "text-gray-500"
                }`}
              >
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic News Display Area */}
        <div
          className="mt-12 bg-[#1E1B4B]/30 border border-purple-500/10 rounded-3xl p-8"
          data-aos="zoom-in"
        >
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsList.length > 0 ? (
                newsList.map((news) => (
                  <div key={news._id} className="group cursor-pointer">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <img
                        src={news.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                      <span className="absolute bottom-3 left-3 bg-purple-600 text-[10px] px-2 py-1 rounded text-white font-bold uppercase">
                        {news.category}
                      </span>
                    </div>
                    <Link href={`/news-details/${news._id}`}>
                      <h3 className="text-white font-bold text-lg line-clamp-2 hover:text-purple-400 transition-colors">
                        {news.title}
                      </h3>
                    </Link>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-500 text-xs">
                        {new Date(news.date).toLocaleDateString()}
                      </span>
                      <Link
                        href={`/news-details/${news._id}`}
                        className="text-purple-500 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        READ <FaArrowRight className="text-[10px]" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 py-20 text-center">
                  <p className="text-gray-500 italic">
                    No news found in this category.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
