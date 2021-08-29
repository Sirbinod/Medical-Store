import React from "react";
import BlogCard from "../../component/blogCard/blogCard";

const Blog = () => {
  return (
    <div className='blog-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='row'>
              {/* blog posts */}
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
