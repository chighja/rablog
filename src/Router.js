import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Content from './Content/Content';
import Post from './Post/Post';
import history from './utils/history';

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/read" component={Content} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
