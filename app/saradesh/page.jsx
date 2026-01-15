"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Saradesh = () => {
  const [allDistricts, setAllDistricts] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all districts/divisions on mount
  useEffect(() => {
    fetch(
      "https://mrirakib-ph-content-associate-task-server.vercel.app/districts"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllDistricts(data);
        const uniqueDivisions = [...new Set(data.map((item) => item.division))];
        setDivisions(uniqueDivisions);
      });
  }, []);

  // Filter districts when division changes
  useEffect(() => {
    if (selectedDivision) {
      const districts = allDistricts.filter(
        (d) => d.division === selectedDivision
      );
      setFilteredDistricts(districts);
      setSelectedDistrict("");
    }
  }, [selectedDivision, allDistricts]);

  // Fetch news when district is selected
  useEffect(() => {
    if (selectedDistrict) {
      setLoading(true);
      fetch(
        `https://mrirakib-ph-content-associate-task-server.vercel.app/district-news?district=${selectedDistrict}`
      )
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
          setLoading(false);
        });
    }
  }, [selectedDistrict]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="bg-[#1E1B4B] p-8 rounded-3xl border border-purple-500/10 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-purple-600 pl-4">
          Countrywide <span className="text-purple-500">Latest News</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Division Select */}
          <div className="space-y-2">
            <label className="text-gray-400 text-sm ml-1">
              Select Division
            </label>
            <select
              className="w-full bg-[#0F172A] border border-purple-500/20 text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-600 transition"
              onChange={(e) => setSelectedDivision(e.target.value)}
              value={selectedDivision}
            >
              <option value="">-- Choose Division --</option>
              {divisions.map((div) => (
                <option key={div} value={div}>
                  {div}
                </option>
              ))}
            </select>
          </div>

          {/* District Select */}
          <div className="space-y-2">
            <label className="text-gray-400 text-sm ml-1">
              Select District
            </label>
            <select
              disabled={!selectedDivision}
              className="w-full bg-[#0F172A] border border-purple-500/20 text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-600 transition disabled:opacity-50"
              onChange={(e) => setSelectedDistrict(e.target.value)}
              value={selectedDistrict}
            >
              <option value="">-- Choose District --</option>
              {filteredDistricts.map((dis) => (
                <option key={dis._id} value={dis.district}>
                  {dis.district}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* District News Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-80 bg-[#1E1B4B] animate-pulse rounded-2xl"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.length > 0
            ? news.map((item) => (
                <div
                  key={item._id}
                  className="bg-[#1E1B4B] border border-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col grow">
                    <h3 className="text-lg font-bold text-white line-clamp-2 mb-3 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-4">
                      {item.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center pt-4 border-t border-purple-500/10">
                      <span className="text-[10px] text-gray-500">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <Link
                        href={`/news/${item.category}/${item._id}`}
                        className="text-purple-500 text-sm font-bold hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : selectedDistrict &&
              !loading && (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No news found for this district.
                </div>
              )}
        </div>
      )}

      {!selectedDistrict && (
        <div className="text-center py-20 bg-[#1E1B4B]/30 rounded-3xl border border-dashed border-purple-500/20">
          <p className="text-gray-400">
            Please select a district to view local news
          </p>
        </div>
      )}

      {selectedDistrict && !loading && (
        <div className="flex justify-between items-center bg-purple-900/20 p-6 rounded-2xl border border-purple-500/30 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white">
              Viewing news for{" "}
              <span className="text-purple-400">{selectedDistrict}</span>
            </h3>
            <p className="text-gray-400 text-sm">
              You can view detailed statistics and advanced filters for this
              district.
            </p>
          </div>

          {/* Eita holo oi missing connection Link */}
          <Link
            href={`/saradesh/${selectedDistrict}`}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20"
          >
            View District Dashboard →
          </Link>
        </div>
      )}
    </section>
  );
};

export default Saradesh;
