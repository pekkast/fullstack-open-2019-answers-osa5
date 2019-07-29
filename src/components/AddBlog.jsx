import React, { useState } from 'react';

const AddBlog = ({ handleSubmit }) => {
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

export default AddBlog;
