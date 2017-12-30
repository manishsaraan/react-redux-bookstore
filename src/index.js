import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/common/HomePage'
render(
  <Router  routes={routes} />,
  document.getElementById('app')
);