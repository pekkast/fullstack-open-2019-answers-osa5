import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const emitValues = e => {
    e.preventDefault();
    handleSubmit(username, password);
  };

  return (
    <form onSubmit={emitValues}>
      <label htmlFor="loginform-username">Käyttäjätunnus</label>
      <input
        type="text"
        name="username"
        id="loginform-username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <br />
      <label htmlFor="loginform-password">Salasana</label>
      <input
        type="password"
        name="password"
        id="loginform-password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
