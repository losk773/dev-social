import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Login } from './components/auth/Login';

import { RegisterContainer } from './containers';
import { AlertContainer } from './containers';

import { store } from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <section className="container">
          <AlertContainer/>
          <Switch>
            <Route exact path="/register" component={RegisterContainer}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
