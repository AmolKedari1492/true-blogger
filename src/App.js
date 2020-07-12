import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import PageNotFound from './pages/PageNotFound';
import Posts from './pages/Posts';
import Blog from './pages/Blog';

import {
  ROUTES
} from "./constants/"

function App() {
  return (
    <div className="app">
      <header className="app__header">TrueBlogger</header>
      <section className="app__section">
        <Switch>
          <Route exact path={ ROUTES.BASE } component={ Posts }></Route>
          <Route exact path={ ROUTES.POSTS }  component={ Posts }></Route>
          <Route exact path={ ROUTES.POSTS_ID }  component={ Blog }></Route>
          <Route component={PageNotFound} />
        </Switch>
      </section>
      <footer className="app__footer">This is an assignment of TrueBlogger</footer>
    </div>
  );
}

export default App;
