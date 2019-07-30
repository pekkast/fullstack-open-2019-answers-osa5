import React from 'react';

const successStyle = {
  border: '2px solid green',
  padding: '10px 20px',
};

const errorStyle = {
  border: '2px solid red',
  padding: '10px 20px',
};

const Notification = ({ note }) =>
  note && <div style={note.error ? errorStyle : successStyle}>{note.text}</div>;

export default Notification;
