"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const DistrictPage = ({ params }) => {
  const resolvedParams = use(params);
  const districtName = decodeURIComponent(resolvedParams.district);

  const [news, setNews] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("latest");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://mrirakib-ph-content-associate-task-server.vercel.app/district-news?district=${districtName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data);

        // 📊 Prepare Statistics Data for Chart
        const categoryCounts = data.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {});

        const chartData = Object.keys(categoryCounts).map((cat) => ({
          category: cat,
          count: categoryCounts[cat],
        }));
        setStats(chartData);
        setLoading(false);
      });
  }, [districtName]);

  // Sorting Logic
  const sortedNews = [...news].sort((a, b) => {
    if (sortOrder === "latest") return new Date(b.date) - new Date(a.date);
    if (sortOrder === "popularity")
      return (b.popularity || 0) - (a.popularity || 0);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold border-l-4 border-purple-600 pl-4 capitalize">
            {districtName} <span className="text-purple-500">Dashboard</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Detailed news statistics and articles
          </p>
        </div>

        {/* Sort Feature */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">Sort by:</span>
          <select
            className="bg-[#1E1B4B] border border-purple-500/30 p-2 rounded-lg outline-none"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="latest">Latest News</option>
            <option value="popularity">Most Popular</option>
          </select>
        </div>
      </div>

      {/* 1.2.3 News Statistics Chart */}
      <div className="bg-[#1E1B4B] p-6 rounded-3xl border border-purple-500/10 mb-12">
        <h3 className="text-xl font-semibold mb-6">News by Category</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats}>
              <XAxis dataKey="category" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  border: "1px solid #7c3aed",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {stats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#7c3aed" : "#a855f7"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* District News List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="text-center col-span-full">Loading...</div>
        ) : (
          sortedNews.map((item) => (
            <div
              key={item._id}
              className="bg-[#1E1B4B] rounded-2xl overflow-hidden border border-purple-500/10 group"
            >
              <img
                src={item.image}
                className="h-48 w-full object-cover group-hover:scale-105 transition-all"
                alt=""
              />
              <div className="p-5">
                <h3 className="font-bold text-lg line-clamp-2 mb-2">
                  {item.title}
                </h3>
                <Link
                  href={`/news/${item.category}/${item._id}`}
                  className="text-purple-500 text-sm font-bold"
                >
                  Read Details →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DistrictPage;
