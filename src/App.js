import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Parent from './components/Parent';
import Form from './components/AddEdit';
import Listing from './components/Listing';
import View from './components/View';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
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
            <Route path="/view/:id"  component={View}/>
            
            <Route path="/edit/:id"  component={Form}/>

            <Route path="/youtube">
                <Welcome name='Gaurav' job='IT' />
                <Parent></Parent>
                <Greet name='Deepak' job='Banker' />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
