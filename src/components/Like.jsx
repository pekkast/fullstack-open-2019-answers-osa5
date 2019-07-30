import React from 'react';

const Like = ({ likes, handleClick }) => (
    <div>
        {likes} likes
        <button onClick={handleClick}>Like</button>
    </div>
);

export default Like;
