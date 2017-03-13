import React from 'react';
import ReactDOM from 'react-dom';
import { signup } from './util/session_api_util.js';
import { login } from './util/session_api_util.js';
import { logout } from './util/session_api_util.js';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
