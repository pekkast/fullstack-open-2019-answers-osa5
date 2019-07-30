import React, { useState } from 'react';
import Like from './Like';
import './Blog.scss';

const Blog = ({ blog, handleLike, canDelete, handleDelete }) => {
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
      <div>
        <a href={blog.url}>{blog.url}</a><br />
        <Like likes={blog.likes} handleClick={() => handleLike(blog.id)} />
        <div>
          Added by {blog.user && blog.user.name}
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
