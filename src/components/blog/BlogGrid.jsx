import React from "react";
import BlogCard from "./BlogCard";
import { FaSearchMinus } from "react-icons/fa";

const BlogGrid = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div
        data-aos="fade-up"
        className="flex flex-col items-center text-center py-16 bg-white border border-gray-200 rounded-xl"
      >
        <FaSearchMinus className="text-4xl text-gray-300 mb-4" />
        <h3 className="font-bold text-gray-900 mb-1">No Articles Found</h3>
        <p className="text-gray-500 text-sm">
          Try selecting a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {posts.map((post, i) => (
        <div key={post.id} data-aos="fade-up" data-aos-delay={(i % 2) * 100}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
