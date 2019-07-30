import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Like from './Like';
import BlogListItem from './BlogListItem';
import './Blog.scss';

const BlogView = ({ blog, handleLike, canDelete, handleDelete }) => {
  const [view, setView] = useState('list');

  if (view === 'list') {
    return (
      <div className="blog-item">
        <BlogListItem
          onClick={() => setView('details')}
          title={blog.title}
          author={blog.author}
        />
      </div>
    );
  }

  return (
    <div className="blog-item">
      <BlogListItem
        onClick={() => setView('list')}
        title={blog.title}
        author={blog.author}
      />
      <div>
        <a href={blog.url}>{blog.url}</a>
        <br />
        <Like likes={blog.likes} handleClick={() => handleLike(blog.id)} />
        <div>
          Added by {blog.user && blog.user.name}
          {canDelete && (
            <button type="button" onClick={() => handleDelete(blog.id)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

BlogView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blog: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BlogView;
