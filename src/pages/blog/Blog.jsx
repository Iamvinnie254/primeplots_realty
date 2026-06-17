import React, { useState, useMemo } from "react";
import BlogHero from "../../components/blog/BlogHero";
import BlogGrid from "../../components/blog/BlogGrid";
import CategoriesSidebar from "../../components/blog/CategoriesSidebar";
import NewsletterSignup from "../../components/blog/NewsletterSignup";
import blogsData from "../../data/blogs.json";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const categories = useMemo(
    () => [...new Set(blogsData.map((post) => post.category))],
    [],
  );

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return blogsData;
    return blogsData.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          <BlogGrid posts={filteredPosts} />
          <CategoriesSidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        <div className="mt-14">
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
};

export default Blog;
