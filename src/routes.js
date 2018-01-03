import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './common/HomePage'
import About from './common/AboutPage'
import Book from './book/BookPage'
import App from './App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={Book}></Route>
  </Route>
);