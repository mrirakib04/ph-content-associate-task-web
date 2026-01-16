"use client";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://mrirakib-ph-content-associate-task-server.vercel.app/breaking-news"
    )
      .then((res) => res.json())
      .then((data) => setBreakingNews(data))
      .catch((err) => console.error("Error fetching breaking news:", err));
  }, []);

  console.log(breakingNews);

  return (
    <div className="max-w-7xl mx-auto px-4 xl:mt-4 w-full overflow-hidden">
      <div className="flex items-center bg-white dark:bg-zinc-900 border border-red-500/20 rounded-lg overflow-hidden shadow-sm">
        {/* Label */}
        <div className="bg-red-600 xl:flex hidden text-white px-4 py-2 font-bold text-sm uppercase tracking-wider whitespace-nowrap z-10">
          Breaking News
        </div>

        {/* Marquee Content */}
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
          className="py-2"
        >
          {breakingNews.length > 0 ? (
            breakingNews.map((news, index) => (
              <div key={news._id} className="flex items-center">
                <Link
                  href={`/news/${news.category}/${news._id}`}
                  className="text-zinc-800 dark:text-zinc-200 hover:text-red-600 transition-colors font-medium mx-6"
                >
                  {news.title}
                </Link>
                {/* Separator icon */}
                <span className="text-red-500 font-bold">•</span>
              </div>
            ))
          ) : (
            <span className="px-10 text-gray-400 italic">
              Loading latest updates...
            </span>
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
