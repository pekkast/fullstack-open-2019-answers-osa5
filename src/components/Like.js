import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ likes, handleClick }) => (
  <div>
    {likes} likes
    <button onClick={handleClick}>Like</button>
  </div>
);

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Like;
