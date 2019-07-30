import React from 'react';
import PropTypes from 'prop-types';

const BlogListItem = ({ author, title, onClick }) => (
  <h3 onClick={onClick}>
    {title} &ndash; {author}
  </h3>
);

BlogListItem.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BlogListItem;
