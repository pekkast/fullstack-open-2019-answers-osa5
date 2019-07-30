import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignupForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const emitValues = e => {
    e.preventDefault();
    handleSubmit(username, password, name);
  };

  return (
    <form onSubmit={emitValues}>
      <label htmlFor="signupform-username">Käyttäjätunnus</label>
      <input
        type="text"
        name="username"
        id="signupform-username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <br />
      <label htmlFor="signupform-password">Salasana</label>
      <input
        type="password"
        name="password"
        id="signupform-password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <br />
      <label htmlFor="signupform-name">Nimi</label>
      <input
        type="text"
        name="name"
        id="signupform-name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
