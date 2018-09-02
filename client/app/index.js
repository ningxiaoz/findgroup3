import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import About from "./components/Pages/About";
import Home from './components/Pages/Home';
import Group from "./components/Group/Group";
import Signin from "./components/Auth/Signin";
import Register from "./components/Auth/Register";

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/group" component={Group}/>
        <Route path="/login" component={Signin}/>
        <Route path="/signup" component={Register}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
