import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const BlogCard = ({ post }) => {
  const { slug, title, category, date, image, excerpt } = post;

  return (
    <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <Link to={`/blog/${slug}`} className="h-48 overflow-hidden block">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <span className="inline-block bg-amber-50 text-yellow-800 text-xs font-semibold uppercase px-3 py-1 rounded-full mb-3 self-start">
          {category}
        </span>

        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
          <Link
            to={`/blog/${slug}`}
            className="hover:text-yellow-800 transition-colors duration-300"
          >
            {title}
          </Link>
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <p className="flex items-center gap-1.5 text-gray-500 text-xs">
            <FaCalendarAlt />
            {date}
          </p>
          <Link
            to={`/blog/${slug}`}
            className="group/btn flex items-center gap-1.5 text-yellow-800 text-sm font-semibold hover:text-yellow-700 transition-colors duration-300"
          >
            Read More
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
