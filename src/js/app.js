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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(styles);
    return (
      <div>
        <div>
          Hello from react
        </div>
        <div className={styles.img} alt='Commander Keen' />

        <Router>
          <div className="container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));