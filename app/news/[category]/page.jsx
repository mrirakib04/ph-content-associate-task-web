"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";

const CategoryPage = ({ params }) => {
  const { category } = use(params);
  const [news, setNews] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9; // এক পেজে ৯টি নিউজ

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://mrirakib-ph-content-associate-task-server.vercel.app/category-news/${category}?sort=${sortBy}&page=${currentPage}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.result);
        setTotal(data.total);
        setLoading(false);
      });
  }, [category, sortBy, currentPage]);

  const totalPages = Math.ceil(total / limit);

  return (
    <section className="space-y-10 w-full px-4 py-16 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-purple-500/10 pb-8">
        <h1 className="md:text-3xl text-2xl font-bold text-white capitalize">
          Category: <span className="text-purple-500">{category}</span>
        </h1>

        <select
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-[#1E1B4B] border border-purple-500/30 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="date">Latest First</option>
          <option value="popularity">Most Popular</option>
        </select>
      </div>

      {/* 9 News in 1 Grid (3x3 on large screens) */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-80 bg-[#1E1B4B] animate-pulse rounded-2xl border border-purple-500/10"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item._id}
              className="bg-[#1E1B4B] border border-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col group shadow-lg"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] to-transparent opacity-60"></div>
              </div>
              <div className="p-5 flex flex-col grow">
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-purple-400 transition mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-3 mb-4">
                  {item.description}
                </p>
                <div className="mt-auto flex justify-between items-center text-[10px] text-gray-500 border-t border-purple-500/10 pt-4">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <Link
                    href={`/news/${item.category}/${item._id}`}
                    className="text-purple-500 font-bold hover:underline"
                  >
                    DETAILS →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Bar */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-lg font-bold transition-all ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-[#1E1B4B] text-gray-400 hover:bg-purple-500/20"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
