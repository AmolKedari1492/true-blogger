import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import PageNotFound from './pages/PageNotFound';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="app">
      <header className="app__header">TrueBlogger</header>
      <section className="app__section">
        <Switch>
          <Route exact path="/" component={ Blogs }></Route>
          <Route exact path="/blogs"  component={ Blogs }></Route>
          <Route exact path="/blogs/:id"  component={ Blog }></Route>
          <Route component={PageNotFound} />
        </Switch>
      </section>
      <footer className="app_footer">TrueBlogger</footer>
    </div>
  );
}

export default App;
