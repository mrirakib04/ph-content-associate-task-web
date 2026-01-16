"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://mrirakib-ph-content-associate-task-server.vercel.app/news?limit=4"
    )
      .then((res) => res.json())
      .then((data) => {
        setFeaturedNews(data.data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 aspect-video bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-3xl"></div>
          <div className="lg:col-span-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-2xl"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );

  const mainNews = featuredNews[0];
  const sideNews = featuredNews.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main News Card - Mobile-e aspect-square, Desktop-e aspect-video */}
        <div className="lg:col-span-8 group relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-4/3 md:aspect-video lg:aspect-auto lg:h-125">
            <img
              src={mainNews?.image}
              alt={mainNews?.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-5 md:p-8 lg:p-10 w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase">
                {mainNews?.category}
              </span>
              <span className="text-zinc-300 text-[10px] md:text-xs">
                {new Date(mainNews?.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <Link href={`/news-details/${mainNews?._id}`}>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight hover:text-red-500 transition-colors">
                {mainNews?.title}
              </h1>
            </Link>
            <p className="hidden md:block text-zinc-300 mt-4 line-clamp-2 text-sm lg:text-base opacity-90">
              {mainNews?.description}
            </p>
          </div>
        </div>

        {/* Side News - Desktop-e Column, Mobile-e auto-grid */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {sideNews.map((news) => (
            <div
              key={news._id}
              className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 hover:border-red-500/30 transition-all shadow-sm"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden rounded-xl">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-red-500 text-[10px] font-bold uppercase tracking-tighter">
                  {news.category}
                </span>
                <Link href={`/news-details/${news._id}`}>
                  <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-100 mt-1 line-clamp-2 leading-snug hover:text-red-600 transition-colors">
                    {news.title}
                  </h3>
                </Link>
                <p className="text-[10px] text-zinc-500 mt-2 font-medium">
                  {new Date(news.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
