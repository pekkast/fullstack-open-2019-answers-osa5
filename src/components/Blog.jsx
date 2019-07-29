import React, { useState } from 'react';
import './Blog.scss';

const Blog = ({ blog }) => {
  const [view, setView] = useState('list');

  if (view === 'list') {
    return (
      <div className="blog-item">
        <h3 onClick={() => setView('details')}>{blog.title} &ndash; {blog.author}</h3>
      </div>
    );
  }

  return (
    <div className="blog-item">
      <h3 onClick={() => setView('list')}>{blog.title} &ndash; {blog.author}</h3>
      <p>
        <a href={blog.url}>{blog.url}</a><br />
        {blog.likes} likes <button>Like</button>
      </p>
    </div>
  );
};

export default Blog;
