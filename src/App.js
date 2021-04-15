import React, { Component, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import env from './environments/index';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Parent from './components/Parent';
import ErrorBoundary from './core/services/window.error';
import './App.css';

const Listing = lazy(() => import('./components/Listing'));
const Form = lazy(() => import('./components/AddEdit'));
const View = lazy(() => import('./components/View'));


class App extends Component {
  render() {
    console.log(env.env)
    return (
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="App">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/youtube">Youtube</Link>
                </li>

                <li>
                  <Link to="/list">Listing</Link>
                </li>
              </ul>

              <Switch>
                <Route path="/add" component={Form}>
                </Route>

                <Route path="/list" component={Listing}>
                </Route>
                <Route path="/view/:id" component={View} />

                <Route path="/edit/:id" component={Form} />

                <Route path="/youtube">
                  <Welcome name='Gaurav' job='IT' />
                  <Parent></Parent>
                  <Greet name='Deepak' job='Banker' />
                </Route>
                <Route path="/">
                </Route>
                <Route>
                  <h1>Not found</h1>
                </Route>
              </Switch>
            </div>
          </Suspense>
        </ErrorBoundary>
      </Router>
    );
  }
}

export default App;
