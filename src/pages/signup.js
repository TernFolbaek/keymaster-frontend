import React, { useState } from 'react';

const SignUp = ({ handleUserId }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:2000/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === false) {
          document.getElementById('errorMessage').textContent =
            'user not found';
        } else {
          handleUserId(data.info);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='logIn'>
      <h1>
        Sign Up
      </h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <p id='errorMessage'></p>
    </div>
  );
};

export default SignUp;
