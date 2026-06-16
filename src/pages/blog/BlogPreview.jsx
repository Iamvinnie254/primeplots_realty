import React from "react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import blogsData from "../../data/blogs.json";

const BlogPreview = () => {
  const recent = blogsData.slice(0, 3);

  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
          data-aos="fade-up"
        >
          <div>
            <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
              Insights & Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Latest From Our Blog
            </h2>
          </div>
          <a
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-yellow-800 font-semibold hover:text-yellow-700 transition-colors duration-300"
          >
            View All Articles
            <FaArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((post, i) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-amber-50 text-yellow-800 text-xs font-semibold uppercase px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <FaCalendarAlt />
                  {post.date}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:hidden">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-yellow-800 font-semibold"
          >
            View All Articles
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
