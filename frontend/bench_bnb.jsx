import React from 'react';
import ReactDOM from 'react-dom';
import { signup } from './util/session_api_util.js';
import { login } from './util/session_api_util.js';
import { logout } from './util/session_api_util.js';
import configureStore from './store/store';
import Root from  './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
