import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withToggling from './Togglable';

const AddBlog = ({ handleSubmit, hide }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const emitValues = async e => {
    e.preventDefault();
    const success = await handleSubmit(title, author, url);
    if (success) {
      setAuthor('');
      setTitle('');
      setUrl('');

      if (typeof hide === 'function') {
        hide();
      }
    }
  };

  return (
    <div>
      <h2>Add blog</h2>
      <form onSubmit={emitValues}>
        <label htmlFor="addblog-title">Title</label>
        <input
          type="text"
          name="title"
          id="addblog-title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <br />
        <label htmlFor="addblog-author">Author</label>
        <input
          type="text"
          name="author"
          id="addblog-author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
        <br />
        <label htmlFor="addblog-url">Url</label>
        <input
          type="text"
          name="url"
          id="addblog-url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

AddBlog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hide: PropTypes.func,
};

const TogglableAddBlog = withToggling(AddBlog);

export { AddBlog, TogglableAddBlog };
export default TogglableAddBlog;
