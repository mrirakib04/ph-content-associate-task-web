"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 9;

  const categories = [
    "all",
    "Politics",
    "Sports",
    "Technology",
    "Entertainment",
  ];

  useEffect(() => {
    setLoading(true);
    const categoryQuery =
      activeCategory !== "all" ? `&category=${activeCategory}` : "";

    fetch(
      `https://mrirakib-ph-content-associate-task-server.vercel.app/news?page=${currentPage}&limit=${itemsPerPage}${categoryQuery}`
    )
      .then((res) => res.json())
      .then((resData) => {
        setNews(resData.data);
        setTotalCount(resData.totalCount);
        setLoading(false);
      });
  }, [activeCategory, currentPage]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="space-y-10 w-full px-4 py-16 max-w-7xl mx-auto">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="md:text-3xl text-2xl font-bold text-white border-l-4 border-purple-600 pl-4">
          Latest <span className="text-purple-500">News Feed</span>
        </h1>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#1E1B4B] text-gray-400 hover:bg-purple-500/10 hover:text-purple-400"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-80 w-full bg-[#1E1B4B] animate-pulse rounded-2xl"
            ></div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item._id}
                className="bg-[#1E1B4B] border border-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all group flex flex-col"
              >
                <div className="h-48 w-full bg-purple-900/20 relative overflow-hidden">
                  <img
                    src={
                      item.image ||
                      "https://via.placeholder.com/400x200?text=News"
                    }
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-purple-600 text-[10px] px-2 py-1 rounded font-bold uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col grow">
                  <h2 className="text-xl font-bold group-hover:text-purple-400 transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-6 flex justify-between items-center border-t border-purple-500/10">
                    <span className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <Link
                      href={`/news/${item.category}/${item._id}`}
                      className="text-sm font-bold text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 bg-[#1E1B4B] cursor-pointer text-white rounded-lg disabled:opacity-50 hover:bg-purple-600 transition"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-lg cursor-pointer transition ${
                    currentPage === index + 1
                      ? "bg-purple-600 text-white"
                      : "bg-[#1E1B4B] text-gray-400 hover:bg-purple-500/20"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 bg-[#1E1B4B] cursor-pointer text-white rounded-lg disabled:opacity-50 hover:bg-purple-600 transition"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {news.length === 0 && !loading && (
        <div className="text-center py-20 bg-[#1E1B4B] rounded-3xl border border-dashed border-purple-500/20">
          <p className="text-gray-500 text-lg">
            No news found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default NewsPage;
