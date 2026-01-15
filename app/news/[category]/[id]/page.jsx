"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  FaRegClock,
  FaRegEye,
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaLink,
} from "react-icons/fa";
import { toast } from "react-toastify";

const NewsDetails = ({ params }) => {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://mrirakib-ph-content-associate-task-server.vercel.app/news-details/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4">
        <div className="h-10 w-3/4 bg-[#1E1B4B] animate-pulse rounded mb-6"></div>
        <div className="h-96 w-full bg-[#1E1B4B] animate-pulse rounded-2xl mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-[#1E1B4B] animate-pulse rounded"></div>
          <div className="h-4 w-full bg-[#1E1B4B] animate-pulse rounded"></div>
          <div className="h-4 w-2/3 bg-[#1E1B4B] animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  if (!news)
    return <div className="text-center py-20 text-white">News not found</div>;

  return (
    <article className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      {/* Back Button */}
      <Link
        href={`/news`}
        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
      >
        <FaArrowLeft /> Back to Feed
      </Link>

      {/* Header Section */}
      <header className="space-y-4">
        <span className="bg-purple-600 text-[12px] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-white">
          {news.category}
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mt-2">
          {news.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm border-y border-purple-500/10 py-4">
          <div className="flex items-center gap-2">
            <FaRegClock className="text-purple-500" />
            {new Date(news.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2">
            <FaRegEye className="text-purple-500" />
            {news.popularity || 0} Views
          </div>
          <div className="text-purple-400 font-medium">
            Location: {news.district}, {news.division}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-auto object-cover max-h-125"
        />
      </div>

      {/* Content Section */}
      <div className="prose prose-invert prose-purple max-w-none">
        <p className="text-xl text-gray-300 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-purple-500 first-letter:mr-3 first-letter:float-left">
          {news.description}
        </p>

        {/* Social Share Section */}
        <div className="pt-5 border-t border-purple-500/10 mt-10">
          <div className="bg-[#1E1B4B] p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-1">
              <h4 className="text-white font-bold text-lg">
                Share this article
              </h4>
              <p className="text-gray-400 text-sm">
                Spread the news within the {news.district} community.
              </p>
            </div>

            <div className="flex gap-4">
              {/* Facebook Share */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition-transform"
                title="Share on Facebook"
              >
                <FaFacebookF />
              </a>

              {/* X (Twitter) Share */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(news.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform border border-gray-700"
                title="Share on X"
              >
                <FaTwitter />
              </a>

              {/* LinkedIn Share */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-110 transition-transform"
                title="Share on LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              {/* Copy Link Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Link copied to clipboard!");
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white hover:scale-110 transition-transform"
                title="Copy Link"
              >
                <FaLink />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="pt-10 border-t border-purple-500/10">
        <div className="bg-[#1E1B4B] p-6 rounded-2xl">
          <h4 className="text-white font-bold mb-2">Share this article</h4>
          <p className="text-gray-400 text-sm">
            Help spread the news within the {news.district} community.
          </p>
        </div>
      </footer>
    </article>
  );
};

export default NewsDetails;
