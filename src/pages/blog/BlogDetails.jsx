import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import blogsData from "../../data/blogs.json";
import BlogCard from "../../components/blog/BlogCard";
import NewsletterSignup from "../../components/blog/NewsletterSignup";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = blogsData
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      {/* Hero / banner */}
      <section className="relative bg-black py-16 sm:py-20">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            data-aos="fade-up"
            className="inline-block bg-yellow-800/90 text-white text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5"
          >
            {post.category}
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-snug"
          >
            {post.title}
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex items-center justify-center gap-4 text-gray-300 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt />
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span className="flex items-center gap-1.5">
              <FaClock />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main article */}
          <article data-aos="fade-up">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-yellow-800 font-semibold text-sm mb-8 hover:text-yellow-700 transition-colors duration-300"
            >
              <FaArrowLeft className="text-xs" />
              Back To All Articles
            </Link>

            <div className="rounded-2xl overflow-hidden mb-8 h-64 sm:h-80">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose-content text-gray-700 leading-relaxed">
              {post.content.map((block, i) =>
                block.type === "heading" ? (
                  <h2
                    key={i}
                    className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p key={i} className="mb-5">
                    {block.text}
                  </p>
                )
              )}
            </div>

            {/* Share row */}
            <div className="flex items-center gap-3 mt-10 pt-6 border-t border-gray-200">
              <span className="text-sm font-semibold text-gray-900">
                Share This Article
              </span>
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-50 border border-gray-200 text-gray-700 hover:bg-yellow-800 hover:text-white hover:border-yellow-800 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-50 border border-gray-200 text-gray-700 hover:bg-yellow-800 hover:text-white hover:border-yellow-800 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-50 border border-gray-200 text-gray-700 hover:bg-yellow-800 hover:text-white hover:border-yellow-800 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Author bio */}
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 mt-8 p-5 bg-stone-50 border border-gray-200 rounded-xl"
            >
              <img
                src={post.authorPhoto}
                alt={post.author}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-gray-500 text-sm">{post.authorRole}</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside data-aos="fade-up" className="space-y-6">
            <div className="bg-yellow-800 rounded-xl p-6 text-center">
              <h4 className="text-white font-bold mb-2">
                Ready To Invest?
              </h4>
              <p className="text-yellow-100 text-sm mb-4">
                Explore verified plots matching your budget and goals.
              </p>
              <Link
                to="/properties"
                className="inline-flex items-center justify-center w-full bg-white text-yellow-800 font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                View Properties
              </Link>
            </div>
          </aside>
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3
              data-aos="fade-up"
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p, i) => (
                <div key={p.id} data-aos="fade-up" data-aos-delay={i * 100}>
                  <BlogCard post={p} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;