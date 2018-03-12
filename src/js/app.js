import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

let styles = require('../css/style.scss');

import Home from './pages/Home';
import About from './pages/About';
import Messages from './pages/Messages';

import MessageController from './../api/MessageController'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    MessageController.all(
      (res) => { console.log(res); }, 
      (err) => { console.log(err); }
    )
  }

  render() {
    return (
      <div>
        <Router>
          <div className="content">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/messages">Messages</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));